//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk80VVpIdHVBSlhRT0U4S1dmT0RVeU5MbmcwOXk2bjl3cVl0OG5OODdHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOU5aWmhrblRKM2tTSVVETkpSYWhpRFg3R1hBVWZGb29uZjJ2VE5VT3BUST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTDR6Z0dIcjN1T1o5clJvMEYzSmd3UnE3bXVDWTZwYk1iaUJ0ZCtoSTFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsV09rRml1NVVXZUtVT3M4V3FVdDBxNXdDd2ZZVmtYOVVlOE9IVDBmY2xNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEd255cWNBNVN5dlYrQnVEbVZCbTU3NkEyTnBsdXAzenZBYm1sNkRjVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVGS1N2bi9GVndoSCtrWXFuZ1dsRG9wWUtpRmNGWENVR2l5a2tkNTZJRlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01mOFc4c3EzY1VROWZuSTFhVE9GUXI3Qm1ZeVkrUkpCVEE3K0oweElFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFoWUlIN0RZQS8wRzJjK25hU2M4UC9HaTNIVGIzSmI4YVZLRUhDQ3YwWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1pamUwNlBTTy9WQldhMFgyaFBOSjBnWjhFUlMvTkJDckd5SmhNczNDdGpWcEU3S1JNT2NmR2ViTGQrUlJiMHU2dHZuTThKRStNOFcxNDVGZUo4UkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJzNWdKa01NVHB1YTJHc0RqR3daemdlZ0g1QWRXc3ZuUTRKd0RZMFdtK1RvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMjM4MTI3NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjBDQjVFNUQ3QTQyNEM5QjdENzcxNDZCMEI1MDA2QTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTM4OTExNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAyMzgxMjc3NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNzI0MjczMjBFNjdBMjVCOEEwQjhEMTg3RDkxMEMwMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1Mzg5MTE0fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3aU1WQUFSWlRPZTRmdWdLYmVkSUlBIiwicGhvbmVJZCI6Ijg2NTRiMDZiLTJjMDktNGE1OC05ZTZjLTA1Nzg3ZGU4MjBhYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNV3FsWHhVay9yUjRUbEVES2xWNy9kYmZWcU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlYU3ozT3M0aVhpQXhsbmpIc28rOG93c2xjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlYzQzFGVzlQIiwibWUiOnsiaWQiOiIyMzQ5MDIzODEyNzc0OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiyb7OtcmTyZPOteKEk+C5gM+DwrXguKM8MyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTN2OEZvUXFyTGR0Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQWxyRFZiaFdqd25QYXpEcm80U1FFS0VtNnMrdjMyRVVnTEtqeU9ROFpsMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMSt6WXRObFFKUWkzYjdnQ3IzanNzT3VTZ2pETEVQZVd1S3ZDZ0I4VGNIeWNJT0RWK3pEdmJRUm41Q0RYMTY4VEJKeFlGMDEvRFpGR3M4bGlnUWVvQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImhvVm9xZEhpeStkQWVmRzE4aVNyTE5ZUlQ5VU9RT1pRSTU0dktxRG1NdDZRREZtVEoxejVTdGxZeFlueFNMVlFvSjJhKzlSSy9DWDJhemI3MFgzN0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyMzgxMjc3NDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFKYXcxVzRWbzhKejJzdzY2T0VrQkNoSnVyUHI5OWhGSUN5bzhqa1BHWmQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUzODkxMTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFoxIn0="
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
