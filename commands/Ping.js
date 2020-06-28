class Ping {
	constructor(client) {
		this.client = client;
		this.alias = ['ping', 'p', 'ㅔ'];
	}

	async run(message, args) {
        const msg = await message.channel.send(`🏓 Ping!`);
        msg.edit(`🏓 Pong! (💙: ${msg.createdTimestamp - message.createdTimestamp}ms.)`);
	}
}

module.exports = Ping;