const { checkPermission, dChange, sleep } = require("../util.js")

class DmNotice {
	constructor(client) {
		this.client = client;
		this.alias = ['DmNotice', 'DN', 'dn', '우'];
	}

	async run(message, args) {
		if(checkPermission(message)) return
		if(message.member != null) {
			let dmList = dChange(message.member.guild.members.array(), 200)
			for(let dm of dmList) {
				for(let d of dm) {
					if(d.user.bot) return;
					d.user.send(`<@${message.author.id}>님이 공지를 보냈습니다. ${args}`);
				}
				await sleep(200)
			}
		
			return message.reply('공지를 전송했습니다.');
		} else {
		  	return message.reply('채널에서 실행해주세요.');
		}
	}
}

module.exports = DmNotice;