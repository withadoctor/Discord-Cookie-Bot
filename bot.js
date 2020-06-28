const Base = require('eris-sharder').Base;

class CookieBot extends Base {
    constructor(bot) {
        super(bot);

        this.config = {
            prefix: '.'
        }
        this.commands = new Map();
        this.commandHandler = new (require('./handlers/command.js'))(this);
    }
 
    launch() {
        this.eventHandler = new (require('./handlers/event.js'))(this);
    }
 
}
 
module.exports = CookieBot;