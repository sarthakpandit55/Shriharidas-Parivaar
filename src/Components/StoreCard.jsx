import React from 'react';

export default function Card({ product, onAdd }) {
  const { title, price, image, desc, tag } = product || {};

  return (
    <article className=" bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-3xl ">
      {/* Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover"/>

        {tag && (
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {tag}
          </span>
        )}

      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-lg truncate">{title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-3">{desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-extrabold text-gray-900">₹{price}</p>
            <p className="text-xs text-gray-500">Inclusive of all taxes</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onAdd && onAdd(product)}
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-xl font-semibold shadow hover:bg-amber-600 transition-colors"
            >
              <svg xmlns="http://www.w3.or g/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h12l-2-7M16 21a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              Order Now
            </button>
          </div>
        </div>

        {/* small meta */}
        {/* <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>Free shipping over ₹999</span>
          <span>•</span>
          <span>30 days returns</span>
        </div> */}
      </div>
    </article>
  );
}
