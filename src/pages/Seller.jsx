import React, { useEffect, useState } from 'react'
import { AiFillCalendar, AiFillGoogleCircle, AiFillMail, AiOutlineFlag, AiOutlineShareAlt, AiOutlineWhatsApp } from 'react-icons/ai';
import { MdOutlinePeopleOutline } from "react-icons/md";
import Item from '../components/Item';
import UserUploaded from '../components/UserUploaded';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Seller() {
  const {id} = useParams()
  const [seller, setSeller] = useState()
  const [items, setItems] = useState([])


  const getAllItems = async () =>{
    try{
      const response = await axios.get(`https://olx-clone-by9t.onrender.com/api/v1/products/seller/${id}`)
      setItems(response.data)
    }catch(err){
      console.log(err)
    }
  }

  const getSellerProfile = async () =>{
    try{
      const response = await axios.get(`https://olx-clone-by9t.onrender.com/api/v1/auth/${id}`)
      setSeller(response.data)
    }catch(err){
      console.log(err)
    }
  }
  

  useEffect(()=>{
    getSellerProfile();
    getAllItems();
  },[])

  return (
    <div className='flex px-32 gap-[20px] py-10 pb-20'>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 h-max">
        <img src="https://media.licdn.com/dms/image/v2/D5612AQFlR6CXtEk3og/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1709355454835?e=1729123200&v=beta&t=O45b37CCLwqekQasJklozORwg7sUvjUX1T64ATZPMc0" alt="" className='w-[110px] h-[110px] rounded-full mb-5'/>
        <div className="flex items-center justify-between w-[100%]">
            <sapn className="text-xl text-[#002f34] font-semibold">{seller?.username}</sapn>
            <div className="flex text-xl items-center border rounded-lg px-4 border-[#002f34]">
                <MdOutlinePeopleOutline />
                +
            </div>
        </div>
        <p className='text-[#002f34] flex gap-2 items-center text-xs w-[100%]'><AiFillCalendar /> Member since {new Date(seller?.createdAt).toLocaleDateString()}</p>
        <div className="flex w-[100%] items-center text-xs gap-5 text-[#002f34]">
            <span className='flex gap-2 items-center'>
            <MdOutlinePeopleOutline /> 0 followers
            </span>
            <span>
                0 followings
            </span>
        </div>
        <div className="flex flex-col w-[100%] text-[#002f34]">
            <p className='text-xs font-semibold'>User Verified with</p>
            <div className="flex items-center gap-2 mt-2">
                <AiFillGoogleCircle />
                <AiOutlineWhatsApp />
                <AiFillMail />
            </div>
        </div>
        <div className="flex items-center mt-5 text-[white] bg-[#002f34] w-[98%] rounded-md cursor-pointer py-3 justify-center font-semibold gap-2 text-center">
            <AiOutlineShareAlt />
            Share profile
        </div>
        <div className="flex items-center border border-[#002f34] bg-[white] text-[#002f34] w-[98%] rounded-md cursor-pointer py-3 justify-center gap-2 font-semibold text-center">
            <AiOutlineFlag />
            Report user
        </div>
      </div>
      <div className="flex flex-[2.7] gap-[10px] flex-wrap">
        {
          items.map((item,i)=><UserUploaded key={i} item={item} />)
        }
      </div>
    </div>
  )
}

export default Seller
