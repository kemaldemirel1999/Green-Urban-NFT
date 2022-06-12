import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar';
import GreenItem from "../../artifacts/contracts/GreenItem.sol/GreenItem.json";
import { ethers } from 'ethers';
import Footer from '../../components/Footer';

function Mynfts() {
  
  const router = useRouter()
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

  const user = router.query.id;

  const array = [
    { id: 0, val: green },
    { id: 1, val: green2 },
    { id: 2, val: green3 },
    {  id:3, val: yellow },
    {  id: 4, val: yellow2 },
    {  id: 5, val: yellow3 },
    { id: 6, val: blue },
    { id: 7, val: blue2 },
    { id: 8, val: blue3 },
    {  id: 9, val: recycler },
  ];

  const img_array = ["https://raw.githubusercontent.com/cagrigit-hub/images/main/1.png",
  "https://raw.githubusercontent.com/cagrigit-hub/images/main/2.png",
  "https://raw.githubusercontent.com/cagrigit-hub/images/main/3.png",
  "https://raw.githubusercontent.com/cagrigit-hub/images/main/4.png",
  "https://raw.githubusercontent.com/cagrigit-hub/images/main/5.png",
  "https://raw.githubusercontent.com/cagrigit-hub/images/main/6.png",
  "https://raw.githubusercontent.com/cagrigit-hub/images/main/7.png",
  "https://raw.githubusercontent.com/cagrigit-hub/images/main/8.png",
  "https://raw.githubusercontent.com/cagrigit-hub/images/main/9.png",
  "https://raw.githubusercontent.com/cagrigit-hub/images/main/10.jpg",
  ]

  async function getBalances() {
    const addr = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
    const abi = GreenItem.abi;
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(addr, abi, provider);
      try {
        const green = await contract.balanceOf(user, 0);
        console.log(green.toNumber());
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
      } catch (error) {
        console.log(error);
      }
     
    }
  }
  useEffect(() => {
    
      getBalances();
    
  } , [])
  
  return (
    <>
      <NavBar user={user} />
      <div className='flex  justify-center items-center mt-48'>
      <div className="grid grid-cols-3 gap-4 f">
        {array.map((item, i) => (
          
          <>
            {!item.val && i === 0 &&(
              
              <>

              <div></div>
              <div className='flex justify-center items-center text-center text-4xl'>YOU DO NOT HAVE ANY NFT 😥</div>
              <div></div>
              </>
            )}

            {i !== array.length - 1 && item.val !== 0 && (
              <div
                key={i}
                id={i}
               
                className={
                  item.color +
                  " flex justify-center items-center text-center "
                }
              >
                <img className=' w-40 h-40' src={img_array[i]} />
            
                  
               
                
              </div>
            )}
            {i === array.length - 1 &&  item.val !== 0 &&(
              <>
                <div></div>
                <div
                key={i}
                id={i}
             
                  className={
                    item.color +
                    " flex justify-center items-center text-center "
                  
                  }
                 
                >
                  <img className=' w-40 h-40' src={img_array[i]} />
                  <div className="flex flex-col space-y-2">
                  
                </div>
                </div>
                <div></div>
              </>
            )}
          </>
        ))}
      </div>
      </div>
      <Footer id={true} />

    </>
  )
}

export default Mynfts