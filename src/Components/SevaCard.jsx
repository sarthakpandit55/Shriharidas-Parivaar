import React from 'react';

export default function SevaCard({ product, onAdd }) {
  const { title, image, desc } = product || {};

  return (
    <article className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-3xl">
      
      {/* Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover"/>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-lg truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-3">{desc}</p>

        {/* Full-width Buy Button */}
        <div className="mt-4">
          <button onClick={() => onAdd && onAdd(product)} className="w-full flex items-center justify-center gap-2 bg-amber-500 text-white py-2 rounded-xl font-semibold shadow hover:bg-amber-600 transition-colors">
            Incury Seva
          </button>
        </div>

        {/* small meta */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          {/* <span>Free shipping over ₹999</span>
          <span>•</span>
          <span>30 days returns</span> */}
        </div>
      </div>
    </article>
  );
}
