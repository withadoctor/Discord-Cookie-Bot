const { readdirSync } = require("fs")

module.exports = (bot) => {
    const commands = readdirSync(`./commands/`).filter(d => d.endsWith('.js'));
    for (let file of commands) {
        const command = new (require(`../commands/${file}`))(bot);
        command.alias.forEach(alias => {
            bot.commands.set(alias, command);
        });
    }
};