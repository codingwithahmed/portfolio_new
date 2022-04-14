import React from 'react'





export default function About() {
  return (
    <div className='flex col a-c-d about_container text-white p-1 '>
        
       <h1 className='heading text-white'> About </h1>
        
        <div className='flex col j-c-e   a-c-d '>

                <div>
                    <img 
                    className='pic'
                    src='https://i.ibb.co/fdLSVMZ/Whats-App-Image-2022-04-12-at-6-45-08-PM.jpg'
                    />
                </div>

                <div className='flex col w-30 f-1 my-1'>
                    <p className='desc'>
                        I AM SELF-TAUGHT DEVELOPER WITH 3+ YEARS OF EXPERIENCE.</p>
                    <button className='about_call_to_action'>View Profile</button>
                </div>
        </div>


    </div>
  )
}
