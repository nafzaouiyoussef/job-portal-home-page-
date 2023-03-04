import React from 'react'
import simple from '../../assests/simple.png'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px
        block'>The value that holds us true and to account</h1> 
        <div className='grid gap[10rem] grid-cols-3 items-center'>

          <div className='singleGrid rounded-[18px] hover:bg-[#eeedf7] p-[1.5rem]'>
            <div className='flex items-center gap-3'>
              <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-
              [40px] w-[40px] flex items-center justify-center'>
                 <img src={simple} alt="" className='w-[70%]' />
              </div>

              <span className='font-semibold text-textColor text-[18px]'>
                Simplicity

              </span>

            </div>
            <p className='text-[13px] textColor opacity-[.7] py-[1rem]
            font-semibold'>
              Things Made beautiful simple are the heart 
              of everything we do.
            </p>

          </div>
          
          <div className='singleGrid rounded-[18px] hover:bg-[#eeedf7] p-[1.5rem]'>
            <div className='flex items-center gap-3'>
              <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-
              [40px] w-[40px] flex items-center justify-center'>
                 <img src={simple} alt="" className='w-[70%]' />
              </div>

              <span className='font-semibold text-textColor text-[18px]'>
                Simplicity

              </span>

            </div>
            <p className='text-[13px] textColor opacity-[.7] py-[1rem]
            font-semibold'>
              Things Made beautiful simple are the heart 
              of everything we do.
            </p>

          </div>

          <div className='singleGrid rounded-[18px] hover:bg-[#eeedf7] p-[1.5rem]'>
            <div className='flex items-center gap-3'>
              <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-
              [40px] w-[40px] flex items-center justify-center'>
                 <img src={simple} alt="" className='w-[70%]' />
              </div>

              <span className='font-semibold text-textColor text-[18px]'>
                Simplicity

              </span>

            </div>
            <p className='text-[13px] textColor opacity-[.7] py-[1rem]
            font-semibold'>
              Things Made beautiful simple are the heart 
              of everything we do.
            </p>

          </div>


        </div>

    </div>
  )
}

export default Value