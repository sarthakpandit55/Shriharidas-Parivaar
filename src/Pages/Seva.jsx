import React from 'react'
import SevaCard from '../Components/SevaCard'
import peda from '../assets/logo.jpg'
import uthapyanbhog from '../assets/uthapyanbhog.jpg'

function Seva() {
  return (
    <>
    <div className="container mx-auto my-30 text-center flex flex-col">
        <h1 className='text-4xl font-semibold text-amber-600'><u>Seva</u></h1>

        <div className="flex justify-evenly mt-10 gap-10 flex-wrap bg-gray-200 py-10 rounded-lg">
            <SevaCard product={{ id: 1, title: 'Handmade Mala', image: peda, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 2, title: 'Handmade Mala', image: uthapyanbhog, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 3, title: 'Handmade Mala', image: peda, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>
        </div>
    </div>
    
    </>
  )
}

export default Seva



