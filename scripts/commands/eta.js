module.exports.config = {
	name: "eta",
    version: "1.0.1",
    permission: 0,
    credits: "BADOL-KHAN",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": ""
    }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/ZfUlJ6l.jpeg","https://i.imgur.com/6GqA1Ck.jpeg",
            "https://i.imgur.com/6GqA1Ck.jpeg",];
var callback = () => api.sendMessage({body:`➢🄱🄾🅃-🄾🅆🄽🄴🅁-🄸🄽🄵🄾⌛

🌺 𝐁𝐨𝐭-𝐍𝐚𝐦𝐞 : ${global.config.BOTNAME}

💮 𝐁𝐨𝐭-𝐏𝐫𝐞𝐟𝐢𝐱 :🌻🥀 ${global.config.PREFIX}🥀🌻

🌼 𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫 :🏵️🌹𝐈𝐓𝐙.𝐁𝐀𝐃𝐀𝐋-𝐕𝐀𝐈🌹🏵️,

🦋𝐅𝐛-𝐋𝐢𝐧𝐤🦋 : \n https://www.facebook.com/BADOL.CHOWDHURY.TERA.REAL.ABBU 🦋𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐚𝐫𝐞-𝐋𝐢𝐧𝐤🦋 : \n m.me/100007070042228 🦋𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩-𝐋𝐢𝐧𝐤 : \n wa.me/+8801782721761


💐 𝐁𝐨𝐭-𝐀𝐝𝐦𝐢𝐧 :🌿 [ 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮___//😈🤬👿 ]

🍂 𝐌𝐨𝐝𝐢𝐟𝐢𝐞𝐝 𝐁𝐲 :🌱 ( 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮___//😘😕😈 )

🦠 𝐓𝐢𝐦𝐞 :🦠 [ ${juswa} ]`,attachment: fs.createReadStream(__dirname + "/cache/juswa.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.png")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.png")).on("close",() => callback());
   };
