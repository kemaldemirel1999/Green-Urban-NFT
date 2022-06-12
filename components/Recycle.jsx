import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function Recycle({ addr, abi }) {
  const [selected, setSelected] = useState("-1");

  async function recycle() {
    
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(addr, abi, signer);
      if (selected !== "-1") {
        const txc = await contract.recycle(selected);
        await txc.wait();
        toast.success("Succesfully Minted!");
      } else {
        toast.error("nothing has been selected");
      }
    }
    
  }

  return (
    <div className="max-w-7xl mx-auto px-12 mt-12">
      <div className="flex space-x-12 justify-center group">
        <button
          onClick={recycle}
          className="px-6 py-3   border-2 border-green-400 rounded-xl f hover:bg-green-400 hover:border-black hover:text-white"
        >
          {" "}
          <div className="group-hover:animate-bounce">Recycle! </div>
        </button>
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
          className="w-[50%] f text-center outline outline-black focus:outline focus:outline-black shadow-lg focus:border"
        >
          <option value={-1}> Select a waste!</option>
          <option value={1}>Plastic</option>
          <option value={2}>Battery</option>
          <option value={3}>Glass</option>
        </select>
        {selected === "1" && (
          <img src="./water.png" className="w-12 object-cover" />
        )}
        {selected === "2" && (
          <img src="./accumulator.png" className="w-12 object-cover" />
        )}
        {selected === "3" && (
          <img src="./milk-bottle.png" className="w-12 object-cover" />
        )}
      </div>
    </div>
  );
}

export default Recycle;
