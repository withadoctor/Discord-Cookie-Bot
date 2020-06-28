const { Client, Collection } = require("discord.js");
const token = process.argv[2];
const config = require("./config.json")
const { Object2Array } = require("./util.js")
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));
Object2Array(config).forEach(x => {bot[x.k] = x.v})

bot.login(token);