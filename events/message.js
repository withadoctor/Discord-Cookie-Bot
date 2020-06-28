module.exports = async (bot, message) => { 
    if(message.author.bot || !message.content.startsWith(bot.prefix)) return;

    let args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let cmd = bot.commands.get(command)
    if(cmd) cmd.run(message, args)
}