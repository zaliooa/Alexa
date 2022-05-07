const Alexa = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')

// Inbox Block System
// This Plugins By Alexa
const INBO1 = "_~~~••• '+Config.BOT+' •••~~~_* \n\n\n *i am blocking you.* \n\n *REASON:EDA MWONE DONT USE BAD WORDS ENNE POLE NALLA KUTTI AAV* 😌 *NINNE NJAN BLOCK AAKUKAYAAN THERI ITTATH KOND* 🖐🏻🖐🏻"
 if (Config.INBO1 == 'true') {
Alexa.addCommand({on: 'text', fromMe: false, delownsewcmd: false, onlyPm: true }, (async (message, match) => {
        let regexb1alexa = new RegExp('thayoli')
        let regexb2alexa = new RegExp('myre')
        let regexb3alexa = new RegExp('kunna')
        let regexb4alexa = new RegExp('poorimone')
        let regexb5alexa = new RegExp('myr')
        let regexb6alexa = new RegExp('patti')
        let regexb7alexa = new RegExp('oombi')
        let regexb8alexa = new RegExp('thendi')
// export data -(Alexa-muhammed)
          if (regexb1alexa.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2alexa.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3alexa.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4alexa.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5alexa.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6alexa.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb6alexa.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb7alexa.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb8alexa.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          
}));


}
