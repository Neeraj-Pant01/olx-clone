import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const UserUploaded = () => {
    const desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis repudiandae rem error dignissimos enim impedit totam tenetur, beatae doloremque et?"
  return (
    <div className='flex flex-col py-2 px-2 border rounded-md w-[280px]'>
      <div className="relative w-[100%] h-[180px]">
        <img src="https://apollo.olx.in/v1/files/qp9xf8kxrsme-IN/image;s=300x600;q=60" alt="" className='w-[100%] h-[100%]' />
        <AiOutlineHeart className='absolute right-0 top-0 text-4xl font-bold bg-[white] py-2 px-2 rounded-full' />
        {/* <span className='px-2 rounded-sm text-xs bg-[#ffce32] absolute bottom-[-5px] left-0'>FEATURED</span> */}
      </div>
      <div className="flex flex-col mt-2">
        <span className='text-[#002f34] text-xl font-bold'>₹ 4,00,00,000</span>
        <p className='text-[#002f34]'>3 BDS - Ba - 2000 ft2</p>
        <p className='text-[grey] text-sm'>{desc.substring(0, 30)}...</p>
        <div className="flex Users-center justify-between">
        <p className='text-[grey] text-xs uppercase'>mumbai west</p>
        <span className='text-[grey] text-xs uppercase'>TODAY</span>
        </div>
      </div>
    </div>
  )
}

export default UserUploaded
