module.exports = {
    Object2Array: function Object2Array(obj) {
        return Object.keys(obj).map(key => {return {k: key, v: obj[key]}})
    },
    checkPermission: function checkPermission(message) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
            return true;
        } else {
            return false;
        }
    },
    dChange: function dChange_1dto2d(src, sliceNumber) {
        if(src.length <= sliceNumber) return [src];
        let desc = []
        while(src.length) desc.push(src.splice(0,sliceNumber));
        return desc;
    },
    sleep: function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}