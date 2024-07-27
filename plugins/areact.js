const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
const mojis = ['👣']

let bots = false;
const {
  smd,
  bot_,
  react
} = require('../lib');
let utd = false;

smd({
  pattern: "react",
  alias: ["autoreaction", "autoreact"],
  desc: "enable/disable auto reaction",
  category: "chats",
  filename: __filename
}, async (message, text) => {
  try {
    const checkinfo = await bot_.findOne({ id: 'bot_' + message.user }) || await bot_.new({ id: 'bot_' + message.user });
    const textt = text ? text.toLowerCase().trim() : '';
    const action = textt.startsWith('on') || textt.includes('act') || textt.includes('enable') || textt.includes('true') ? 'true'
      : textt.includes('cmd') || textt.includes('all') ? textt
      : textt.includes('off') || textt.includes('disable') || textt.startsWith('reset') || textt.includes('false') ? 'false'
      : '';

    utd = true;

    if (!action) {
      return await message.reply('*_Auto_Reaction currently ' + (checkinfo.autoreaction === 'false' ? 'Disabled' : 'Enabled') + '!_*\n' + (checkinfo.autoreaction === 'false' ? '' : '*Status:* ' + checkinfo.autoreaction + '_\n') + '*_Use on/cmd/all/off to Auto_Reaction_*');
    } else {
      if (action === 'false') {
        if (checkinfo.autoreaction === 'false') {
          return await message.reply('*_Auto_Reaction Already Disabled_*');
        }
        await bot_.updateOne({ id: 'bot_' + message.user }, { autoreaction: 'false' });
        return await message.reply('*_Auto_Reaction Successfully Disabled!_*');
      } else if (action === 'cmd' || action === 'all' || action === 'true') {
        if (checkinfo.autoreaction === action) {
          return await message.reply('*_Auto_Reaction already enabled!_*');
        }
        await bot_.updateOne({ id: 'bot_' + message.user }, { autoreaction: action });
        return await message.send('*_Auto_Reaction successfully enabled!_*');
      } else {
        return await message.reply('*_Please provide valid instructions!_*\n*_Use true/all/cmd/off to set autoreaction!_*');
      }
    }
  } catch (e) {
    await message.error(`${e}\n\ncommand: react`, e);
  }
});

smd({ on: "main" }, async (msg, text, { icmd }) => {
  try {
    if (!msg || msg.reaction) return;
    if (!bots || utd) {
      bots = await bot_.findOne({ id: `bot_${msg.user}` });
      utd = false;
    }
    if (!bots || !bots.autoreaction || bots.autoreaction === "false") return;
    else if (bots.autoreaction === 'true' || (icmd && bots.autoreaction === 'cmd')) {
      let emokis = emojis[Math.floor(Math.random() * (emojis.length))];
      await react(msg, emokis);
    } else if (bots.autoreaction === 'all') {
      let mokis = mojis[Math.floor(Math.random() * (mojis.length))];
      await react(msg, mokis);
    }
  } catch (e) {
    console.log("error in auto reaction: ", e);
  }
});
