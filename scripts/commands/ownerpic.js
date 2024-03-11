module.exports.config = {
	name: "ownerpic",
    version: "1.0.1",
    permission: 2,
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

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🖤🦋\n\n\n𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫-\n\n♥︎𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝-𝐁𝐚𝐝𝐚𝐥-𝐂𝐡𝐨𝐰𝐝𝐡𝐮𝐫𝐲♥︎\n\n\n🌸🫰"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "://https://i.imgur.com/m8yMPQ9.jpeg",
"https://i.imgur.com/nMdEAqy.jpeg"
"https://i.imgur.com/Mcm3TSU.jpeg"
"https://i.imgur.com/6QJxHaU.jpeg"
"https://i.imgur.com/owVGpAw.jpeg"
"https://i.imgur.com/g2uWWPZ.jpeg"
"https://i.imgur.com/8nE9MzD.jpeg"
"https://i.imgur.com/y4yhbGI.jpeg"
"https://i.imgur.com/T5IpPZO.jpeg"
"https://i.imgur.com/8KlLhrw.jpeg"
"https://i.imgur.com/fUor4vG.jpeg"
"https://i.imgur.com/ZwiKbuP.jpeg"
"https://i.imgur.com/iC3l2Z1.jpeg"
"https://i.imgur.com/WZKjHlk.jpeg"
"https://i.imgur.com/5FzUW0K.jpeg"
"https://i.imgur.com/HMHpHuz.jpeg"
"https://i.imgur.com/Tb91HpI.jpeg"
"https://i.imgur.com/4euTJdq.jpeg"
"https://i.imgur.com/6v2x4Gf.jpeg"
"https://i.imgur.com/c8QI6uF.jpeg"
"https://i.imgur.com/VyeoG9K.jpeg"
"https://i.imgur.com/uUWCeHl.jpeg"
"https://i.imgur.com/uX0OSQ7.jpeg"
"https://i.imgur.com/hDBvzNc.jpeg"
"https://i.imgur.com/WVOv3tG.jpeg"
"https://i.imgur.com/cqVN8NE.jpeg"
"https://i.imgur.com/wNibQEp.jpeg"
"https://i.imgur.com/J7FTyNT.jpeg"
"https://i.imgur.com/6eh7FuL.jpeg"
"https://i.imgur.com/qX5bq8K.jpeg"
"https://i.imgur.com/Qf6lDBb.jpeg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }; 
