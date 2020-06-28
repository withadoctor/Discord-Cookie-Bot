module.exports = {
    Object2Array: function Object2Array(obj) {
        return Object.keys(obj).map(key => {return {k: key, v: obj[key]}})
    }
}