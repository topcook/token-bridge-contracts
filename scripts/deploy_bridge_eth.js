const hre = require("hardhat");

async function main() {
    const TokenEth = await ethers.getContractFactory("TokenEth");
    const tokenEth = await TokenEth.deploy();
    await tokenEth.deployed();
    await tokenEth.mint(addresses[0], 1000);

    const BridgeEth = await ethers.getContractFactory("BridgeEth");
    const bridgeEth = await BridgeEth.deploy(tokenEth.address);
    await bridgeEth.deployed();
    await tokenEth.updateAdmin(bridgeEth.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
