const Alexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const {skbuffer} = require('../buffer');
var clh = { cd: 'L2pzbC9BbGV4YQ', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


let whb = Config.WORKTYPE == 'public' ? false : true

Alexa.addCommand({pattern: 'welcome', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
var img = await skbuffer(Config.LOGOSK)
// send a buttons message!credit Abu

    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: '𝐎𝐍' }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '𝐎𝐅𝐅' }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '\n 💠ᴡᴇʟᴄᴏᴍᴇ ᴍᴇssᴀɢᴇ sᴛᴀᴛᴜs : ᴏɴ/ᴏғғ\n',
          footerText: '© '+Config.BOT+' ™',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 990,status: 1,surface : 1,message: Config.SKV,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});

}));
