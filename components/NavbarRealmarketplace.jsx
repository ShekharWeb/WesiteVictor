import Image from "next/image";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../atoms/listAtom";
import Socials from "./Socials";

const NavbarRealmarketplace = ({ connectToWeb3, account, connected }) => {
  const [open, setOpen] = useState(true);
  const openNavlist = () => (!open ? setOpen(true) : setOpen(false));
  const router = useRouter();
  const [list, setList] = useRecoilState(listState);

  return (
    <>
      <div className="bg-transparent fixed top-0 left-0 w-full z-10">
        <div className="max-w-8xl mx-auto relative">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center space-x-6 -z-0">
              <div
                onClick={() => router.push("/")}
                className="relative h-20 w-40 md:h-10 md:w-24 lg:h-12 lg:w-28 xl:h-16 xl:w-36 cursor-pointer"
              >
                <Image
                  src="/assets/GV-Logo.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div
                className="text-2xl text-white cursor-pointer hidden md:block"
                onClick={() => {
                  setList("orcs");
                }}
              >
                orcs
              </div>
              <div
                className="text-2xl text-white cursor-pointer hidden md:block"
                onClick={() => {
                  setList("weapons");
                }}
              >
                Weapons
              </div>
            </div>
            <div className="hidden md:block">
              <ul
                className={`flex space-x-6 text-white -translate-x-6`}
                id="menu"
              >
                {connected ? (
                  <>
                    <li className="">
                      <button className="text-black px-4 py-2 bg-white -skew-x-12">
                        <div
                          className="skew-x-12 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-purple-700"
                          onClick={() => {
                            setList("myorcs");
                          }}
                        >
                          MY ORC
                        </div>
                      </button>
                    </li>
                    <li className="">
                      <button className="text-black px-4 py-2 bg-white -skew-x-12">
                        <div
                          className="skew-x-12 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-purple-700"
                          onClick={() => {
                            setList("myweapons");
                          }}
                        >
                          MY WEAPON
                        </div>
                      </button>
                    </li>
                    <li className="">
                      <button className="text-black px-4 py-2 bg-white -skew-x-12">
                        <div
                          className="skew-x-12 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-purple-700"
                          onClick={() => {
                            setList("sold");
                          }}
                        >
                          SOLD
                        </div>
                      </button>
                    </li>
                    <li className="">
                      <button className="text-black px-4 py-2 bg-white -skew-x-12">
                        <div
                          className="skew-x-12 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-purple-700"
                          onClick={() => {
                            setList("selling");
                          }}
                        >
                          SELLING
                        </div>
                      </button>
                    </li>
                    <li className="">
                      <button className="text-black px-4 py-2 bg-white -skew-x-12">
                        <div className="skew-x-12 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-purple-700">
                          {`${account.substring(0, 5)}...${account.substring(
                            account.length - 4,
                            account.length
                          )} `}
                        </div>
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <button
                      onClick={connectToWeb3}
                      className="text-black px-4 py-2 bg-white -skew-x-12"
                    >
                      <div className="skew-x-12 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-purple-700">
                        Connect Wallet
                      </div>
                    </button>
                  </li>
                )}
              </ul>
            </div>
            {open ? (
              <MenuAlt3Icon
                onClick={openNavlist}
                className="inline md:hidden h-10 w-10 cursor-pointer text-white"
              />
            ) : (
              <XIcon
                onClick={openNavlist}
                className="inline md:hidden h-10 w-10 cursor-pointer text-white"
              />
            )}

            {/* Navbar for mobile */}
            {!open && (
              <div className="absolute top-0 left-0 md:hidden md:-z-10">
                <div className="flex flex-col justify-evenly space-y-4 items-center w-72 sm:w-96 h-screen bg-indigo-900">
                  <ul className="text-lg flex flex-col items-center text-gray-100 space-y-4 mt-20">
                    <div
                      onClick={() => {
                        router.push("/");
                        openNavlist();
                      }}
                      className="relative h-28 w-52 -mt-28"
                    >
                      <Image
                        src="/assets/GV-Logo.png"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div
                      className="text-2xl text-white cursor-pointer"
                      onClick={() => {
                        setList("orcs");
                        openNavlist();
                      }}
                    >
                      orcs
                    </div>
                    <div
                      className="text-2xl text-white cursor-pointer"
                      onClick={() => {
                        setList("weapons");
                        openNavlist();
                      }}
                    >
                      Weapons
                    </div>
                    <li
                      onClick={() => {
                        setOpen(true);
                      }}
                      className="cursor-pointer"
                    >
                      <button className="text-black px-4 py-2 bg-white -skew-x-12">
                        <div className="skew-x-12 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-purple-700">
                          Connect Wallet
                        </div>
                      </button>
                    </li>

                    <div className="w-full flex justify-center pt-20">
                      <Socials flex="row" classProperty="space-x-6 mx-auto" />
                    </div>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarRealmarketplace;
