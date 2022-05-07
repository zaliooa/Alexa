const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const Alexa = require('../events');
const Config = require('../config');
const { igDownloader, igstalk } = require('../alexa.js')
const { errorMessage, infoMessage } = require('../helpers');
const axios = require('axios');
const fs = require('fs');
const gis = require('g-i-s');
const got = require("got");
const {skbuffer} = require('../buffer');

let wk = Config.WORKTYPE == 'public' ? false : true


Alexa.addCommand({pattern: 'insta ?(.*)', fromMe: wk, desc: "download from Instagram"}, async (message, match) => {
var img = await skbuffer(Config.LOGOSK)
  try{
    if (!match[1]) return await message.sendMessage("enter a link");
    await message.sendMessage("*ᴄʜᴇᴄᴋɪɴɢ...")

    res = await igDownloader(match[1])
    ytm = res.result
    const profileBuffer = await axios.get(`${ytm.link}`, {responseType: 'arraybuffer'})
    const msg = `${ytm.link}`
     if (msg.includes('.mp4')) { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, quoted: message.data, ptt: true,quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 990,status: 1,surface : 1,message: Config.SKV,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});
     if (msg.includes('.jpg')) { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: ``, quoted: message.data })}
  } catch {
     await message.sendMessage("error")
  }
});
