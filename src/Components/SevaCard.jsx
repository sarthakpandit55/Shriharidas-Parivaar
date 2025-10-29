import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function SevaCard({ product, onAdd }) {
  const { title, image, desc } = product || {};


  const message = encodeURIComponent(
    `Hello! I want to inquiry about this seva:\n\n🙏 *${title}*\n\nPlease provide more details.`
  );

  const whatsappLink = `https://wa.me/918630362454?text=${message}`;

  

  return (
    <article className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-3xl w-3/4 md:w-2/5 lg:w-1/4">
      
      {/* Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <LazyLoadImage
                  src={image}
                  alt={title}
                  effect="blur"
                  height="100%"
                  width="100%"
                  className="w-full h-full object-cover"
                />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-lg truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-3">{desc}</p>

        {/* Full-width Buy Button */}
        <div className="mt-4">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-amber-500 text-white px-4 py-2 rounded-xl font-semibold shadow hover:bg-amber-600 transition-colors"
          >
            Inquiry Seva
          </a>
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
