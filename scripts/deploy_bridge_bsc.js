const hre = require("hardhat");

async function main() {
    const TokenBsc = await ethers.getContractFactory("TokenBsc");
    const tokenBsc = await TokenBsc.deploy();
    await tokenBsc.deployed();

    const BridgeBsc = await ethers.getContractFactory("BridgeBsc");
    const bridgeBsc = await BridgeBsc.deploy(tokenBsc.address);
    await bridgeBsc.deployed();

    await tokenBsc.updateAdmin(bridgeBsc.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
