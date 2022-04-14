import React from 'react'
import '../style/hero.css'
import TypeWriterEffect from 'react-typewriter-effect';

export default function Hero() {
  return (
    <div className='hero_container flex col j-c-b a-c'>
        <h1 className='heading text-secondary'>
        Hi, my name is <span className='text-primary'>Ahmed Farooq</span>
        <span className='hide'><TypeWriterEffect
        textStyle={{
            fontSize:'5rem'
        }}
       startDelay={0}
       cursorColor="#3F3D56"
       multiText={[
        'I\'m a Shopify Developer',
        'I\'m a React Developer',
        'I\'m a Next Developer',
        'I\'m a Node Developer',
        'I\'m a Go Developer',
        'I\'m a Full-Stack Developer',
        'I\'m a Front-end Developer',
        'I\'m a Back-end Developer',
        'I\'m a React Developer'
       ]}
       multiTextDelay={1000}
       typeSpeed={30}
     />
     </span>

     <span className='hide_d' ><TypeWriterEffect
         textStyle={{
            fontSize: '2rem',
            textAlign:"center"
          }}
       startDelay={0}
       cursorColor="#3F3D56"
       multiText={[
         'I\'m a Shopify Developer',
         'I\'m a React Developer',
         'I\'m a Next Developer',
         'I\'m a Node Developer',
         'I\'m a Go Developer',
         'I\'m a Full-Stack Developer',
         'I\'m a Front-end Developer',
         'I\'m a Back-end Developer',
         'I\'m a React Developer'
        
       ]}
       multiTextDelay={1000}
       typeSpeed={30}
     />
     </span>

        </h1>

     

        
            <a href='#about' className='hero_call_to_action text-primary'>Learn more</a>
    </div>
  )
}
