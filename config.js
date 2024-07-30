//#ENJOY

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "imesh.s.abeysinghe@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:QyCauhcWaInKMhTNZDRRbkAbCulUpSan@monorail.proxy.rlwy.net:11303";
global.allowJids = process.env.ALLOW_JID || "94770025374@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:AFKJlctmjUUKhQbiQFweKJeDcCZYIQvc@roundhouse.proxy.rlwy.net:37300/railway";
// postgresql://nico:PcTVuK0HAsidxKpBVzgaEK25AowJsh88@dpg-cqignbqj1k6c739ehkq0-a.oregon-postgres.render.com/nicorcdmd
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/XAlanWalkerX/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94770025374";
global.sudo = process.env.SUDO || "94770025374,94743481092";
global.owner = process.env.OWNER_NUMBER || "94729795605";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJRS0hadmdNbGRuaE5kVEUrZDgwTnU3c2lYeEREekJFZEozSmt4Q0Rsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1Bta0s0YXZMVWFtZGxGdWdkeWhIQ2o3K05mTXdCdWltdnZHS0FQMWlqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT2Mvc1ZkUm5ScVBweVNjQmIzZGxVUzl4WVl2WnU1cHNlRUEyS2twMm1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwN2l6Mkx6NW53a0ZrWDU4L2dEK2IxODBEZkNCL3VOeFhEZTVpZnFvRGlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitMbzNRK2RwMTRJWmVLNlVuelRmdGpWN3BYeDRGZUhCbG9zM3NodEUzbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhBZitGRVJhUkhKYVBVdFZNWWJKQTg2VmhxdkhMcitYV1dqNU9abUhtaVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9iRmFiUld5ZFZEczBkQ2xocG9PZjRJSE8wS3NLTUJDUXRERjl0SmEzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTNSbVpnNFJ4bVJKMUNieGUvQWF1ZUd6dDJZMEVaV1FoS3RLVkMxSFNIOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZCb2ZTYzdrQTM2MUwxWWtrR0xkWEhBV0JJZ0tndjlZdTBwNjAwSTZTLzdJVjJlajBrSHdFdnc1Y3M3Skx5NURHaHZjTDJoRjFHYW1GQ1VzRENNcmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoibFlZZ3J2dEJRN3M5cjl0Y1ozQkh6QmZVOFZWNjM1T1U3cVFMZHRpZkZVST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTXBaQU1FLVFUWlNFS19fNlFzZmUwdyIsInBob25lSWQiOiJiM2JjYjM0Ny1kNDJmLTRjMTYtOTQ4NS0wMmMzZWNlNzc4Y2QiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2VrQUNEbndRNWZZNVRaYWpzbSsvNEZhdUZBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InREM1pCRUxFOW82UURpUDlmNm5tSjJTd3pZUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5SFhXQ0tTQiIsIm1lIjp7ImlkIjoiOTQ3Mjk3OTU2MDU6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bSNyoDclOG2nMq44bWH4bWJyrMgICDhgqbKhc6xxojGmSAg44Cy77yt77yh77yk77y1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQR3krOWtCRUpqR3BMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0NzFHdy9PSUYyK0Y0TUFLZlV5SXh3TFk2MUljOXYra0twaFcvaFpUclQ4PSIsImFjY291bnRTaWduYXR1cmUiOiJrRTFSS21aRHVHekhyWEVVS2tHaDN5MjFjRmJ6cXM2T2N6Wk81VWVEckdPWmVreU9XaENwUlg5MjZ5SmFkaExJYkpHZk82UEJKT3FReXA1aHNWYlZDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ0MydHVaM1BHVjNURnpkUEwrdTlic0kxUXh4cnZxMFN5cVJwSTJNcHhkMDBxVzNtczh5dlgvNzRHN1IyYldvVlc4T0ZDQTVkMFdXZE1hd1VyM0QzaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyOTc5NTYwNToxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlTzlSc1B6aUJkdmhlREFDbjFNaU1jQzJPdFNIUGIvcENxWVZ2NFdVNjAvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzYwNjEzfQ==
  "
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "MADHURANGA",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94770025374",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
