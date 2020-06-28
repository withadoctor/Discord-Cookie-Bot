const { Client, Collection } = require("discord.js");
const token = process.argv[2];
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));
["welcomeChannelName", "byeChannelName", "welcomeChannelComment", "byeChannelComment"].forEach(x => bot[x] = require("./config.json")[x] );

bot.login(token);