const generator = require("./generator");
const config = require("./getConfig")();
let token;
try {
  token = require("./secret/token.json").token;
} catch (e) {
  console.log("Error while loading the token, you may want to run updateToken first");
  process.exit();
}
try {
  if (process.argv[2] != "skip") {
    const command = generator.getUploadPackageCommand(token, config.APP_ID, process.argv[2]);
    console.log(command+'\n');
    let outputStr = require("child_process").execSync(command).toString();
    let output = JSON.parse(outputStr);
    if (output.error) throw new Error(output.error);
    console.log(JSON.stringify(output,null,2));
  } else {
    let outputStr = "";
    let output = {};
  }

  const command2 = generator.getPublishPackageCommand(token, config.APP_ID);
  console.log(command2);
  outputStr = require("child_process").execSync(command2).toString();
  output = JSON.parse(outputStr);
  if (output.error) throw new Error(output.error);
  console.log(JSON.stringify(output,null,2));
} catch (e) {
  console.log(JSON.stringify(e));
  console.log("Error while requesting, you may want to run updateToken first")
}