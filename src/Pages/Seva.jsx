import React, { useState, useMemo } from 'react'
import SevaCard from '../Components/SevaCard'
import SEO from '../Components/SEO'
import SearchFilter from '../Components/SearchFilter'

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
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const sevaItems = useMemo(() => [
    { id: 1, title: 'Aarti Seva', image: arti_seva, desc: 'Aarti fool tulsi chandan trista seva poojan.', tag: 'Best Seller', category: 'daily' },
    { id: 2, title: 'Bundi Seva', image: bondi_seva, desc: 'Bundi prashad for shri bankey bihari ji.', tag: 'Popular', category: 'food' },
    { id: 3, title: 'Chandan Seva', image: chandan_seva, desc: 'Chandan seva for shri bankey bihari ji.', tag: 'Best Seller', category: 'daily' },
    { id: 4, title: 'Chapan Bhog', image: chapan_bhog, desc: '56 bhog prashadi for shri bankey bihari ji.', category: 'food' },
    { id: 5, title: 'Chaveni Bhog', image: chaveni_bhog, desc: 'Chaveni prasad for shri bankey bihari ji.', category: 'festival' },
    { id: 6, title: 'Deepak Seva', image: deepak_seva, desc: 'Deep daan poojan.', category: 'daily' },
    { id: 7, title: 'Deepdan Seva', image: deepdan_seva, desc: 'Deepdan seva to shri bankey bihari ji 11, 21, 51.', category: 'festival' },
    { id: 8, title: 'Deeran Poojan', image: deeran_poojan, desc: 'Shri Bankey bihari ji dheeri upasana.', category: 'daily' },
    { id: 9, title: 'Fool Tulsi Chandan Seva', image: fool_tulsi_chandan_seva, desc: 'Fool and chandan seva for shri bankey bihari ji.', tag: 'Special', category: 'daily' },
    { id: 10, title: 'Paratha Prashadi', image: paratha_prashadi, desc: 'Paratha prasad for shri bankey bihari ji.', category: 'food' },
    { id: 11, title: 'Raj Bhog', image: raj_bhog, desc: 'Poodi, sabji, dhai bada, kachodi, mithai,etc seva for shri bankay bihari ji.', tag: 'Special', category: 'food' },
    { id: 12, title: 'Saiya Seva', image: saiya_seva, desc: 'Saiya poojan for shri bankey bihari ji sain seva.', category: 'special' },
    { id: 13, title: 'Uthapyan Bhog', image: uthapyanbhog, desc: 'Pakodi, Dhaibada, Bida Parshadi for shri bankey bihari ji.', category: 'food' }
  ], []);

  const filters = [
    { label: 'All', value: 'all' },
    { label: '🙏Daily Seva', value: 'daily' },
    { label: '🍯Food Offerings', value: 'food' },
    { label: '✨Festival Seva', value: 'festival' },
    { label: '🌷Special Seva', value: 'special' }
  ];

  const filteredItems = useMemo(() => {
    return sevaItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [sevaItems, searchQuery, activeFilter]);

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

        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filters={filters}
        />

        <div className="flex justify-evenly mt-10 gap-10 flex-wrap bg-gray-200 py-10 rounded-lg">
          {filteredItems.map(item => (
            <SevaCard key={item.id} product={item} />
          ))}

        </div>
    </div>
    
    </>
  )
}

export default Seva



