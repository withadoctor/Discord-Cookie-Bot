module.exports = async (bot, member) => {
    const guild = member.guild;
    const newUser = member.user;
    const welcomeChannel = guild.channels.find(channel => channel.name == bot.welcomeChannelName);
  
    welcomeChannel.send(`<@${newUser.id}> ${bot.channelwelcomeChannelComment}\n`);
}