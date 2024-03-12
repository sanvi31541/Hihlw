const fs = require("fs");
module.exports.config = {
	    name: "🥴",
    version: "1.1.0",
    permission: 0,
    credits: "BADOL-KHAN",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "🥴",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙂")==0 || event.body.indexOf("🙃")==0 || event.body.indexOf("🥴")==0 || event.body.indexOf("😒")==0) {
		var msg = {
				body: "ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫-𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿",
				attachment: fs.createReadStream(__dirname + `/BADOL-KHAN/sentikawkno.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤦‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

          }
