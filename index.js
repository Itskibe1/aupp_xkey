const genId1 = require('kbui_xid');
const genId2 = require('psvb_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|q5lLxCPc6x|' + genId2()).digest('base64');
}


module.exports = generateKey;
