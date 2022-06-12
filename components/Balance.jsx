import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";




function Balance({ user, addr, abi} ) {
  
  const [green, setGreen] = useState(0);
  const [green2, setGreen2] = useState(0);
  const [green3, setGreen3] = useState(0);
  const [yellow, setYellow] = useState(0);
  const [yellow2, setYellow2] = useState(0);
  const [yellow3, setYellow3] = useState(0);
  const [blue, setBlue] = useState(0);
  const [blue2, setBlue2] = useState(0);
  const [blue3, setBlue3] = useState(0);
  const [recycler, setRecycler] = useState(0);
  const [showConvert, setShow] = useState(true);
  const [currentNft, setCur] = useState();



  async function convert(){
   
    if(typeof window.ethereum !== "undefined") {
     
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(addr, abi, signer);

      if(currentNft === "0") {
        
        try {
          await contract.Green1to2();
          toast.success("SUCCESS!");
        } catch (error) {
          toast.error("FAILED TO CONVERT, NOT ENOUGH TOKEN!");
        }
        
      } else if (currentNft === "1") {
        try {
          await contract.Green2to3();
          toast.success("SUCCESS!");
        } catch (error) {
          toast.error("FAILED TO CONVERT, NOT ENOUGH TOKEN!");
        }
      } else if (currentNft === "2") {
         toast.error("CANNOT CONVERT TO UPGRADED LEVEL!");
      } else if (currentNft === "3") {
        try {
          await contract.Yellow1to2();
          toast.success("SUCCESS!");
        } catch (error) {
          toast.error("FAILED TO CONVERT, NOT ENOUGH TOKEN!");
        }
      }
      else if (currentNft === "4") {
        try {
          await contract.Yellow2to3();
          toast.success("SUCCESS!");
        } catch (error) {
          toast.error("FAILED TO CONVERT, NOT ENOUGH TOKEN!");
        }
      }
      else if (currentNft === "5") {
        toast.error("CANNOT CONVERT TO UPGRADED LEVEL!");
      }
      else if (currentNft === "6") {
        try {
          await contract.Blue1to2();
          toast.success("SUCCESS!");
        } catch (error) {
          toast.error("FAILED TO CONVERT, NOT ENOUGH TOKEN!");
        }
      }
      else if (currentNft === "7") {
        try {
          await contract.Blue2to3();
          toast.success("SUCCESS!");
        } catch (error) {
          toast.error("FAILED TO CONVERT, NOT ENOUGH TOKEN!");
        }
      }
      else if (currentNft === "8") {
        toast.error("CANNOT CONVERT TO UPGRADED LEVEL!");
      } 
      else {
        try {
          await contract.level_up_to_recycler();
          toast.success("SUCCESS!");
        } catch (error) {
          toast.error("FAILED TO CONVERT, NOT ENOUGH TOKEN!");
        }
      }
      
    }
    
  }

  async function getBalances() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(addr, abi, provider);

      const green = await contract.balanceOf(user, 0);
      setGreen(green.toNumber());
      const green2 = await contract.balanceOf(user, 3);
      setGreen2(green2.toNumber());
      const green3 = await contract.balanceOf(user, 6);
      setGreen3(green3.toNumber());
      const yellow = await contract.balanceOf(user, 1);
      setYellow(yellow.toNumber());
      const yellow2 = await contract.balanceOf(user, 4);
      setYellow2(yellow2.toNumber());
      const yellow3 = await contract.balanceOf(user, 7);
      setYellow3(yellow3.toNumber());
      const blue = await contract.balanceOf(user, 2);
      setBlue(blue.toNumber());
      const blue2 = await contract.balanceOf(user, 5);
      setBlue2(blue2.toNumber());
      const blue3 = await contract.balanceOf(user, 8);
      setBlue3(blue3.toNumber());
      const recycler = await contract.balanceOf(user, 9);
      setRecycler(recycler.toNumber());
    }
  }
  const array = [
    { color: "bg-green-200", val: green },
    { color: "bg-green-500", val: green2 },
    { color: "bg-green-700", val: green3 },
    { color: "bg-yellow-200", val: yellow },
    { color: "bg-yellow-500", val: yellow2 },
    { color: "bg-yellow-700", val: yellow3 },
    { color: "bg-blue-200", val: blue },
    { color: "bg-blue-500", val: blue2 },
    { color: "bg-blue-700", val: blue3 },
    { color: "bg-purple-500", val: recycler },
  ];
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-24 space-y-4">
      <button
        className="px-12 f py-8 border-4 rounded-xl bg-green-400 text-white"
        onClick={getBalances}
      >
        GET NFTS
      </button>
      <div className="grid grid-cols-3 gap-4 f">
        {array.map((item, i) => (
          <>
            {i !== array.length - 1 && (
              <div
                
                key={i}
                id={i}
                onClick={convert}
                className={
                  item.color +
                  "  w-40 h-40 flex justify-center items-center text-center hover:cursor-pointer"
                }
                onMouseEnter={(e) => {
                  setShow(false);
                  setCur(e.target.id);
                }}
                onMouseLeave={(e) => {
                  setShow(true);
                }}
              >
                
                  <div className="flex flex-col space-y-2">
                    <h1>
                      {(showConvert || currentNft !== i) && "ITEM " + item.val}
                    </h1>
                    <h1>{!showConvert && currentNft == i && "CONVERT"}</h1>
                  </div>
                  
               
                
              </div>
            )}
            {i === array.length - 1 && (
              <>
                <div></div>
                <div
                key={i}
                id={i}
                onClick={convert}
                  className={
                    item.color +
                    "  w-40 h-40 flex justify-center items-center text-center hover:cursor-pointer"
                  
                  }
                  onMouseEnter={(e) => {
                    setShow(false);
                    setCur(e.target.id);
                  }}
                  onMouseLeave={(e) => {
                    setShow(true);
                  }}
                >
                  <div className="flex flex-col space-y-2">
                  <h1>
                    {(showConvert || currentNft !== i) && "ITEM " + item.val}
                  </h1>
                  <h1>{!showConvert && currentNft == i && "CONVERT"}</h1>
                </div>
                </div>
                <div></div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
export default Balance;
