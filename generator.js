function getCodeRequestUrl(CLIENT_ID) {
  return `https://accounts.google.com/o/oauth2/auth?response_type=code&scope=https://www.googleapis.com/auth/chromewebstore&client_id=${CLIENT_ID}&redirect_uri=urn:ietf:wg:oauth:2.0:oob`;
}

function getAccessTokenCommand(CLIENT_ID, CODE) {
  return `curl "https://accounts.google.com/o/oauth2/token" -d "client_id=${CLIENT_ID}&code=${CODE}&grant_type=authorization_code&redirect_uri=urn:ietf:wg:oauth:2.0:oob"`
}

function getUploadStatusCommand(TOKEN, APP_ID) {
  return `curl -H "Authorization: Bearer ${TOKEN}" -H "x-goog-api-version: 2" -H "Content-Length: 0" -H "Expect:" -X GET -v "https://www.googleapis.com/chromewebstore/v1.1/items/${APP_ID}?projection=draft"`;
}

function getUploadPackageCommand(TOKEN, APP_ID, FILE_NAME) {
  return `curl -H "Authorization: Bearer ${TOKEN}"  -H "x-goog-api-version: 2" -X PUT -T ${FILE_NAME} -v https://www.googleapis.com/upload/chromewebstore/v1.1/items/${APP_ID}`;
}

function getPublishPackageCommand(TOKEN, APP_ID) {
  return `curl -H "Authorization: Bearer ${TOKEN}"  -H "x-goog-api-version: 2" -H "Content-Length: 0" -X POST -v https://www.googleapis.com/chromewebstore/v1.1/items/${APP_ID}/publish`;
}

module.exports = {
  getCodeRequestUrl,
  getAccessTokenCommand,
  getUploadStatusCommand,
  getUploadPackageCommand,
  getPublishPackageCommand,
}