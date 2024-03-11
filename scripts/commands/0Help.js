module.exports.config = {
	name: "help4",
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

module.exports.handleReply = async function ({ api, event, handleReply }) {
  let num = parseInt(event.body.split(" ")[0].trim());
  (handleReply.bonus) ? num -= handleReply.bonus : num;
  let msg = "";
  let data = handleReply.content;
  let check = false;
  if (isNaN(num)) msg = "❌ একটি নম্বর লিখুন ";
  else if (num > data.length || num <= 0) msg = "❌ আপনার নির্বাচিত নম্বরটি তালিকায় নেই, অনুগ্রহ করে আবার চেষ্টা করুন";
  else {
    const { commands } = global.client;
    let dataAfter = data[num-=1];
    if (handleReply.type == "cmd_info") {
      let command_config = commands.get(dataAfter).config;
      msg += `📜『  ${command_config.commandCategory.toUpperCase()}   』📜\n`;
      msg += `\n📌 কমান্ডের নাম: ${dataAfter}`;
      msg += `\n📝 বর্ণনা: ${command_config.description}`;
      msg += `\n📖 ব্যবহার: ${(command_config.usages) ? command_config.usages : ""}`;
      msg += `\n⏰ কুলডাউন: ${command_config.cooldowns || 5}s`;
      msg += `\n🔑 অনুমতি আছে: ${(command_config.hasPermssion == 0) ? "User" : (command_config.hasPermssion == 1) ? "Group administrator" : "Bot admin"}`;
      msg += `\n\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
      msg += `\n\n» মডিউল কোড ${command_config.credits} «`;
    } else {
      check = true;
      let count = 0;
      msg += `📋 » ${dataAfter.group.toUpperCase()} « 📋\n`;

      dataAfter.cmds.forEach(item => {
        msg += `\n🔖 ${count+=1}. » ${item}: ${commands.get(item).config.description}`;
      })
      msg += "\n\n╭──────╮\n    উত্তর দিন \n╰──────╯ কমান্ডের বিশদ বিবরণ এবং কীভাবে কমান্ড ব্যবহার করবেন তা দেখতে নম্বর দ্বারা বার্তা দিন";
    }
  }
  const axios = require('axios');
  const fs = require('fs-extra');
  const img = ["https://i.imgur.com/FMSUBgt.jpeg"]
  var path = __dirname + "/BADOL-KHAN/BADOL-KHAN.png"
  var rdimg = img[Math.floor(Math.random() * img.length)]; 
  const imgP = []
  let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
  fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
  imgP.push(fs.createReadStream(path))
  var msgg = {body: msg, attachment: imgP}
  return api.sendMessage(msgg, event.threadID, (error, info) => {
    if (error) console.log(error);
    if (check) {
      global.client.handleReply.push({
        type: "cmd_info",
        name: this.config.name,
