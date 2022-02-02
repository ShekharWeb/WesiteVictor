import Image from "next/image";

const OrcsCard = ({
  imgSrc,
  nftName,
  price,
  text,
  mintNft,
  id,
  showMintOption,
}) => {
  return (
    <div>
      <div className="relative h-52 w-32">
        <Image src={imgSrc} layout="fill" objectFit="contain" />
        <p
          className={`absolute uppercase text-xl bottom-0 lg:bottom-0 left-1/2 -translate-x-1/2 text-${text}`}
        >
          {nftName}
        </p>
      </div>
      {showMintOption && (
        <div className="flex items-center justify-center">
            <button
              onClick={() => {
                mintNft(id);
              }}
              className="bg-[#9B0000] w-28 -translate-x-1 px-2 -skew-x-12 py-1 text-base text-white"
            >
              Buy - ${price} busd
            </button>
        </div>
      )}
    </div>
  );
};

export default OrcsCard;
