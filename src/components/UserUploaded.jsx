import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const UserUploaded = ({item}) => {
    const desc = item?.productDesc
    const navigate = useNavigate();
  return (
    <div className='flex h-max pb-5 flex-col py-2 px-2 border cursor-pointer rounded-md w-[280px]' onClick={()=>navigate(`/product/${item?._id}`)}>
      <div className="relative w-[100%] h-[180px]">
        <img src={item?.images[0]} alt="" className='w-[100%] h-[100%]' />
        <AiOutlineHeart className='absolute right-0 top-0 text-4xl font-bold bg-[white] py-2 px-2 rounded-full' />
        {/* <span className='px-2 rounded-sm text-xs bg-[#ffce32] absolute bottom-[-5px] left-0'>FEATURED</span> */}
      </div>
      <div className="flex flex-col mt-2">
        <span className='text-[#002f34] text-xl font-bold'>₹ {item?.price}</span>
        {/* <p className='text-[#002f34]'>3 BDS - Ba - 2000 ft2</p> */}
        <p className='text-[grey] text-sm'>{desc.substring(0, 30)}...</p>
        <div className="flex Users-center justify-between">
        <p className='text-[grey] text-xs uppercase'>{item?.city}</p>
        <span className='text-[grey] text-xs uppercase'>{new Date(item?.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}

export default UserUploaded
