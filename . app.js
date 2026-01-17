import { connectWallet } from "./web3.js";
import { listNFT, buyNFT, getMarketItems } from "./market.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  const items = await getMarketItems();
  document.getElementById("output").innerText = JSON.stringify(items, null, 2);
};

document.getElementById("listBtn").onclick = async () => {
  const id = document.getElementById("tokenId").value;
  const price = document.getElementById("price").value;
  await listNFT(id, price);
  alert("NFT listed");
};

document.getElementById("buyBtn").onclick = async () => {
  const id = document.getElementById("tokenId").value;
  await buyNFT(id);
  alert("NFT bought");
};
