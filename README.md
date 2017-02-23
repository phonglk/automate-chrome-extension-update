# automate-chrome-extension-update
Automate Chrome Extension Update Workflow
Node 7 is required
For the firs time please create secret/config.json with content
{
  "CLIENT_ID": "<CLIENT_ID>",
  "APP_ID": "<APP_ID>"
}

and run 'node ...'
## Preparing

Packed into ./prepare

### updateCode.js
Get the link in the console then open the browser, copy the code and paste into the console

### updateToken.js
Automated request the token

## Operation
These operations require code and token are ready ...

### getUploadStatus.js
Simply request the status of the extension

### updatePackage.js _PATH-TO-ZIP-FILE_
The parameter is the absolute path to the zip file to update
