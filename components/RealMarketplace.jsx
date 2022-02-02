import OrcsCard from "../components/OrcsCard";
import { OrcsList } from "../components/OrcsList";
import { useRecoilState } from "recoil";
import { listState } from "../atoms/listAtom";
import { WeaponsList } from "../components/WeaponsList";
import Image from "next/image";
import { useEffect, useState } from "react";

import TokenAbi from "../src/abis/TokenAbi.json";

const RealMarketplace = ({
  connectToWeb3,
  account,
  connected,
  nftContract,
}) => {
  const [list, setList] = useRecoilState(listState);
  const [mintLoading, setMintLoading] = useState(false);
  const [notice, setNotice] = useState("");


  const [loadingArray, setLoadingArray] = useState(true);
  const [userNfts, setUserNfts] = useState([]);

  const nftContractAddress = "0x474e5A872d2336a94c3DEe2e908479772a4959F2";

  const mintNft = async (id) => {
    if (connected) {
      setMintLoading(true);
      const web3 = window.web3;
      const tokenAddress = "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7";
      const tokenCon = new web3.eth.Contract(TokenAbi, tokenAddress);
      try {
        setNotice("Minting NFT. Please Wait...")
        const _nftPrice = web3.utils.toWei(getPriceForNft(id), "ether");
        const _allowAmount = await tokenCon.methods
        .allowance(account, nftContractAddress)
        .call();
        if (Number(_allowAmount) >= Number(_nftPrice)) { 
          setNotice("Token Approved. Now Please confirm and then Wait to mint NFT");
        } else {
          setNotice("Please approve Tokens and then Wait for minting NFT.");
            await tokenCon.methods
              .approve(nftContractAddress, _nftPrice)
              .send({ from: account });
          setNotice("Token Approved. Now Please confirm and then Wait to mint NFT.");
        }

        await nftContract.methods
          .mint(id)
          .send({ from: account });
          setNotice("NFT minted Succefully.");

          setTimeout(function() {
            setMintLoading(false) 
        }, 5000);

        loadArrayStatus();

  } catch (error) {
    console.log(error);
    setNotice(error.message);
    setTimeout(function() {
      setMintLoading(false) 
  }, 5000);
      }
    } else {
      setNotice("Please connnect your wallet.");

    }
  };

  const getPriceForNft = (id) => {
    return id < '10' ? "149" : "19";
  };

  useEffect(() => {
    if(nftContract !== null){
      loadArrayStatus();
    }
  }, [nftContract]);

  const loadArrayStatus = async () => {
      setLoadingArray(true);
      let _wallet = await nftContract.methods.nftsWithIdOfOwner(account).call();
      console.log(_wallet);
      setUserNfts(_wallet);
      setLoadingArray(false);
  }

 

  return (
    <div>
      {mintLoading && <h1>{notice}</h1>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6 sm:gap-12 max-w-8xl mx-auto px-8 md:px-0 pb-4">
        {list === "orcs"
          ? OrcsList.map(({ id, nftName, imgSrc, price }) => {
              return (
                <OrcsCard
                  showMintOption={true}
                  mintNft={mintNft}
                  key={id}
                  id={id}
                  nftName={nftName}
                  imgSrc={imgSrc}
                  price={price}
                  text={"black"}
                />
              );
            })
          : list === "weapons" ?
           WeaponsList.map(({ id, nftName, imgSrc, price }) => {
              return (
                <OrcsCard
                showMintOption={true}
                  mintNft={mintNft}
                  key={id}
                  id={id}
                  nftName={nftName}
                  imgSrc={imgSrc}
                  price={price}
                  text={"white"}
                />
              );
            }) : list === "myorcs" ? loadingArray ? <h1>Loading. Please Wait....</h1> : userNfts.length === 0 ? <h1>These is nothing to show</h1> : 
            OrcsList.map(({ id, nftName, imgSrc, price }) => {
              return (
                userNfts.includes((id).toString()) &&
                <OrcsCard
                  showMintOption={false}
                  mintNft={mintNft}
                  key={id}
                  id={id}
                  nftName={nftName}
                  imgSrc={imgSrc}
                  price={price}
                  text={"black"}
                />
              );
            })
            : list === "myweapons" ? 
            loadingArray? <h1>Loading. Please Wait....</h1> : userNfts.length === 0 ? <h1>These is nothing to show</h1> :
           WeaponsList.map(({ id, nftName, imgSrc, price }) => {
              return (
                userNfts.includes((id).toString()) &&
                <OrcsCard
                showMintOption={false}
                  mintNft={mintNft}
                  key={id}
                  id={id}
                  nftName={nftName}
                  imgSrc={imgSrc}
                  price={price}
                  text={"white"}
                />
              );
            })
             : list === "sold" ? <h1>Coming Soon...</h1> 
            : list === "selling" ? <h1>Coming Soon...</h1>
             : OrcsList.map(({ id, nftName, imgSrc, price }) => {
              return (
                <OrcsCard
                showMintOption={true}
                  mintNft={mintNft}
                  key={id}
                  id={id}
                  nftName={nftName}
                  imgSrc={imgSrc}
                  price={price}
                  text={"black"}
                />
              );
            })
          }


      </div>
    </div>
  );
};

export default RealMarketplace;
