const generator = require("./generator");
const config = require("./getConfig")();
let token;
try {
  token = require("./secret/token.json").token;
} catch (e) {
  console.log("Error while loading the token, you may want to run updateToken first");
  process.exit();
}
const command = generator.getUploadStatusCommand(token, config.APP_ID);
console.log(command+'\n');
const outputStr = require("child_process").execSync(command).toString();
try {
  const output = JSON.parse(outputStr);
  if (output.error) throw new Error(output.error);
  console.log(JSON.stringify(output,null,2));
} catch (e) {
  console.log(JSON.stringify(e));
  console.log("Error while requesting, you may want to run updateToken first")
}