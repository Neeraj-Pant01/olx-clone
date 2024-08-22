import React, { useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import app from '../firebase'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Upload = () => {
    const [images, setImages] = useState({
        img1:null,
        img2:null,
        img3:null,
        img4:null
    })

    const navigate = useNavigate();

    const user = useSelector((state)=>state.user.currentUser)

    // console.log(user)

    const [productDetails, setProductdetails] = useState({
        userId:user?._id,
        brand:"",
        productName:"",
        productDesc:"",
        price:0,
        state:"",
        city:"",
        neighbourhood:""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setProductdetails((prev)=>{
            return {...prev, [name]:value}
        })
    }

    const [loading, setLoading] = useState(false)

    const uploadItems = async (e) => {
        e.preventDefault();
        const storage = getStorage(app);
        const imageKeys = Object.keys(images);
        const urls = []; 
    
        setLoading(true);
    
        const uploadPromises = imageKeys.map((key) => {
            const file = images[key];
            if (file) {
                const fileName = new Date().getTime() + file.name;
                const storageRef = ref(storage, fileName);
                const uploadTask = uploadBytesResumable(storageRef, file);
    
                return new Promise((resolve, reject) => {
                    uploadTask.on(
                        'state_changed',
                        (snapshot) => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log(`Upload of ${key} is ${progress}% done`);
                        },
                        (error) => {
                            console.error(`Upload of ${key} failed:`, error);
                            reject(error);
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                urls.push(downloadURL)
                                resolve();
                            });
                        }
                    );
                });
            } else {
                return Promise.resolve();
            }
        });
    
        try {
            await Promise.all(uploadPromises);
            setLoading(false);
            console.log('All uploads completed successfully:', urls);
            uploadProduct(urls);
            console.log("productdetails",productDetails)
        } catch (error) {
            setLoading(false);
            console.error('Error uploading images:', error);
        }
    };
    

    const uploadProduct = async (urls) =>{
        setLoading(true)
        try{
            const response = await axios.post(`https://olx-clone-by9t.onrender.com/api/v1/products/add`,{...productDetails,images:urls})
            console.log(response.data)
            setLoading(false)
            response.status === 200 && navigate('/')
        }catch(err){
            console.log(err)
            setLoading(false)
        }
    }

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
                <input type='text' placeholder='type brand' className='py-2 border outline-none rounded-sm px-4 border-[#002f34]' name='brand' onChange={handleChange} />
            </div>
            <div className="flex flex-col w-[60%] mb-4">
                <label className='text-[#002f34] text-sm'>Title*</label>
                <input type='text' placeholder='title' className='py-2 px-4 outline-none rounded-sm border border-[#002f34]' name='productName' onChange={handleChange} />
            </div>
            <div className="flex flex-col w-[60%] mb-4">
                <label className='text-[#002f34] text-sm'>Description</label>
                <textarea className='py-2 resize-none rounded-md px-4 outline-none border border-[#002f34]' name='productDesc' onChange={handleChange} />
            </div>
            <div className="flex flex-col w-[60%] mt-8 mb-4">
                <p className='text-xl font-semibold text-[#002f34]'>SET A PRICE</p>
                <label className='text-[#002f34] text-sm mt-4'>Price*</label>
                <input type='number' placeholder='set price' className='py-2 px-4 outline-none rounded-sm border border-[#002f34]' name='price' onChange={handleChange} />
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
                <input type='text' placeholder='state' className='py-2 px-4 outline-none rounded-sm border border-[#002f34]' name='state' onChange={handleChange} />
            </div>

            <div className="flex flex-col w-[60%] mb-2">
                <label className='text-[#002f34] text-sm mt-4'>City*</label>
                <input type='text' placeholder='city' className='py-2 px-4 outline-none rounded-sm border border-[#002f34]' name='city' onChange={handleChange} />
            </div>

            <div className="flex flex-col w-[60%] mb-2">
                <label className='text-[#002f34] text-sm mt-4'>Neighbourhood*</label>
                <input type='city' placeholder='Enter Neighbourhood' className='py-2 px-4 outline-none rounded-sm border border-[#002f34]' name='neighbourhood' onChange={handleChange} />
            </div>

            {
                loading ?
                <div className='bg-[#ebe9e9] mt-6 rounded-md py-3 cursor-not-allowed px-4 font-semibold w-max text-[grey]'>Loading...</div>
                :
            <button className='bg-[#dcdada] mt-6 rounded-md py-3 px-4 font-semibold w-max text-[grey]' onClick={uploadItems}>Post now</button>
}
        </form>
      </div>
    </div>
  )
}

export default Upload
