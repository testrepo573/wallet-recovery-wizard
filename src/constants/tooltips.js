export default {
  crossChain: {
    sourceCoin: () => 'This is the coin that was sent to the wrong address. For instance, if you sent BTC to an LTC address, the source coin would be BTC.',
    destinationCoin: () => 'This is the coin type of the wallet that received the source coin. For instance, if you sent BTC to an LTC address, the destination coin would be LTC.',
    wallet: (coin) => `This is the wallet ID of the wallet that received the source coin. This should be a ${coin.toUpperCase()} wallet.`,
    txid: (coin) => `The transaction ID of the transaction that sent ${coin.toUpperCase()} to the wrong address.`,
    address: (coin) => `The address the source coin was mistakenly sent to. This should be a ${coin.toUpperCase()} address.`,
    unspent: (coin) => `The unspent ID of the lost ${coin.toUpperCase()}, in the form [PREVIOUS_TX_ID]:[N_OUTPUT].`,
    recoveryAddress: (coin) => `The address your recovery transaction will send to. This should be a ${coin.toUpperCase()} address.`,
    passphrase: (coin) => `The wallet passphrase of the ${coin.toUpperCase()} wallet that received the source coin. You can leave this blank if you know the private key.`,
    prv: (coin) => `The private key (xprv) for the ${coin.toUpperCase()} wallet that received the source coin. If you have your wallet passphrase, you don't need this.`
  },
  ethRecovery: {
    boxAValue: `Your encrypted user key, as found on your recovery KeyCard.`,
    boxBValue: `Your encrypted backup key, as found on your recovery KeyCard.`,
    walletContractAddress: `The ETH address of the wallet contract. This is also the wallet's base address.`,
    walletPassphrase: `The passphrase of the wallet.`,
    recoveryAddress: `The address your recovery transaction will send to.`
  }
}