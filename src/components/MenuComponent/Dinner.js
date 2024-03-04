import React from 'react'
import ImageGrid from './ImageGrid'

const data = [
  {
    "img":"/menu /19.png",
    "name": "Magnum Tiste",
    "Desc":" Lorem,deren,filde,nerada",
    "price":"$5.95",
  },
  {
    "img":"/menu /20.png",
    "name": "Aut Luia",
    "Desc":" Lorem,deren,filde,nerada",
    "price":"$5.95",
  },
  {
    "img":"/menu /21.png",
    "name": "Est Elgendi",
    "Desc":" Lorem,deren,filde,nerada",
    "price":"$5.95",
  },
  {
    "img":"/menu /22.png",
    "name": "Cumque Nostrud",
    "Desc":"Lorem ipsum dolor sit amet" ,
    "price":"$7.95"
  },
  {
    "img":"/menu /23.png",
    "name": "Ullamco Labore et dolore", 
    "Desc":"Ipsum dolor sit amet",
    "price":"$6.95",
  },
  {
    "img":"/menu /24.png",
    "name": "Ullamco Labore et dolore", 
    "Desc":"Ipsum dolor sit amet",
    "price":"$6.95",
  }
]


const Dinner = () => {
  return (
    <div className='h-auto my-[10rem]'><ImageGrid items={data}/> </div>
  )
}

export default Dinner