import Link from "next/link";
import React from "react";

function NavBar({ user }) {
  return (
    <>
    <div className="flex p-12 max-w-7xl mx-auto justify-between f">
      <div className="flex space-x-12 justify-center items-center">
        <img src="/leaf.png" alt="sdjfaf" className="w-16 object-contain" />
        <Link href="/">
          <div className="text-4xl hover:cursor-pointer text-green-400 hover:scale-105 animate-bounce">
          GreenUrban <span className="text-yellow-600">NFT</span>
          </div>
        </Link>
        <Link href={`/usernfts/${user}`} >
          <div className="animate-pulse text-2xl cursor-pointer">
            My Nfts
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center">
        Current User : &nbsp; <span className="text-blue-800">{user}</span>
      </div>
      
    </div>
    <hr className="max-w-7xl mx-auto border-2 border-black"  />
    </>
    
  );
}

export default NavBar;
