class Ping {
	constructor(main) {
		this.main = main;
		this.alias = ['ping', 'p', 'ㅔ'];
	}

	async run(message, args) {
		this.main.bot.createMessage(message.channel.id, `Pong! Took \`${message.channel.guild.shard.latency}\``)
	}
}

module.exports = Ping;
