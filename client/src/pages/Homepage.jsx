import React from 'react'
import Recommendation from '../components/Recommendation'
import Login from '../components/Login'

const Homepage = ({login, setLogin}) => {
  return (
    <div className='relative pb-10'>
        {
            login && 
            <Login setLogin={setLogin}/>
        }
        <section className='px-32'>
            <p className='text-[#002f34] text-2xl mt-10'>Fresh Recomendations</p>
            <Recommendation />
            <div className="flex px-4 py-3 rounded-md border-2 border-[#002f34] font-semibold w-max self-center mx-auto mt-10 cursor-pointer">Load More</div>
        </section>
    </div>
  )
}

export default Homepage
