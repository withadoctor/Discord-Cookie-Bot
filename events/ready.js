module.exports = (bot) => {
    console.log(`${bot.user.username} is online`)
    
    let statuses = [
        `${bot.guilds.size} servers!`,
        "!help",
        `over ${bot.users.size} users!`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});
        bot.user.setActivity(status, {
            type: "PLAYING",
            url: "https://github.com/withadoctor/Discord-Cookie-Bot#readme"
        });
    }, 5000)

}