
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '22138813073-kni60897ebcf3m2vuvdgccgcnj2s0t4t.apps.googleusercontent.com';
const CLIENT_SECRET = 'q4XesILjDkULGVQeArwIf4bz';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//048M8rKkX4QfdCgYIARAAGAQSNwF-L9IrqXT5nJALTfvoCwHFwgeqP5YKB0oTvFA8cgf2B7Qit5XaNd_1VNJQIhe4QjuISq72AuM';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

/* 
filepath which needs to be uploaded
Note: Assumes example.jpg file is in root directory, 
though this can be any filePath
*/
const filePath = path.join(__dirname, 'prueba.jpg');

uploadFile();
async function uploadFile() {
  console.log('aqui');
  try {
    const response = await drive.files.create({
      requestBody: {
        name: 'prueba.jpg', //This can be name of your choice
        mimeType: 'image/jpg',
      },
      media: {
        mimeType: 'image/jpg',
        body: fs.createReadStream(filePath),
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}


async function deleteFile() {
  try {
    const response = await drive.files.delete({
      fileId: 'YOUR FILE ID',
    });
    console.log(response.data, response.status);
  } catch (error) {
    console.log(error.message);
  }
}

// deleteFile();

async function generatePublicUrl() {
  try {
    const fileId = 'YOUR FILE ID';
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    /* 
    webViewLink: View the file in browser
    webContentLink: Direct download link 
    */
    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    });
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
}