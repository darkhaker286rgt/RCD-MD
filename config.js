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
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:eRVHREMpcCuPjDxgVqMHSwYCvtKdnuPb@viaduct.proxy.rlwy.net:59234";
global.allowJids = process.env.ALLOW_JID || "94770025374@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:LozJtPYkuOQnoIyEOBnVzAllhvwxmyAV@viaduct.proxy.rlwy.net:59443/railway";
// postgresql://nico:PcTVuK0HAsidxKpBVzgaEK25AowJsh88@dpg-cqignbqj1k6c739ehkq0-a.oregon-postgres.render.com/nicorcdmd
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/XAlanWalkerX/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94715898396";
global.sudo = process.env.SUDO || "94715898396";
global.owner = process.env.OWNER_NUMBER || "94715898396";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxqekxNbGpGdG1qZUppY3Z3OTFHMEEvallET0ZuOVkrVGtjck44L3ZrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHVhZTBUbWRuV1VLYzdjcTBkK3lqY2hJdEV6bG1EVWtGbXNkODVTcWFXQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRlFxaittWmVhZUpWV0NISWtaU0VHTzNYeEFwMlpIaE9LUjl6RCtUSjN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2a01jOHluNWxPSUZOS0s0S2Y0a0hmV2pHUThJc2RqdlVhQXBtTzRjekUwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHWXNLZnhZazlNY1pIc2E5Z241a0pDd1hhcm5yWjJpSzRBM01PWTdBMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg5U2ZlU0RrZDV3QjFBZjBGV3BiamF2Uzc3SjNTRmJLU2NkVGtnbFpYM1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFVWjc3RFFLeHRuL1lSWmxsTWhuTEw4clgvZnJJa0tSQ2pSMzF0YjZuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHVvaXlxaFVZL0w2Mm1uSThveldKTjR5ME93KzR1MDdxNGsxdzVuMUlCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJkMGpZRlRxTGFGSkNJRVdsdEVBU3ZhNzFvVG04eXJJeGVLRVhVY2EzTUY1WFB5T1pzMXpmdEJKaUxDSmtReWNpS2xDT0R4S3pwLzlmV2JNbXpqaEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiIwZCtpTzVaWnlrejhYUzZCNVhYYjA5OGQ0b1BGTXEwd2p5SmNRK251NTJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVaU9QbEZoZVJaYU1zRmw1a0lXRmdBIiwicGhvbmVJZCI6ImE2YmM5MDRkLTEzNzItNDA5YS1iZDQ2LTIzMzQ4MWUzMjg1OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhZytWUVFiVms0eStoU3l2QVNTditmNkw4S2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3EwZkpJR29ndHB6WXE2NEJEMGJyZ1JVbFZzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNaTkNMQkhDIiwibWUiOnsiaWQiOiI5NDcxNTg5ODM5NjoyNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZea8J2Xm/Cdl6LwnZem8J2XpyDwnZee8J2XnPCdl6HwnZeaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdVorcDBFRUtDWHByVUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmWWI3VTd1VHhLd0lNZlBCK2lDc0VCOVJXQTFkd3BwM2pLcHRHNTBDbGxBPSIsImFjY291bnRTaWduYXR1cmUiOiJVQWNVbWswVTJTcDZjK1dUb0dxZmE5ajNlVENMNjBqL2E0eHJNR3pJVU0vQ2ZDODZrR2F0SjhZYTkvSytRQi9pRkdUd25NeFpOOWtsc3BpeUt0c0xDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicDBFSzRCQjlCZ2pBc085cHE0RHdOZ0ZZOXRkbksyYUVDczVjYmlzY1Y4K3JDZWFGb0ppZWdybGRNbWR1eTRNdEU5R1RrWjBkaHVPbTdpb3RNVGttQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNTg5ODM5NjoyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYMkcrMU83azhTc0NESHp3Zm9nckJBZlVWZ05YY0thZDR5cWJSdWRBcFpRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzg3MzczLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZ4ayJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.1 Beta (By NICO)",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "NICO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94715898396",
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
