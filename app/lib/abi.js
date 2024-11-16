const contractAddress = "0x87A38d0E72820A9fB5aE5F02C7f38a832Cd77C9F"

const abi = [
  {
    type: 'function',
    name: 'getRecentWinner',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'address' }],
  },
  {
    type: 'function',
    name: 'getNumberOfPlayers',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },

]

module.exports = { contractAddress, abi };