const htmlString = `<!DOCTYPE html> 
<html lang="en"> 
    <head>  
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  
        <title>Internal Project Initiative</title> 
        <link rel="stylesheet" href="styles.css"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> 
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"> 
    </head>  
    <body> 
        <hr class="pb"> 
        <table>
            <thead>
                <tr> 
                    <th colspan="2">Section Metadata</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Style</td>
                    <td>main-section</td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th colspan="2">Card Block</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h1>INT: Internal Project Initiative</h1>  
                        <p>Wednesday, July 31 • 5:00 - 5:30pm</p>
                        <a href="#" class="join-button">Join with Google Meet</a>
                        <p class="google-meet-link">meet.google.com/kcp-hijc-jep</p>
                        <p> 
                            <a href="#" class="phone-link">
                                <i class="fas fa-phone-alt"></i>
                                Join by phone
                            </a>
                        </p>
                        <p class="phone-number">(CA) +1 289-351-9533 PIN: 748 674 352#</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th colspan="2">Details Block</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p><a href="#" class="more-phone-link">More phone numbers</a></p>
                        <div class="guests">
                            <h2>3 guests</h2>
                            <p>1 yes • 1 no • 1 awaiting</p>
                            <ul class="guest-list">
                                <li>Satoru Inoue <span class="organizer">Organizer</span></li>
                                <li>  Justin Desjardins  <span class="status">  <i class="fas fa-plane"></i> Declined because I am on vacation  </span>  </li>
                                <li>  Patrick Daggitt  <span class="status">  <i class="fas fa-briefcase"></i> Office • <a href="#">Edit</a>  </span>  </li>
                            </ul>
                        </div>
                        <p>10 minutes before <strong>Satoru Inoue</strong></p>
                        <div class="response-buttons">
                            <button class="response-yes">Yes</button>
                            <button class="response-no">No</button>
                            <button class="response-maybe">Maybe</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>  
        <hr class="pb">  
    </body>
</html>`;

export default htmlString;
