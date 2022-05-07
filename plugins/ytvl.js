const Alexa = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const LOAD_ING = "*TRYING TO DOWNLOAD*"
const UPLOAD_ING = "*✅️ DOWNLOADING COMPLETED* \n\n *UPLOADING IN PROCESS...*"
const axios = require('axios')
const Axios = require('axios')



const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

Alexa.addCommand({pattern: 'ytv ?(.*)', fromMe: wk, desc: 'video downloading links from youtube'}, async (message, match) => {
	
const ig = await Axios.get('https://camo.githubusercontent.com/f77384593e764267fd3bbbd2e2d620d09fb7b611f9957bcad29f4a36f12c4d13/68747470733a2f2f692e696d6775722e636f6d2f345a54507874472e6a706567?s=120&v=4', {responseType: 'arraybuffer'})
const options = {}
options.linkPreview = {
               head: "ᴀʙᴜ sᴇʀ",
               body: "© ᴀʟᴇxᴀ ©",
               mediaType: 2, //3 for video
               thumbnail: Buffer.from(ig.data) ,
               sourceUrl: "https://github.com/Afx-Abu/Alexa",
                }

	
var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, options);

        const {data} = await axios(`https://api.zeks.me/api/ytplaymp4?apikey=ApiKannappi&q=${match[1]}`)
	
        const { status, result } = data


	const videoBuffer = await axios.get(`${result.url_video}`, {responseType: 'arraybuffer'})

        if(!status) return await message.sendMessage('*NO RESULT FOUND🥲*')

	reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, options);

        let msg = '```'
        msg +=  `TITLE :${result.title}\n\n`
        msg +=  `THUMBNAIL :${result.thumbnail}\n\n`
        msg +=  `SOURCE :${result.source}\n\n`
        msg +=  `SIZE :${result.size}\n\n`
        msg +=  `DOWNLOADING LINK :${result.url_video}\n\n`
        msg += '```' 
	 return await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false , caption: 'Alexa' })
});
