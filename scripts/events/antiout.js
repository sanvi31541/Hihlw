module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "BADOL-KHAN",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "⚠️প্রশাসকের দ্বারা লাথি মারা হচ্ছে⚠️";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`⚠️ নোলা মার্ক আইডি এড দেইনা গ্রুপে❌ ${name} \n\n${name} ⚠️আমাকে ব্লক করেছে অথবা প্রোফাইলে কোন মেসেজ অপশন নেই❌ `, event.threadID)
   } else api.sendMessage(`${name} ⚠️বোকা তুমি এখান থেকে রেহাই পাবে না❌`, event.threadID);
  })
 }
}
