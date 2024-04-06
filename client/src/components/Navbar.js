import React from 'react'

const Navbar = () => {
  return (

    <div className="w-full h-[80px] relative bg-[#FFE91E] flex ">
      <div className='w-[191px] h-[50px] text-black text-[32px] font-normal  leading-10 ml-[271px] mt-5'>
        LandSol
      </div>
      <nav className='w-[416px] h-10 justify-start items-center gap-10 inline-flex ml-[300px] mt-3'>

        <a href="" className="text-center  text-slate-800 text-base font-bold font-['Times New Roman']  leading-10 hover:text-amber-500">Buy</a>
        <a href="" className="text-center text-slate-800 text-base font-bold font-['Times New Roman'] leading-10 hover:text-amber-500">Sell</a>
        <a href="" className="text-center text-slate-800 text-base font-bold font-['Times New Roman'] leading-10 hover:text-amber-500">Transaction</a>
        <a href="" className="text-center text-slate-800 text-base font-bold font-['Times New Roman'] leading-10 hover:text-amber-500">Your Properties</a>
      </nav>



      <div className="w-[129px] h-10 px-6 bg-amber-500 justify-start items-center gap-4 inline-flex ml-[700px] mt-5 hover:bg-amber-700">
        <button className="text-right text-white text-base font-bold font-['Times New Roman'] leading-10" >Login</button>
        <div className="w-6 h-6 relative">
          <img className="w-[17.99px] h-[14.40px] left-[3.01px] top-[4.80px] absolute" src="https://via.placeholder.com/18x14" />
        </div>
      </div>
    </div>

  )
}

export default Navbar