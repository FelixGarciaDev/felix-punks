const deploy = async () => {
    // LOOK INTO DOCS ABOUTS ETHERS
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);

    const FelixPunks = await ethers.getContractFactory("FelixPunks"); // parameter must be the same name of the smartcontract
    const deployed = await FelixPunks.deploy(30);

    console.log("FelixPunk is deployed at:", deployed.address);
};
  
deploy()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});