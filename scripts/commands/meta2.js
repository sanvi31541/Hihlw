const axios = require("axios");

module.exports.config = {
  name: "bby",
  version: "2.0.0",
  permission: 0,
  credits: "BADOL-KHAN",
  description: "simi simi",
  prefix: false,
  category: "chat bots",
  usages: "chat",
  cooldowns: 5,
};
module.exports.run = async ({
  api: _0x3bec5f,
  event: _0x43a287,
  args: _0x47ac54
}) => {
  const _0x17c6ba = require("axios");
  if (_0x47ac54.join() == '') {
    return _0x3bec5f.sendMessage(" Hey ,আমি তোমাগো bby 😎 \n\n আমাকে ব্যাবহার করতে [Bby]লিখে কিছু জিগ্গেস করুন 🤗 \n\n🦋 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮___//👿🤬😈  🌿 ", _0x43a287.threadID, _0x43a287.messageID);
  } else {
    let _0x3efe3e = encodeURI(_0x47ac54.join(" "));
    const _0x11de5e = await _0x17c6ba.post("https://api.simsimi.vn/v1/simtalk", new URLSearchParams({
      'text': '' + _0x3efe3e,
      'lc': 'bn'
    }));
    var _0xc34af = _0x11de5e.data.message;
    return _0x3bec5f.sendMessage('' + _0xc34af, _0x43a287.threadID, _0x43a287.messageID);
  }
};
