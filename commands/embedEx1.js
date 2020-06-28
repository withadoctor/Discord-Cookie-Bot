const Discord = require('discord.js');

class EmbedEx1 {
	constructor(client) {
		this.client = client;
		this.alias = ['EmbedEx1', 'embed', 'em'];
	}

	async run(message, args) {
		let img = 'https://cdn.discordapp.com/icons/419671192857739264/6dccc22df4cb0051b50548627f36c09b.webp?size=256';
		let embed = new Discord.RichEmbed()
			.setTitle('타이틀')
			.setURL('http://www.naver.com')
			.setAuthor('나긋해', img, 'http://www.naver.com')
			.setThumbnail(img)
			.addBlankField()
			.addField('Inline field title', 'Some value here')
			.addField('Inline field title', 'Some value here', true)
			.addField('Inline field title', 'Some value here', true)
			.addField('Inline field title', 'Some value here', true)
			.addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
			.addBlankField()
			.setTimestamp()
			.setFooter('나긋해가 만듬', img)
	
		message.channel.send(embed)
	}
}

module.exports = EmbedEx1;