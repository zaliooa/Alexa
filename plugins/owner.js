const Alexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const {skbuffer} = require('../buffer');
var clh = { cd: 'L2pzbC9BbGV4YQ', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Alexa.addCommand({pattern: 'owner', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
var img = await skbuffer(Config.LOGOSK)
// send a buttons message!

	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '💫 𝑰𝑵𝑭𝑶 𝑶𝑾𝑵𝑬𝑹️ \n\n```𝑩𝑶𝑻 𝑪𝑹𝑬𝑨𝑻𝑬𝑹 :- '+Config.OWNER+'```\n\n```𝑶𝑾𝑵𝑬𝑹 𝑵𝑼𝑴𝑩𝑬𝑹 wa.me/'+Config.PHONE+'```\n\n```𝑾𝑨 𝑮𝑹𝑶𝑼𝑷 -: '+Config.GROUP+'```\n\n```𝑶𝑾𝑵𝑬𝑹 𝑰𝑵𝑺𝑻𝑨  :- '+Config.INSTA+'```\n'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: '╭─➤ 𝜣͢𝑾𝜨𝜩𝑹 𝜤𝜨𝑭𝜭 »\n│❖ ᴀᴜᴛʜᴏʀ : '+Config.OWNER+'\n│❖ ᴋᴇʀɴᴇʟ : ʟɪɴᴜx\n│❖ ɪɴꜱᴛᴀɢʀᴀᴍ : '+Config.INSTA+'\n│❖ ɴᴜᴍʙᴇʀ : wa.me/'+Config.PHONE+'\n╰────────────────❋ཻུ۪۪➹\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘\n'+Config.OWNER+'™',
          footerText:  '©'+Config.BOT+' ™',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 990,status: 1,surface : 1,message: Config.SKV,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});

}));

