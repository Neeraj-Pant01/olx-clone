import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai"
import { RxAvatar } from "react-icons/rx";
import { MdArrowForwardIos } from "react-icons/md";

const images = ["https://5.imimg.com/data5/VK/MB/MY-40050670/hero-super-splendor-282016-29-used-bike.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-jjy7AIaUTl94tQHcx9qdUMWrA5ftT6bfa1yvOxlHA87Q60wy_ZHAkUlCgYuedWGboI&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBKJSGlXiGGr0CWYtylOgM0OMhAPTa5p2A1F6xhPxm2LP2P_C7o8VX2JvxnO9iq3-woU&usqp=CAU", "https://imgd.aeplcdn.com/640X480/n/bw/used/s365545/365545_1715868758943.jpg"]

const SingleItem = () => {
    const [index, setIndex] = useState(0)

    const handleNext = () =>{
        if(index < images.length-1){
            setIndex(index +1)
        }else{
            setIndex(0)
        }
    }

    const handlePrev = () =>{
        if(index > 0){
            setIndex(index -1)
        }else{
            setIndex(images.length-1)
        }
    }

    return (
        <div className='bg-gray-100 pb-10 flex px-40 gap-[20px]'>
            <div className="flex flex-[3] mt-10 flex-col items-center justify-center">
                <div className='flex items-center justify-center py-4 bg-[white] flex-col w-[100%]'>
                    <div className="flex relative text-[white] bg-[black] items-center justify-center w-[100%] mb-5 h-[500px]">
                        <img className='max-w-[80%] h-[99%]' src={images[index]} alt="" />
                        <AiOutlineArrowLeft className='absolute text-5xl left-2 top-[50%] cursor-pointer' onClick={handlePrev}/>
                        <AiOutlineArrowRight className='absolute text-5xl right-2 top-[50%] cursor-pointer' onClick={handleNext} />
                    </div>
                    <div className="flex w-[100%] px-10 cursor-pointer items-center gap-[20px]">
                        {
                            images.map((img,i)=><img src={img} alt='' key={i} className='w-[60px] h-[60px] rounded-sm cursor-pointer' onClick={()=>setIndex(i)}/>)
                        }
                    </div>
                </div>
                <div className="flex flex-col w-[100%] px-4 py-4 bg-[white] mt-2 gap-3">
                <div className="flex flex-col w-[100%] px-4 py-4 bg-[white] mt-2 gap-3 border-b border-b-[#002f34]">
                    <b className='text-[#002f34] text-xl'>Details</b>
                    <div className="flex items-center justify-between w-[80%]">
                        <span>Brand</span>
                        <span>Hero</span>
                        <span>Models</span>
                        <span>Others</span>
                    </div>
                    <div className="flex items-center justify-between w-[80%]">
                        <span>Year</span>
                        <span>2014</span>
                        <span>KM driven</span>
                        <span>20,000 km</span>
                    </div>
                </div>
                <div className="flex flex-col w-[100%] px-4 py-4">
                    <b className='mb-4 text-xl'>Description</b>
                    <span className='text-sm'>Lorem, ipsum.</span>
                    <span className='text-sm'>Lorem, ipsum dolor.</span>
                    <span className='text-sm'>Lorem ipsum dolor sit.</span>
                    <span className='text-sm'>Lorem, ipsum dolor.</span>
                    <span className='text-sm'>Lorem, ipsum.</span>

                    <span className='mt-5 text-sm'>Lorem, ipsum dolor.</span>

                </div>
                </div>
            </div>
            <div className="flex flex-[1.5] mt-10 flex-col py-4 gap-2">
                <div className="flex gap-3 flex-col bg-[white] py-4 pb-6 px-4 rounded-md border text-[#002f34]">
                    <div className="flex items-center justify-between">
                        <b className='text-2xl'>₹ 36000</b>
                        <div className="flex items-center gap-3 text-3xl">
                            <AiOutlineShareAlt />
                            <AiOutlineHeart />
                        </div>
                    </div>
                    <div className="flex">
                        2014 - 2100km
                    </div>
                    <div className="flex">
                        HERO PASSION X PRO
                    </div>
                    <div className="flex text-xs justify-between">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid nostrum veritatis non.</p>
                        <span>Today</span>
                    </div>
                </div>
                <div className="flex gap-3 flex-col bg-[white] py-6 pb-6 px-4 rounded-md border text-[rgb(0,47,52)]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <RxAvatar className='text-4xl' />
                            <span className='text-xl font-bold'>Visakh</span>
                        </div>
                        <MdArrowForwardIos className='text-xl' />
                    </div>
                    <div className="flex py-2 border-2 border-[#002f34] text-center items-center justify-center rounded-md font-bold cursor-pointer">
                        chat with seller
                    </div>
                </div>

                <div className="flex gap-3 flex-col bg-[white] py-6 pb-6 px-4 rounded-md border text-[rgb(0,47,52)]">
                    <b className='text-xl'>Posted in</b>
                    <p className='text-xs mt-2'>Pathergudda, Prothrapur, Andaman & Nicobar Islands</p>
                </div>
            </div>
        </div>
    )
}

export default SingleItem
