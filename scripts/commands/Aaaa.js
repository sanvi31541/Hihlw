const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");
module.exports.config = {
  name: "a",
  version: "1.0.2",
  permission: 0,
  credits: "BADOL-KHAN",
  description: "beginner's guide",
  prefix: true,
  category: "guide",
  usages: "[Shows Commands]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
   const axios = require("axios")
var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
const moment = require("moment-timezone");
var ngay = moment.tz('Asia/Dhaka').format('D/MM/YYYY');
var gio = moment.tz('Asia/Dhaka').format('HH:mm:ss');
var thu = moment.tz('Asia/Dhaka').format('dddd');
  var thang = moment.tz("Asia/Dhaka").format('MM');
  var nam = moment.tz("Asia/Dhaka").format('YYYY');
if (thu == 'Sunday') thu = 'রবিবার'
if (thu == 'Monday') thu = 'সোমবার'
if (thu == 'Tuesday') thu = 'মঙ্গলবার'
if (thu == 'Wednesday') thu = 'বুধবার'
if (thu == "Thursday") thu = 'বৃহস্পতিবার'
if (thu == 'Friday') thu = 'শুক্রবার'
if (thu == 'Saturday') thu = 'শনিবার'
  const res = await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`);
  const finduid = res.data.data.uid
  const finddate = res.data.data.date
let name = await Users.getNameUser(event.senderID);
   let
  s = process.uptime(),u = [s/3600<<0, s/60%60<<0, s%60<<0].map(el => el < 10?'0'+el: el);
return api.sendMessage({body:`🌀𝐇𝐞𝐥𝐥𝐨: ${name}\n
🌀𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: ${name}\n
🌀𝐇𝐨𝐮𝐫: ${gio}\n
🌀𝐃𝐚𝐲: ${ngay} ${thu}\n
🌀𝐘𝐞𝐚𝐫: ${nam}\n
🌀𝐑𝐮𝐧𝐢𝐧𝐠: ${u.join(':')}\n━━━━━━━━━━━━━━━━━━ 🌿 𝐂𝐑𝐄𝐀𝐃𝐈𝐓: BADOL-CHOWDHURY 🌿\n`, attachment: await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID,event.messageID);
}
