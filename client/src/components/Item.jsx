import React from 'react'
import {AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Item = ({p}) => {
  const navigate = useNavigate();
    const desc = p.productDesc
  return (
    <div className='flex flex-col py-2 px-2 border rounded-md cursor-pointer w-[300px]' onClick={()=>navigate(`/product/${p?._id}`)}>
      <div className="relative w-[100%] h-[200px]">
        <img src={p?.images[0]} className='w-[100%] h-[100%]' />
        <AiOutlineHeart className='absolute right-0 top-0 text-4xl font-bold bg-[white] py-2 px-2 rounded-full' />
        <span className='px-2 rounded-sm text-xs bg-[#ffce32] absolute bottom-[-5px] left-0'>FEATURED</span>
      </div>
      <div className="flex flex-col mt-2">
        <span className='text-[#002f34] text-xl font-bold'>₹ {p?.price}</span>
        <p className='text-[#002f34]'>{p?.brand} {p?.productName}</p>
        <p className='text-[grey]'>{desc.substring(0, 30)}...</p>
        <div className="flex items-center justify-between">
        <p className='text-[grey] text-xs uppercase'>{p?.city}</p>
        <span className='text-[grey] text-xs uppercase'>{new Date(p?.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}

export default Item
