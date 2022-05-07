const Alexa = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Alexa.addCommand({pattern: 'git', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LOGOSK
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.BOT + `

*Oᴡɴᴇʀ Nᴜᴍʙᴇʀ* :https://wa.me/` + config.PHONE + `*            


*Wʜᴀᴛsᴀᴘᴘ Gʀᴏᴜᴘ* :` + config.GROUP + `*


*Iɴsᴛᴀ Lɪɴᴋ* :` + config.INSTA + `*


*Gɪᴛ Lɪɴᴋs* : https://github.com/Afx-Abu/Abu_ser*


*ᴛʜɪs ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ` + config.OWNER + `*

`}) 

}));
