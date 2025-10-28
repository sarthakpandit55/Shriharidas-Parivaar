import React from 'react'

import Card from '../Components/StoreCard'
import SEO from '../Components/SEO'


// poshak imports
import poshak_green from '../assets/store/poshak(green).webp'
import poshak_red from '../assets/store/poshak(red).webp'
import poshak_pink from '../assets/store/poshak(pink).webp'
import poshak_brown from '../assets/store/poshak(brown).webp'

// tulsi mala imports

import tulsi_mala from '../assets/store/tulsi_mala.webp'
import tulsi_kanthi_mala from '../assets/store/tulsi_kanthi_mala.webp'
import tulsi_mala_radha from '../assets/store/tulsi_mala_radha.webp'
import tulsi_mala_radhakrishn from '../assets/store/tulsi_mala_radhakrishn.webp'
import tulsi_mala_radhakrishn2 from '../assets/store/tulsi_mala_radhakrishn2.webp'
import tulsi_mala_shriharidas from '../assets/store/tulsi_mala_shriharidas.webp'
import tulsi_mala_shriradha from '../assets/store/tulsi_mala_shriradha.webp'
import tulsi_mala_shriradha2 from '../assets/store/tulsi_mala_shriradha2.webp'


// pendant imports
import pendant_bihariji from '../assets/store/pendant_bihariji.webp'
import pendant_krishn from '../assets/store/pendant_krishn.webp'
import pendant_krishn2 from '../assets/store/pendant_krishn2.webp'
import pendant_radhakrishn from '../assets/store/pendant_radhakrishn.webp'
import pendant_radhakrishn_silver from '../assets/store/pendant_radhakrishn(silver).webp'
import pendant_shriradha from '../assets/store/pendant_shriradha.webp'

function Store() {
  return (
    <>

    {/* Meta tags */}
    <SEO
    title="Store"
    description="Explore the Shri Haridas Parivaar store offering handcrafted devotional items, tulsi prayer malas, spiritual gifts, and sacred products for devotees."
    keywords="Shri Haridas Ji Store, Handcrafted Prayer Mala, Devotional Items Online, Spiritual Gifts, Tulsi Beads Mala, Vrindavan Temple Products, Religious Offerings, Shri Banke Bihari Temple Store, Spiritual Shopping"
    />



    {/* store */}

    <div className="container mx-auto my-30 text-center flex flex-col">
            <h1 className='text-4xl font-semibold text-amber-600'><u>Store</u> / <u>स्टोर</u></h1>
    
            <div className="flex justify-center mt-10 gap-10 flex-wrap bg-gray-200 py-10 rounded-lg">
                
                <Card product={{ id: 1, title: 'Poshak (Brown)', price: 499, image: poshak_brown, desc: 'All size and colours are available from 2 to 11.', code: 'design 1A Brown'}}/>
    
                <Card product={{ id: 1, title: 'Poshak (Green)', price: 499, image: poshak_green, desc: 'All size and colours are available from 2 to 11.', code: 'design 2A Green'}}/>
    
                <Card product={{ id: 1, title: 'Poshak (Pink)', price: 499, image: poshak_pink, desc: 'All size and colours are available from 2 to 11.', code: 'design 3A Pink'}}/>
    
                <Card product={{ id: 1, title: 'Poshak (Red)', price: 499, image: poshak_red, desc: 'All size and colours are available from 2 to 11.', code: 'design 2A Red'}}/>
    
                <Card product={{ id: 1, title: 'Tulsi Mala', price: 499, image: tulsi_mala, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>
    
                <Card product={{ id: 1, title: 'Tulsi Kanthi Mala', price: 499, image: tulsi_kanthi_mala, desc: 'Beautiful prayer mala made from tulsi beads.', }}/>
    
                <Card
                product={{ id: 1, title: 'Tulsi Mala With Radhey', price: 499, image: tulsi_mala_radha, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>
                
                <Card
                product={{ id: 1, title: 'Tulsi Mala With Radha Krishna', price: 499, image: tulsi_mala_radhakrishn, desc: 'Beautiful prayer mala made from tulsi beads.', }}/>
                
                <Card
                product={{ id: 1, title: 'Tulsi Mala With Radha Krishna', price: 499, image: tulsi_mala_radhakrishn2, desc: 'Beautiful prayer mala made from tulsi beads.',}}/>
                
                <Card
                product={{ id: 1, title: 'Tulsi Mala With Shri Haridas', price: 499, image: tulsi_mala_shriharidas, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>
                
                <Card
                product={{ id: 1, title: 'Tulsi Mala With Shri Radha ', price: 499, image: tulsi_mala_shriradha, desc: 'Beautiful prayer mala made from tulsi beads.',}}/>
                
                <Card
                product={{ id: 1, title: 'Tulsi Mala With Shri Radha ', price: 499, image: tulsi_mala_shriradha2, desc: 'Beautiful prayer mala made from tulsi beads.', }}/>
                
                <Card
                product={{ id: 1, title: 'Pendant With Bihariji', price: 499, image: pendant_bihariji, desc: 'Beautiful prayer mala made from tulsi beads.', }}/>
                
                <Card
                product={{ id: 1, title: 'Pendant With Krishna ', price: 499, image: pendant_krishn, desc: 'Beautiful prayer mala made from tulsi beads.', }}/>
                
                <Card
                product={{ id: 1, title: 'Pendant With Writen Shri Krishna ', price: 499, image: pendant_krishn2, desc: 'Beautiful prayer mala made from tulsi beads.', }}/>
                
                <Card
                product={{ id: 1, title: 'Pendant With Radha Krishna ', price: 499, image: pendant_radhakrishn, desc: 'Beautiful prayer mala made from tulsi beads.', }}/>
                
                <Card
                product={{ id: 1, title: 'Pendant With Radha Krishna ', price: 499, image: pendant_radhakrishn_silver, desc: 'Beautiful prayer mala made from tulsi beads.', }}/>
                
                <Card
                product={{ id: 1, title: 'Pendant With Shri Radha ', price: 499, image: pendant_shriradha, desc: 'Beautiful prayer mala made from tulsi beads.', }}/>

            </div>
        </div>
    </>
  )
}

export default Store
