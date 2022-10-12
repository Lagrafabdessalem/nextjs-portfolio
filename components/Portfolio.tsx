import Image from 'next/image'
import React from 'react'
import IMG1 from '../public/Assets/java.png'
const data = [
    {
        id:1,
        image:IMG1,
        title:'Todolist',
        github:'ll',
        demo:'f'
    },
    {
        id:2,
        image:IMG1,
        title:'Todolist',
        github:'ll',
        demo:'f'
    },
    {
        id:2,
        image:IMG1,
        title:'Todolist',
        github:'ll',
        demo:'f'
    },
    {
        id:2,
        image:IMG1,
        title:'Todolist',
        github:'ll',
        demo:'f'
    },
    {
        id:2,
        image:IMG1,
        title:'Todolist',
        github:'ll',
        demo:'f'
    },
    {
        id:2,
        image:IMG1,
        title:'Todolist',
        github:'ll',
        demo:'f'
    }
]

function Portfolio() {
  return (
    <div id='portfolio' className='w-full md:h-screen  '>
    <div className=' max-width-[1240px]  m-auto items-center text-center  gap-4 '>
    <h2 className='flex justify-center font-bold text-4xl'>Portfolio</h2>
    <p className='py-4 max-w-[20%] m-auto'>hhhhhhhhhhhhhhhhhhhhhhh</p>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-32">
        {data.map(({id,image,title,github,demo}) => {
            return(
                <div key={id} className='bg-[#0c1d33] gap-4 justify-center rounded-3xl p-6 border-solid  '>           
    <div className=''>
<Image src={image} width="300px" height="200px" className='rounded-3xl'/>
        </div>
      <div className=''>
      <h3 className='font-bold uppercase my-3 text-white '>{title}</h3>
      <a href='github.com' className='btn py-4 px-14 bg-[#163052] text-white m-1 rounded-3xl' target="_blank">{github}</a>
        <a href='github.com' className='btn-primary py-4 px-14 bg-[#163052] text-white m-1 rounded-3xl' target="_blank">{demo}</a>
      </div>
        </div>






            )
        })}
  
</div>
        </div>
        </div>
  )
}

export default Portfolio