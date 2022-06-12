import React from 'react'

function Footer({id}) {
  return (
    <>
    <hr className={id ? "max-w-7xl mt-48 mx-auto border-2 border-black" : "max-w-7xl mt-12 mx-auto border-2 border-black"}  />
    <div className='max-w-7xl mx-auto p-12 flex justify-between items-center'>
        <div>
            <img src="/logo_okul.png" className='w-[50%]' />
        </div>
        <div>
            <h1 className='text-4xl f'>Tobb Etu Blockchain #WAGMI</h1>
        </div>
    </div>
    </>
    
  )
}

export default Footer