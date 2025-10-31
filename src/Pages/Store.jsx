import React, { useState, useMemo } from 'react'
import Card from '../Components/StoreCard'
import SEO from '../Components/SEO'
import SearchFilter from '../Components/SearchFilter'


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
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const storeItems = useMemo(() => [
    { id: 1, title: 'Poshak (Brown)', price: 499, image: poshak_brown, desc: 'Beautiful traditional poshak in brown color. All sizes available from 2 to 11.', code: 'design 1A Brown', category: 'poshak' },
    { id: 2, title: 'Poshak (Green)', price: 499, image: poshak_green, desc: 'Elegant green poshak. All sizes available from 2 to 11.', code: 'design 2A Green', category: 'poshak' },
    { id: 3, title: 'Poshak (Pink)', price: 499, image: poshak_pink, desc: 'Delicate pink poshak. All sizes available from 2 to 11.', code: 'design 3A Pink', category: 'poshak' },
    { id: 4, title: 'Poshak (Red)', price: 499, image: poshak_red, desc: 'Vibrant red poshak. All sizes available from 2 to 11.', code: 'design 2A Red', category: 'poshak' },
    { id: 5, title: 'Tulsi Jap Mala', price: 499, image: tulsi_mala, desc: 'Traditional 108 beeds tulsi prayer mala.', tag: 'Best Seller', category: 'mala' },
    { id: 6, title: 'Tulsi Kanthi Mala', price: 499, image: tulsi_kanthi_mala, desc: 'Sacred tulsi kanthi mala for daily wear.', category: 'mala' },
    { id: 7, title: 'Tulsi Kanthi Mala With Radhey', price: 499, image: tulsi_mala_radha, desc: 'Tulsi mala with Radha medallion.', tag: 'Best Seller', category: 'mala' },
    { id: 8, title: 'Tulsi Kanthi Mala With Radha Krishna', price: 499, image: tulsi_mala_radhakrishn, desc: 'Divine Radha Krishna tulsi mala.', category: 'mala' },
    { id: 9, title: 'Tulsi Kanthi Mala With Radha Krishna', price: 499, image: tulsi_mala_radhakrishn2, desc: 'Special Radha Krishna tulsi mala design.', category: 'mala' },
    { id: 10, title: 'Tulsi Kanthi Mala With Shri Haridas', price: 499, image: tulsi_mala_shriharidas, desc: 'Blessed Shri Haridas tulsi mala.', tag: 'Best Seller', category: 'mala' },
    { id: 11, title: 'Tulsi Kanthi Mala With Shri Radha', price: 499, image: tulsi_mala_shriradha, desc: 'Sacred Shri Radha tulsi mala.', category: 'mala' },
    { id: 12, title: 'Tulsi Kanthi Mala With Shri Radha', price: 499, image: tulsi_mala_shriradha2, desc: 'Special design Shri Radha tulsi mala.', category: 'mala' },
    { id: 13, title: 'Pendant With Bihariji', price: 499, image: pendant_bihariji, desc: 'Sacred Bihariji pendant.', category: 'pendant' },
    { id: 14, title: 'Pendant With Krishna', price: 499, image: pendant_krishn, desc: 'Beautiful Krishna pendant.', category: 'pendant' },
    { id: 15, title: 'Pendant With Written Shri Krishna', price: 499, image: pendant_krishn2, desc: 'Pendant with Shri Krishna inscription.', category: 'pendant' },
    { id: 16, title: 'Pendant With Radha Krishna', price: 499, image: pendant_radhakrishn, desc: 'Divine Radha Krishna pendant.', category: 'pendant' },
    { id: 17, title: 'Pendant With Radha Krishna (Silver)', price: 499, image: pendant_radhakrishn_silver, desc: 'Silver finish Radha Krishna pendant.', category: 'pendant' },
    { id: 18, title: 'Pendant With Shri Radha', price: 499, image: pendant_shriradha, desc: 'Sacred Shri Radha pendant.', category: 'pendant' }
  ], []);

  const filters = [
    { label: 'All Items', value: 'all' },
    { label: '🌼Poshak', value: 'poshak' },
    { label: '📿Tulsi Mala', value: 'mala' },
    { label: '🌸Pendants', value: 'pendant' }
  ];

  const filteredItems = useMemo(() => {
    return storeItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [storeItems, searchQuery, activeFilter]);

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

      <SearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        filters={filters}
      />
    
      <div className="flex justify-center mt-10 gap-10 flex-wrap bg-gray-200 py-10 rounded-lg">
        {filteredItems.map(item => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Store
