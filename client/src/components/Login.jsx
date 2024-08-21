import React, { useState } from 'react'
import { AiFillGoogleCircle, AiOutlineArrowLeft, AiOutlineClose, AiOutlineMobile } from 'react-icons/ai'

const Login = ({ setLogin }) => {
  const [loginwithEmail, setLoginwithEmail] = useState(false)
  const [loginwithMobile, setLoginwithMobile] = useState(false)
  const [register, setRegister] = useState(false)
  return (
    <div className='fixed w-[100%] h-[100%] bg-[rgba(0,0,0,0.7)] z-[999] top-0'>
      {
        loginwithEmail ?

          <div style={{ transform: "translate(-50%, -50%)" }} className="flex py-3 px-3 items-center flex-col w-[30%] h-[85vh] bg-[white] mt-[24%] ml-[50%]">
            <div className='flex w-[100%]'>
              <AiOutlineArrowLeft className='text-2xl cursor-pointer' onClick={() => setLoginwithEmail(false)} />
            </div>
            <h1 className='text-[#002f34] text-4xl font-bold mt-10'>OLX</h1>
            {register &&
              <input type='text' placeholder='enter username' className='py-2 border outline-none rounded-sm px-4 border-[#002f34] w-[80%] mt-10 mb-3' />
            }
            <input type='email' placeholder='email' className='py-2 border outline-none rounded-sm px-4 border-[#002f34] w-[80%] mb-3' />
            <input type='password' placeholder='enter password' className='py-2 border outline-none rounded-sm px-4 border-[#002f34] w-[80%]' />
            <button className='bg-[#002f34] text-[white] py-2 mt-6 w-[80%] rounded-sm cursor-pointer'>{register ? "Register" : "Login"}</button>

            <p className='underline w-[100%] mt-10 font-semibold text-sm text-center cursor-pointer' onClick={() => setRegister(true)}>New user ? want to register</p>
          </div>
          :
          loginwithMobile ?
            <div style={{ transform: "translate(-50%, -50%)" }} className="flex py-3 px-3 items-center flex-col w-[30%] h-[85vh] bg-[white] mt-[24%] ml-[50%]">
              <div className='flex w-[100%]'>
                <AiOutlineArrowLeft className='text-2xl cursor-pointer' onClick={() => setLoginwithMobile(false)} />
              </div>
              <h1 className='text-[#002f34] text-4xl font-bold mt-10'>OLX</h1>
              {
                register &&
                <input type='text' placeholder='enter username' className='py-2 border outline-none rounded-sm px-4 border-[#002f34] w-[80%] mt-10 mb-3' />
              }
              <input type='number' placeholder='enter mobile' className='py-2 border outline-none rounded-sm px-4 border-[#002f34] w-[80%] mb-3' />
              <input type='password' placeholder='enter password' className='py-2 border outline-none rounded-sm px-4 border-[#002f34] w-[80%]' />
              <button className='bg-[#002f34] text-[white] py-2 mt-6 w-[80%] rounded-sm cursor-pointer'>{register ? "Register" : "Login"}</button>

              <p className='underline w-[100%] mt-10 font-semibold text-sm text-center cursor-pointer' onClick={() => setRegister(true)}>New user ? want to register</p>
            </div>
            :

            <div style={{ transform: "translate(-50%, -50%)" }} className="flex py-3 px-3 items-center flex-col w-[30%] h-[85vh] bg-[white] mt-[24%] ml-[50%]">
              <AiOutlineClose className='text-3xl cursor-pointer self-end' onClick={() => setLogin(false)} />
              <img className='w-[130px]' src="https://statics.olx.in/external/base/img/loginEntryPointPost.webp" alt="" />
              <p className='w-[70%] mt-5 font-semibold text-center'>Help us become one of the safest places to buy and sell</p>
              <div className="flex py-2 w-[90%] border-2 rounded-md px-4 mt-5 font-semibold text-[#002f34] cursor-pointer border-[#002f34] items-center gap-[20px]" onClick={() => {setLoginwithMobile(true)
                setRegister(false)
              }}><AiOutlineMobile className='text-3xl' /> Continue with phone</div>
              <div className="flex py-2 w-[90%] border-2 rounded-md px-4 mt-5 cursor-pointer text-center font-semibold text-[grey] items-center gap-[20px]"><AiFillGoogleCircle className='text-3xl text-[red]' /> Continue with Google</div>
              <div className="flex mt-5 flex-col items-center justify-center">
                <span>OR</span>
                <p className='underline mt-3 font-semibold cursor-pointer' onClick={() => {setLoginwithEmail(true)
                  setRegister(false)
                }}>Login with email</p>
              </div>
              <div className="flex items-center justify-center w-[70%] flex-col text-[grey] text-xs text-center mt-auto">
                <p>All your personal details are safe with us.</p>
                <p className='mt-5'>If you continue, you are accepting OLX Terms and Conditions and Privacy Policy</p>
              </div>
            </div>
      }
    </div>
  )
}

export default Login
