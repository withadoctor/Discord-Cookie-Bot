exports.handle = function(message) {
	if(message.author.bot || !message.content.startsWith(this.config.prefix)) return;

	const args = message.content.split(/\s+/g);
	const command = args.shift().slice(this.config.prefix.length);
	const cmd = this.commands.get(command);

	if (cmd) cmd.run(message, args);
}