import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const marketAddress = "0xYourMarketContract";
const abi = [];

export async function listNFT(tokenId, price) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(marketAddress, abi, signer);
  await contract.list(tokenId, price);
}

export async function buyNFT(tokenId) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(marketAddress, abi, signer);
  await contract.buy(tokenId);
}

export async function getMarketItems() {
  const provider = getProvider();
  const contract = new ethers.Contract(marketAddress, abi, provider);
  return await contract.getItems();
}
