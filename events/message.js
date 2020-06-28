const prefix = '.';

module.exports = async (bot, message) => { 
    if(message.author.bot) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command)
    if(cmd) cmd.run(message, args)
}