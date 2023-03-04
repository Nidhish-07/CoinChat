import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { ChatAddress, ChatABI } from "./contractData";

export const ifWalletIsConnected = async () => {
  try {
    if (!window.ethereum) {
      return console.log("Metamask not installed");
    }

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0];
    console.log(firstAccount);
  } catch (error) {
    console.log("Metamask not installed " + error);
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      return console.log("Metamask not installed");
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const firstAccount = accounts[0];
    console.log(firstAccount);
  } catch (error) {
    console.log("Metamask not installed " + error);
  }
};

export const fetchContract = async (signer) => {
  new ethers.Contract(ChatABI, ChatAddress, signer);
};

export const connectingToContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const coverTIme=(time)=>{
  const newTime=new Date(time.toNumber());
}
