import React from 'react'
import SevaCard from '../Components/SevaCard'
import SEO from '../Components/SEO'

// imports
import arti_seva from '../assets/seva/arti_seva.webp'
import bondi_seva from '../assets/seva/bondi_seva.webp'
import chandan_seva from '../assets/seva/chandan_seva.webp'
import chapan_bhog from '../assets/seva/chapan_bhog.webp'
import chaveni_bhog from '../assets/seva/chaveni_bhog.webp'
import deepak_seva from '../assets/seva/deepak_seva.webp'
import deepdan_seva from '../assets/seva/deepdan_seva.webp'
import deeran_poojan from '../assets/seva/deeran_poojan.webp'
import fool_tulsi_chandan_seva from '../assets/seva/fool_tulsi_chandan_seva.webp'
import paratha_prashadi from '../assets/seva/paratha_parshadi.webp'
import raj_bhog from '../assets/seva/raj_bhog.webp'
import saiya_seva from '../assets/seva/saiya_seva.webp'
import uthapyanbhog from '../assets/seva/uthapyanbhog.webp'

function Seva() {
  return (
    <>

    {/* meta tag */}

    <SEO
    title="Seva"
    description="Participate in Seva at Shri Haridas Parivaar and explore handcrafted prayer malas and devotional items to support spiritual activities."
    keywords="Shri Haridas Parivaar Seva, Temple Seva, Handcrafted Prayer Mala, Devotional Items, Spiritual Service, Vrindavan Temple Seva"
    />



    {/* seva */}
    <div className="container mx-auto my-30 text-center flex flex-col">
        <h1 className='text-4xl font-semibold text-amber-600'><u>Seva</u> / <u>सेवाएं</u></h1>

        <div className="flex justify-evenly mt-10 gap-10 flex-wrap bg-gray-200 py-10 rounded-lg">
            <SevaCard product={{ id: 1, title: 'Aarti Seva', image: arti_seva, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Bundi Seva', image: bondi_seva, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Chandan Seva', image: chandan_seva, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Chapan Bhog', image: chapan_bhog, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Chaveni Bhog', image: chaveni_bhog, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Deepak Seva', image: deepak_seva, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Deepdan Seva', image: deepdan_seva, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Deeran Poojan', image: deeran_poojan, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Fool Tulsi Chandan Seva', image: fool_tulsi_chandan_seva, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Paratha Prashadi', image: paratha_prashadi, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Raj Bhog', image: raj_bhog, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 1, title: 'Saiya Seva', image: saiya_seva, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>

            <SevaCard product={{ id: 2, title: 'Uthapyan Bhog', image: uthapyanbhog, desc: 'Beautiful prayer mala made from tulsi beads.', tag: 'Best Seller'}}/>
        </div>
    </div>
    
    </>
  )
}

export default Seva



