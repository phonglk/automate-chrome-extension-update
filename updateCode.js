const generator = require("./generator");
const config = require("./getConfig")();
const url = generator.getCodeRequestUrl(config.CLIENT_ID);
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Please go to this url to get the code then enter\n${url}\n`, (code) => {
  require("fs").writeFileSync(require("path").join(__dirname, "./secret/code.json"), JSON.stringify({code}));
  console.log(`Written to 'secret/code.json' Please do not share this with any`);
  process.exit();
});