import React from 'react'
import { data } from '../Data/projects'



const ProjectItem = ({name,desc,src,img}) => {

  return <div className='flex row j-c-b py-1'>
        <div  className='f-1 w-30 p-1 text-secondary'>
            <h1>{name}</h1>
            <p>{desc}</p>
            <a href={src}
               className="hero_call_to_action text-primary my-1"
            >See Live</a>
        </div>

        <div  className='f-1 flex col a-c-d p-1 '>

           <img 
            src={img}
            alt="image"
            className='project-img '
          />
            
        </div>
  </div>
}

export default function Projects() {
  console.log("Data -> ",data)
  return (
    <div className='flex col a-c-d p-1'>

      <h1 className='heading text-secondary'>Projects</h1>

      <div className='flex col'>
        {
          data.map((e,i) => 
              <ProjectItem 
                name={e.name}
                src={e.src}
                desc={e.desc}
                img={e.img}
              />
          )
        }

        <h1 className='subheading a-c-d text-secondary' style={{
          textAlign:"right",
          
        }}>
          & Many <span className='text-primary'>More</span> 
        </h1>
        

      </div>

    </div>
  )
}
