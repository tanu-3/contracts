// Connect to the contract on the Ethereum network
const contractAddress = 0x1d142a62E2e98474093545D4A3A0f7DB9503B8BD;
const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "isEven",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "isOdd",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
];
const contract = new web3.eth.Contract(abi, contractAddress);

// Input numbers to check
const num1 = 10;
const num2 = 15;

// Call the isEven function for num1
contract.methods.isEven(num1).call()
    .then(function(result) {
        console.log(num1 + ' is even = ', result);
    });

// Call the isOdd function for num2
contract.methods.isOdd(num2).call()
    .then(function(result) {
        console.log(num2 + ' is odd = ', result);
    });
