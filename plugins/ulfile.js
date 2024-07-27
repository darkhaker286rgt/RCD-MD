let {
   runtime,
   formatp,
   prefix,
   smd,
   smdBuffer,
 } = require("../lib");
const axios = require("axios");
const Config = require("../config");

smd(
  {
    pattern: "upload",
    desc: "Download and send back a file from a received WhatsApp message link",
    react: "📁",
    category: "user",
    filename: __filename,
  },
  async (message) => {
    try {
      // Get the message content
      const msgText = message.message?.extendedTextMessage?.text || message.message?.conversation;

      // Extract URL from the message text
      const urlPattern = /(https?:\/\/[^\s]+)/g;
      const urls = msgText.match(urlPattern);

      if (!urls || urls.length === 0) {
        await message.send("No valid URL found in the message.");
        return;
      }

      const fileUrl = urls[0];

      // Download the file using axios
      const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data, 'binary');
      
      // Get file name from the URL
      const urlParts = fileUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];

      // Send the file back to WhatsApp
      await message.send(buffer, { filename: fileName, mimetype: response.headers['content-type'] });

    } catch (error) {
      console.error(error);
      await message.send("An error occurred while processing the request.");
    }
  }
);
