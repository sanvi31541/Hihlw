module.exports.config = {
	name: "copex",
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
   var hi = ["•┄┅════𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮════┅┄•\n\nn😒দয়া করে কেউ ভিডিও🌶️\n 👀দেখে হাত মারবেন না হাত মারলে 🙂\n🍆নুনুর সমস্যা হয় হাতের না ধন্যবাদ🤭\n\n•┄┅════𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1zNjTv0vEW8wQ8W9VWqA7kOlQby6HuGwW",
"https://drive.google.com/uc?id=1zbh0feeFRrYu7o0HIP-Cqaj0uGktyl5C",
"https://drive.google.com/uc?id=1zhwIPt-MkC39egPxq35CmYrSR7MwteDC",
"https://drive.google.com/uc?id=1znDXaoXG-L2aA-ex4ubuI_hT-MKGhFhV",
"https://drive.google.com/uc?id=1zXMpg1kra62dcfjw7KSR9OY_plECySwI",
"https://drive.google.com/uc?id=1znQfHdxzmTl1y-bHZGgjf30loyuZ2P26",
"https://drive.google.com/uc?id=1zVxKJPB8HbB3JIdTqPhl_oeFVN9Z8R6k",
"https://drive.google.com/uc?id=1zPikuNIik8TzXvNPJFZ9xC1v_37auDcl",
"https://drive.google.com/uc?id=1zNJMEqBOFceTbukwJCiukZgm_gFLAyQV",
"https://drive.google.com/uc?id=1zhwIPt-MkC39egPxq35CmYrSR7MwteDC",

];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
 
