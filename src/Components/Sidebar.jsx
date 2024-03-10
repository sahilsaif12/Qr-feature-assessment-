import React, { useContext, useEffect, useState } from 'react'
import homeImg from '../assets/home.png'
function Sidebar() {
    const [open, setopen] = useState(true)
    const [active, setactive] = useState("home")
    

  return (
    <div className="relative  min-w-80">
<div className={`${open?"drawer-open":"drawer"} z-30   fixed left-0 top-0 lg:drawer-ope`}>
  <input onClick={()=>setopen(!open)} defaultChecked={open} id="my-drawer-2" type="checkbox" className="drawer-toggle" />
 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu border-r-2 text-left border-slate-700 bg-gray-900/60  p-4 w-72 min-h-full text-base-content">
      {/* Sidebar content here */}
    
      <div className="font-bold  pl-5  text-2xl  text-teal-100 italic tracking-widest ">Shopify</div>
      <br />
      <li onClick={()=>setactive("home")}   className={`text-lg text-gray-300 hover:text-gray-100 my-1 p- rounded-md ${active=="home" && "bg-gray-700/50"} `} >
      <div className="flex">

       <img width={20} src={homeImg} alt="" />  Home
      </div>
       </li>
      <li onClick={()=>setactive("orders")}  className={`text-lg text-gray-300 hover:text-gray-100 my-1 p-2 rounded-md ${active=="orders" && "bg-gray-700/50"} `} >Orders</li>
      <li onClick={()=>setactive("products")}  className={`text-lg text-gray-300 hover:text-gray-100 my-1 p-2 rounded-md ${active=="products" && "bg-gray-700/50"} `} >Products</li>
      <li onClick={()=>setactive("customers")}  className={`text-lg text-gray-300 hover:text-gray-100 my-1 p-2 rounded-md ${active=="customers" && "bg-gray-700/50"} `} >Customers</li>
      <li onClick={()=>setactive("analytics")}  className={`text-lg text-gray-300 hover:text-gray-100 my-1 p-2 rounded-md ${active=="analytics" && "bg-gray-700/50"} `} >Analytics</li>
      <li onClick={()=>setactive("marketing")}  className={`text-lg text-gray-300 hover:text-gray-100 my-1 p-2 rounded-md ${active=="marketing" && "bg-gray-700/50"} `} >Marketing</li>
      <li onClick={()=>setactive("discounts")}  className={`text-lg text-gray-300 hover:text-gray-100 my-1 p-2 rounded-md ${active=="discounts" && "bg-gray-700/50"} `} >Discounts</li>
      <div  className="btn bg-gray-700 hover:bg-gray-700/60 text-gray-100 absolute left-6 bottom-2 btn-bloc">⚙ Setting</div>
    </ul>
  
  </div>
</div> 
</div>
 )
}

export default Sidebar