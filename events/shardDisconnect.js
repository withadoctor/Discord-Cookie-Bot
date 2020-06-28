exports.handle = function(error, id) {
	console.error('['+id+']--------------- Bot Disconnected---------------');
	if(error) console.error('['+id+'] '+error.code);
}