import http from "http";
import { google } from 'googleapis';
import instructions from './data/assistant-instructions.js';
import OpenAI from 'openai';
import 'dotenv/config';
import apiKey from './etc/keys/open-ai.js';
import fs from 'fs';

// AEM VARIABLES
let htmlString = null;

// OPEN AI
const client = new OpenAI({ apiKey: apiKey });

// GOOGLE
const googleAuth = new google.auth.GoogleAuth({
    keyFilename: './etc/keys/aem-middleware-40e1668c153a.json',
    scopes: [ 'https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive' ]
});

const host = 'localhost';
const port = 8000;
const docs = google.docs({ version: 'v1', auth: googleAuth });
const drive = google.drive({ version: 'v3', auth: googleAuth });   
const folderId = '1_ar20YK9tr-bdtSLKYZrblAMNrV4U12J';
const imageFolderId = '1c1Nv_qOQyUKcDcCppownnkeJAJ2C9DRG';
const fileName = 'test';
const fileMetadata = { name: fileName, parents: [folderId], mimeType: 'application/vnd.google-apps.document' };

// METHODS
const findFile = async drive => {

    const res = await drive.files.list({
        q: `name='${fileName}' and trashed=false`,
        fields: 'files(id, name)',
    });

    return res.data.files;
}

const findImages = async drive => {

    const foundFiles = [];

    const res = await drive.files.list({
        q: `'${imageFolderId}' in parents and mimeType contains 'image/'`,
        fields: 'files(id, name)',
    });

    const files = res.data.files;

    if (files.length !== 0) files.forEach(file => { foundFiles.push(`https://drive.google.com/uc?export=view&id=${file.id}`); });

    return foundFiles[0];
}

const deleteFile = async (drive, fileId) => { await drive.files.delete({ fileId }); }

const sendMessage = async () => {

    const imageUrl = await findImages(drive);

    if ( imageUrl ) {

        const jsonPattern = /```json\n([\s\S]*?)```/;
        const messages = [
            { role: "system", content: instructions },
            { role: "user", content: `Here is an image you can use to generate your markup for: ${imageUrl}.` }
        ];
    
        try {

            console.log('Messaging the assistant.');
            const interval = setInterval(() => { process.stdout.write('.') }, 500);
    
            const response = await client.chat.completions.create({
                model: "gpt-4o",
                messages: messages,
            });
    
            if ( response.choices[0].message.content ) {
    
                const match = response.choices[0].message.content.match(jsonPattern);
    
                if ( match ) {
    
                    const jsonString = match[1];
    
                    try {

                        clearInterval(interval);
                        process.stdout.write('\n');
                        console.log('Assistant responce recieved with JSON.');
    
                        const responseContent = JSON.parse(jsonString);
                        const keys = Object.keys(responseContent);
                        const stylesFilePath = '../styles/global-styles.css';

                        htmlString = responseContent["index.html"];

                        keys.splice(keys.indexOf("index.html"), 1);
                        keys.splice(keys.indexOf("styles.css"), 1);

                        if (fs.existsSync(stylesFilePath)) fs.unlinkSync(stylesFilePath);
                        fs.writeFileSync(stylesFilePath, responseContent["styles.css"], 'utf8');

                        try {

                            keys.forEach(key => {

                                let keyName = '';

                                if ( key.includes('.css') ) keyName = key.split('.css').join('');
                                if ( key.includes('.js') ) keyName = key.split('.js').join('');

                                const dirPath = `../blocks/${keyName}`;
                                const filePath = `${dirPath}/${key}`;

                                if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
                                fs.writeFileSync(filePath, responseContent[key], 'utf8');
                            });

                        } catch (err) { console.error(err); }
    
                    } catch (error) { console.error("Failed to parse JSON:", error); }

                } else console.error("No JSON found in the response");
            }
        } catch (error) { console.error("Error sending message:", error); }

    } else { console.error("No images found in the folder."); }
}

const requestListener = async (req, res) => {

    await sendMessage();

    if ( htmlString !== null ) {

        const html = { mimeType: 'text/html', body: htmlString };
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
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});