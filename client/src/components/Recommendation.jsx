import React, { useEffect, useState } from 'react'
import Item from './Item'
import axios from 'axios'

const Recommendation = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const getAllItems = async () =>{
      setLoading(true)
      try{
        const response = await axios.get(`https://olx-clone-by9t.onrender.com/api/v1/products/`)
        setProducts(response.data)
        setLoading(false)
      }catch(err){
        console.log(err)
        setLoading(false)
      }
    }
    getAllItems();
  },[])
  return (
    <div className='flex items-center justify-between gap-4 flex-wrap mt-5'>
      {
        loading ?
        <div className="flex items-center justify-center text-center">Loading...</div>
        :
        products.map((p,i)=><Item key={i} p={p} />)
      }
    </div>
  )
}

export default Recommendation
