const fs = require('fs');

/**
 * Saves the key to the txt
 * 
 * @param {*} wif 
 */
const saveKey = (privKey) => {
    console.log('Saving wif format.')

    fs.appendFile('private-keys.txt', `Created: ${new Date().toISOString()}\n` + `Private WIF: ${privKey.toWif()}` + '\n' + `Address: ${privKey.toAddress()}` + '\n' + `Public key: ${privKey.toPublicKey()}\n\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

module.exports = { saveKey };