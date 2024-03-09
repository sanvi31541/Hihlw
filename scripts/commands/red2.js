/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "red2", 
  version: "1.0.0", 
  permission: 2,
  credits: "BADOL-KHAN",
  description: "Random sad video",
  prefix: true,
  category: "Media", 
  usages: "video", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🤙 ভিডিও দেখে কেউ হাত মারলে আমি দায়ি নয়😑"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=1fm7FndVaN4Xj3YdtJoZcT5Bbov_aqT1E",

    "https://drive.google.com/uc?id=1f33Lc7bwXxwz3ol0ndqMbQ96xab70G7L",
    "https://drive.google.com/uc?id=1fsQRBliBOloH_DkGAetJiVH4bfRYWbuR",
    "https://drive.google.com/uc?id=1fQn9GmU-PlToslACaHJSDWzUJVFZ6fBy",
    "https://drive.google.com/uc?id=1fck0SulaPt4EQU-hr0eKWMkCEW14kWH0",
    "https://drive.google.com/uc?id=1fnkmwF_H0vamQMwIQU9ZHDdaMtvAmg_D",
    "https://drive.google.com/uc?id=1fm4eNlkcug-urU8vSjpxb0WZzC6WJH46",
    "https://drive.google.com/uc?id=1fGzuPxwqHteoPtD9TfIla02GX0PqVLr1",
    "https://drive.google.com/uc?id=1fFYfemXPS4ni9Q6C6cYukWDZy-PUKZCq",
    "https://drive.google.com/uc?id=1fWxwp1IOg8xGkqkFygOPKQBX99Nivx7d",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
