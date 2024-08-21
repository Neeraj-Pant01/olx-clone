import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="flex px-40 py-3 justify-between bg-[rgba(235,238,239)]">
            <div className="flex flex-col">
                <b className='mb-2'>POPULAR LOCATIONS</b>
                <span className='text-xs text-[grey] mb-1'>Kolkata</span>
                <span className='text-xs text-[grey] mb-1'>Mumbai</span>
                <span className='text-xs text-[grey] mb-1'>Pune</span>
                <span className='text-xs text-[grey] mb-1'>Chennai</span>
            </div>

            <div className="flex flex-col">
                <b className='mb-2'>TRENDING LOCATIONS</b>
                <span className='text-xs text-[grey] mb-1'>Bhubneshwar</span>
                <span className='text-xs text-[grey] mb-1'>Hyderabad</span>
                <span className='text-xs text-[grey] mb-1'>Chandigarh</span>
                <span className='text-xs text-[grey] mb-1'>Nasik</span>
            </div>

            <div className="flex flex-col">
                <b className='mb-2'>ABOUT US</b>
                <span className='text-xs text-[grey] mb-1'>Tech@OLX</span>
            </div>

            <div className="flex flex-col">
                <b className='mb-2'>OLX</b>
                <span className='text-xs text-[grey] mb-1'>Blog</span>
                <span className='text-xs text-[grey] mb-1'>Help</span>
                <span className='text-xs text-[grey] mb-1'>Sitemap</span>
                <span className='text-xs text-[grey] mb-1'>Legal & Privacy Information</span>
                <span className='text-xs text-[grey] mb-1'>Vulnerability Disclosure Program</span>
            </div>

            <div className="flex flex-col">
                <b className='mb-2'>Follow Us</b>
            </div>
        </div>
        <div className="flex bg-[rgba(0,47,52)] py-5 px-40">
            <div className="flex flex-col justify-center w-[200px] h-[100px] border-r-2 mr-10 text-xl font-bold text-[white]">
                <b>CarTradeTech</b>
                <span className='font-light'>GROUP</span>
            </div>
            <div className="flex flex-1 justify-between">
                <img className='w-[60px]' src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="" />
                <img className='w-[120px]' src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1" alt="" />
                <img className='w-[120px]' src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1" alt="" />
                <img className='w-[120px]' src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1" alt="" />
                <img className='w-[120px]' src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1" alt="" />
            </div>
        </div>
        <div className="flex bg-[rgba(0,47,52)] px-40 items-center justify-between pb-5 text-[white] text-sm">
            <span>Help-Sitemap</span>
            <span>All rights reserved &copy; 2006-2024 OLX</span>
        </div>
    </footer>
  )
}

export default Footer
