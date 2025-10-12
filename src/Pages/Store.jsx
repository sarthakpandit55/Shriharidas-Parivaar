import React from 'react'

import Card from '../Components/StoreCard'
import peda from '../Assets/logo.jpg'

function Store() {
  return (
    <>
    <div className="container mx-auto my-30 text-center flex flex-col">
            <h1 className='text-4xl font-semibold text-amber-600'><u>Store</u></h1>
    
            <div className="flex justify-center mt-10 gap-10 flex-wrap bg-gray-200 py-10 rounded-lg">
                
                <Card product={{ id: 1, title: 'Handmade Mala', price: 499, image: peda, desc: 'Beautiful prayer mala made from tulsi beads.'}}/>
    
                <Card product={{ id: 1, title: 'Handmade Mala', price: 499, image: peda, desc: 'Beautiful prayer mala made from tulsi beads.'}}/>
    
                <Card product={{ id: 1, title: 'Handmade Mala', price: 499, image: peda, desc: 'Beautiful prayer mala made from tulsi beads.'}}/>
    
                <Card product={{ id: 1, title: 'Handmade Mala', price: 499, image: peda, desc: 'Beautiful prayer mala made from tulsi beads.'}}/>
    
                <Card product={{ id: 1, title: 'Handmade Mala', price: 499, image: peda, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>
    
                <Card product={{ id: 1, title: 'Handmade Mala', price: 499, image: peda, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>
    
                <Card
                product={{ id: 1, title: 'Handmade Mala', price: 499, image: peda, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>
            </div>
        </div>
    </>
  )
}

export default Store
