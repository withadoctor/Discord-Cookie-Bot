const Sharder = require('eris-sharder').Master;
const sharder = new Sharder(process.argv[2], "/bot.js", {
    // stats: true,
    debug: true,
    // guildsPerShard: 1500,
    name: "Cookie Bot",
    clientOptions:{
        autoreconnect:true,
        compress:false,
        disableEvents:{
            TYPEING_START:true,
            VOICE_SERVER_UPDATE:true,
            VOICE_STATE_UPDATE:true,
            USER_NOTE_UPDATE:true,
            CHANNEL_PINS_UPDATE:true,
            MESSAGE_UPDATE:true,
            RELATIONSHIP_ADD:true,
            RELATIONSHIP_REMOVE:true
        },
        disableEveryone:true,
        messageLimit:10,
        defaultImageFormat:"png",
        defaultImageSize:128,
        restMode:true
    }
});

// sharder.on("stats", stats => {
//     console.log('stats')
//     console.log(stats);
// });