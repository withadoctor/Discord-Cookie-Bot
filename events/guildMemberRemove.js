module.exports = async (bot, member) => {
    const guild = member.guild;
    const deleteUser = member.user;
    const byeChannel = guild.channels.find(channel => channel.name == bot.byeChannelName);
  
    byeChannel.send(`<@${deleteUser.id}> ${bot.byeChannelComment}\n`);
}