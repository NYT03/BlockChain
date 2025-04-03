const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
    const RealEstateToken = await hre.ethers.getContractFactory("RealEstateToken");
    const contract = await RealEstateToken.deploy();
    await contract.waitForDeployment();
    
    const address = await contract.getAddress();
    console.log("RealEstateToken deployed to:", address);

    // Save contract address to a JSON file for frontend access
    const contractAddressPath = path.join(__dirname, "..", "src", "contracts", "contract-address.json");
    fs.writeFileSync(
        contractAddressPath,
        JSON.stringify({ RealEstateToken: address }, undefined, 2)
    );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
