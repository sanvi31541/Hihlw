module.exports.config = {
	name: "copex2",
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

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["•┄┅════𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮════┅┄•\n\n😒দয়া করে কেউ ভিডিও🌶️\n 👀দেখে হাত মারবেন না হাত মারলে 🙂\n🍆নুনুর সমস্যা হয় হাতের না ধন্যবাদ🤭\n\n•┄┅════𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=10fpWzpAw6kNlmt7v_AGcRONwE3UwE0Qi",
"https://drive.google.com/uc?id=10r9JSdTGf1JKrdQG7vxXlH0GqM-hgWHi",
"https://drive.google.com/uc?id=10hEt13pTM_0Og-DjlTE65FkzvJJk-cEp",
"https://drive.google.com/uc?id=111exlB5om3SqlAqaaI-hGJ0iY6_enxlW",
"https://drive.google.com/uc?id=10xNg0Cyo3jOY1XZOUOBvc6EUwZexY98k",
"https://drive.google.com/uc?id=10eFm6s4v93laHKfGCAF2Gi83onHaNkfH",
"https://drive.google.com/uc?id=10zESTM0ZPzaLjkBKqx1xTAYkjBujM11Z",
"https://drive.google.com/uc?id=10yrc2V8wsarQoeetdbHhVpIh1UBZsRMf",
"https://drive.google.com/uc?id=116RRysbUPupsaqcKaLDF8s4w_3dnyoLP",
"https://drive.google.com/uc?id=10lsWH5OU92Ic58T5mhWcYlXaXriYqTgl",

];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
 
