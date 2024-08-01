import http from "http";
import { google } from 'googleapis';
import htmlString from './html.js';

const googleAuth = new google.auth.GoogleAuth({
  keyFilename: './etc/keys/aem-middleware-40e1668c153a.json',
  scopes: [ 'https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive' ]
});

const host = 'localhost';
const port = 8000;
const docs = google.docs({ version: 'v1', auth: googleAuth });
const drive = google.drive({ version: 'v3', auth: googleAuth });   
const folderId = '1_ar20YK9tr-bdtSLKYZrblAMNrV4U12J';
const fileName = 'test';
const fileMetadata = { name: fileName, parents: [folderId], mimeType: 'application/vnd.google-apps.document' };
const html = { mimeType: 'text/html', body: htmlString };

const findFile = async drive => {

    const res = await drive.files.list({
        q: `name='${fileName}' and trashed=false`,
        fields: 'files(id, name)',
    });

    return res.data.files;
}
  
const deleteFile = async (drive, fileId) => { await drive.files.delete({ fileId }); }

const requestListener = async (req, res) => {

    const createResponse = await docs.documents.create();
    const documentId = createResponse.data.documentId;
    
    try {

        const files = await findFile(drive, fileName);

        if ( files.length > 0 ) {

            await deleteFile(drive, files[0].id);
            console.log(`Deleted existing file with ID: ${files[0].id}`);
        }

        drive.files.create({
            requestBody: fileMetadata,
            media: html,
            fields: 'id'
        });

        console.log(`File uploaded with ID: ${documentId}`);

    } catch (error) { console.error('Error uploading file:', error); }

    res.writeHead(200);
    res.end("AEM Middleware has worked succesfully!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
