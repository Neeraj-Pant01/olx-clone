import React, { useState } from 'react'

const Upload = () => {
    const [images, setImages] = useState({
        img1:null,
        img2:null,
        img3:null,
        img4:null
    })
  return (
    <div className='flex flex-col items-center justify-center py-10'>
      <b className='text-2xl text-[#002f34]'>POST YOUR AD</b>
      <div className='border w-[850px] rounded-md flex flex-col gap-4 mt-5 py-5'>
        <div className="flex border-b px-5 py-4">
        <p className='text-xl font-semibold'>ENTER THE PRODUCT DETAILS</p>
        </div>
        <form action="" className='flex flex-col px-5 py-2'>
            <p className='font-semibold text-xl mb-4 text-[#002f34]'>INCLUDE SOME DETAILS</p>
            <div className="flex flex-col w-[60%] mb-4">
                <label className='text-[#002f34] text-sm'>Brand*</label>
                <input type='text' placeholder='type brand' className='py-2 border outline-none rounded-sm px-4 border-[#002f34]' />
            </div>
            <div className="flex flex-col w-[60%] mb-4">
                <label className='text-[#002f34] text-sm'>Title*</label>
                <input type='text' placeholder='title' className='py-2 px-4 outline-none rounded-sm border border-[#002f34]' />
            </div>
            <div className="flex flex-col w-[60%] mb-4">
                <label className='text-[#002f34] text-sm'>Description</label>
                <textarea className='py-2 resize-none rounded-md px-4 outline-none border border-[#002f34]' />
            </div>
            <div className="flex flex-col w-[60%] mt-8 mb-4">
                <p className='text-xl font-semibold text-[#002f34]'>SET A PRICE</p>
                <label className='text-[#002f34] text-sm mt-4'>Price*</label>
                <input type='number' placeholder='set price' className='py-2 px-4 outline-none rounded-sm border border-[#002f34]' />
            </div>
            <div className="flex flex-col font-semibold text-xl text-[#002f34] w-[60%] mt-10">
                <h1>UPLOAD IMAGES</h1>
                <div className="flex gap-4 py-4 items-center">
                    <label htmlFor='one'>
                    <img src={images.img1 ? URL.createObjectURL(images.img1) :"https://cdn-icons-png.flaticon.com/512/4211/4211763.png"} alt="" className='w-[80px] h-[80px] cursor-pointer' />
                    <input type='file' id='one' style={{display:"none"}} onChange={(e)=>setImages({...images, img1:e.target.files[0]})} />
                    </label>
                    <label htmlFor='two'>
                    <img src={images.img2 ? URL.createObjectURL(images.img2) : "https://cdn-icons-png.flaticon.com/512/4211/4211763.png"} alt="" className='w-[80px] h-[80px] cursor-pointer' />
                    <input type='file' id='two' style={{display:"none"}} onChange={(e)=>setImages({...images, img2:e.target.files[0]})}/>
                    </label>
                    <label htmlFor='three'>
                    <img src={images.img3 ? URL.createObjectURL(images.img3) : "https://cdn-icons-png.flaticon.com/512/4211/4211763.png"} alt="" className='w-[80px] h-[80px] cursor-pointer' />
                    <input type='file' id='three' style={{display:"none"}} onChange={(e)=>setImages({...images, img3:e.target.files[0]})}/>
                    </label>
                    <label htmlFor='four'>
                    <img src={images.img4 ? URL.createObjectURL(images.img4) : "https://cdn-icons-png.flaticon.com/512/4211/4211763.png"} alt="" className='w-[80px] h-[80px] cursor-pointer' />
                    <input type='file' id='four' style={{display:"none"}} onChange={(e)=>setImages({...images, img4:e.target.files[0]})}/>
                    </label>
                </div>
            </div>

            <div className="flex flex-col w-[60%] mt-5 mb-2">
                <label className='text-[#002f34] text-sm mt-4'>State*</label>
                <input type='text' placeholder='state' className='py-2 px-4 outline-none rounded-sm border border-[#002f34]' />
            </div>

            <div className="flex flex-col w-[60%] mb-2">
                <label className='text-[#002f34] text-sm mt-4'>City*</label>
                <input type='text' placeholder='city' className='py-2 px-4 outline-none rounded-sm border border-[#002f34]' />
            </div>

            <div className="flex flex-col w-[60%] mb-2">
                <label className='text-[#002f34] text-sm mt-4'>Neighbourhood*</label>
                <input type='city' placeholder='Enter Neighbourhood' className='py-2 px-4 outline-none rounded-sm border border-[#002f34]' />
            </div>

            <button className='bg-[#dcdada] mt-6 rounded-md py-3 px-4 font-semibold w-max text-[grey]'>Post now</button>
        </form>
      </div>
    </div>
  )
}

export default Upload
