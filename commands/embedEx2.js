const Discord = require('discord.js');
const { changeCommandStringLength } = require("../util.js")

class EmbedEx2 {
	constructor(client) {
		this.client = client;
		this.alias = ['EmbedEx2', 'embed2', 'em2'];
	}

	async run(message, args) {
		let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
		let commandList = [
			{name: 'ping', desc: '현재 핑 상태'},
			{name: 'embed', desc: 'embed 예제1'},
			{name: 'embed2', desc: 'embed 예제2 (help)'},
			{name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
		];
		let commandStr = '';
		let embed = new Discord.RichEmbed()
			.setAuthor('Help of 콜라곰 BOT', helpImg)
			.setColor('#186de6')
			.setFooter(`콜라곰 BOT ❤️`)
			.setTimestamp()
		
		commandList.forEach(x => {
		  	commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
		});
	
		embed.addField('Commands: ', commandStr);
	
		message.channel.send(embed)
	}
}

module.exports = EmbedEx2;