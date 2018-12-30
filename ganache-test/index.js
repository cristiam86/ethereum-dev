const Web3 = require('web3');
var EthereumTransaction = require("ethereumjs-tx")

const web3 = new Web3('HTTP://127.0.0.1:7545');

// console.log('web3', web3);

// web3.eth.getAccounts().then(accounts => console.log('accounts', accounts));

const receivingAddress = '0x538E8c696f008315E41b6d2eEd9494220350F633';
const sendingAddress = '0xAC7a8806a0c07c1EE7b23b71dF43E268E493979e';

var rawTransaction = {
    nonce: 2,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 1000000000000000000,
    data: ""
}


web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

var privateKeySender = 'a3a494fb25baa34af71b458867d9076d380a9e23a2a3dc7e660012629aaba478'
var privateKeySenderHex = new Buffer(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)

var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);