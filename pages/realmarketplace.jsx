import { useState } from 'react';
import NavbarRealmarketplace from '../components/NavbarRealmarketplace';
import RealMarketplace from '../components/RealMarketplace';
import Head from 'next/head';


import Web3 from "web3";

import ContractAbi from "../src/abis/ContractAbi.json";

const realmarketplace = () => {

	
	const [connected, setConnected] = useState(false);
	const [account, setAccount] = useState(null);
	const [nftContract, setNftContract] = useState(null);

	const connectToWeb3 = async () => {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			loadBlockchainData()
		} else {
			setConnected(false);
		}

	}

	const loadBlockchainData = async () => {
		window.web3 = new Web3(window.ethereum);
		const web3 = window.web3;


		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		const account = accounts[0];
		web3.eth.defaultAccount = account;
		setAccount(account);
		
		const networkId = await web3.eth.net.getId()

		if (networkId == 56 || networkId == 97) {
			const contractAddress = "0x474e5A872d2336a94c3DEe2e908479772a4959F2";
			const nftContract0 = new web3.eth.Contract(ContractAbi.abi, contractAddress);
			setConnected(true);
			setNftContract(nftContract0);
		} else {
			switchToBinanceTestnet();
		}
	}

	const switchToBinanceMainnet = async () => {
		try {
			await window.ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: "0x38" }],
			});
			loadBlockChatData();
		} catch (error) {
			if (error.code === 4902) {
				try {
					await window.ethereum.request({
						method: "wallet_addEthereumChain",
						params: [
							{
								chainId: "0x38",
								chainName: "Binance Mainnet",
								rpcUrls: ["https://bsc-dataseed.binance.org/"],
								nativeCurrency: {
									name: "BNB",
									symbol: "BNB",
									decimals: 18,
								},
								blockExplorerUrls: ["https://bscscan.com"],
							},
						],
					});
					loadBlockChatData();

				} catch (error) {
					console.log(error.message);
				}
			}
		}
	}

	const switchToBinanceTestnet = async () => {
		try {
			await window.ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: "0x61" }],
			});
			loadBlockChatData();
		} catch (error) {
			if (error.code === 4902) {
				try {
					await window.ethereum.request({
						method: "wallet_addEthereumChain",
						params: [
							{
								chainId: "0x61",
								chainName: "Binance Testnet",
								rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
								nativeCurrency: {
									name: "BNB",
									symbol: "BNB",
									decimals: 18,
								},
								blockExplorerUrls: ["https://bscscan.com"],
							},
						],
					});
					loadBlockChatData();

				} catch (error) {
					console.log(error.message);
				}
			}
		}
	}

	return (
		<>
			<Head>
				<link rel="icon" type="image/x-icon" href="/Favicon.ico" />
				<title>Guerdon Vicor - Marketplace</title>
			</Head>
			<div className="bg-gradient-to-b to-blue-700 from-purple-700 min-h-screen flex items-center justify-center pt-32 sm:pt-24">
				<div className="h-24">
					<NavbarRealmarketplace connectToWeb3={connectToWeb3} account={account} connected={connected} />
				</div>
				<div className="">
					<RealMarketplace connectToWeb3={connectToWeb3} account={account} connected={connected} nftContract={nftContract} />
				</div>
			</div>
		</>
	);
};

export default realmarketplace;
