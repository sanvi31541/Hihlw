module.exports.config = {
  name: "random",
  version: "0.0.2",
  permission: 0,
  prefix: true,
  credits: "BADOL-KHAN",
  description: "sad video",
  category: "admin",
  usages: "",
    cooldowns: 5,
};





module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const { NAYAN } = global.apiNayan;
    const res = await axios.get(`http://game2.jagoanvps.cloud:5059/video/mixvideo`);
    var data = res.data.url;
    var msg = [];
    let video = `${res.data.url.url}`;
  let name = `${res.data.url.name}`;
    let cp = `${res.data.cp}`
  let ln = `${res.data.length}`

    let videos = (await axios.get(`${video}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/video.mp4", Buffer.from(videos, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/video.mp4"));

    {
        msg += `${cp}\n\n⚠️𝐓𝐨𝐭𝐚𝐥 𝐕𝐢𝐝𝐞𝐨𝐬☑️: [${ln}]🤙\n\n(𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫)\n\n(𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮___//😈🤬👿)`
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
}
