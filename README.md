# automate-chrome-extension-update
Automate Chrome Extension Update Workflow

Read this first https://developer.chrome.com/webstore/using_webstore_api 

Node 7 is required

For the first time please create extension.json with following keys (obtain from above link)

{
  "CLIENT_ID": "<CLIENT_ID>",
  "APP_ID": "<APP_ID>"
}

and run 'node <command.js>'

## Preparing commands

### updateCode.js
Get the link in the console then open the browser, copy the code and paste into the console

### updateToken.js
Automated request the token

## Operation commands
These operations require code and token are ready ...

### getUploadStatus.js
Simply request the status of the extension

### updatePackage.js _PATH-TO-ZIP-FILE_
The parameter is the absolute path to the zip file to update

## Tip

Please see https://github.com/phonglk/chrome-extension-webpack-boilerplate on how to integrate to project