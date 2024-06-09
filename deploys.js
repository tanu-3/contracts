const hre = require("hardhat");
async function main() {
  const OddEvenChecker = await ethers.getContractFactory("OddEvenChecker");
  const checker = await OddEvenChecker.deploy();
  await checker.deployed();
  const num = 10;
  const isEven = await checker.isEven(num);
  const isOdd = await checker.isOdd(num);
  console.log(`Is ${num} even? ${isEven}`);
  console.log(`Is ${num} odd? ${isOdd}`);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
  });
