const generator = require("./generator");
const config = require("./getConfig")();
let code;
try {
  code = require("./secret/code.json").code;
} catch (e) {
  console.log("Error while loading the code, you may want to run updateCode first");
  process.exit();
}
const command = generator.getAccessTokenCommand(config.CLIENT_ID, code);

const outputStr = require("child_process").execSync(command).toString();
try {
  const output = JSON.parse(outputStr);
  if (output.error) throw new Error(output.error);
  const token = output.access_token;
  require("fs").writeFileSync("./secret/token.json", JSON.stringify({token}));
  console.log(`Written to 'secret/token.json' Please do not share this with any`);
} catch (e) {
  console.log(e);
  console.log("Error while requesting token, you may want to run updateCode first")
}