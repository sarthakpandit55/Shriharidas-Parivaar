import React from "react";

export default function Card({ product, onAdd }) {
  const { title, price, image, desc, tag, code } = product || {};

  // create encoded WhatsApp message
  const message = encodeURIComponent(
    `Hello! I want to order this product:\n\n🛍️ *${title}*\n📦 Code: ${code}\n\nPlease provide more details.`
  );

  const whatsappLink = `https://wa.me/918630362454?text=${message}`;

  return (
    <article className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-3xl w-3/4 md:w-2/5 lg:w-1/4">
      {/* Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />

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

        <div className="mt-4 flex items-center justify-between text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-amber-500 text-white px-4 py-2 rounded-xl font-semibold shadow hover:bg-amber-600 transition-colors"
          >
            Order Now
          </a>
        </div>

        {/* small meta */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>
            * You can select size or ask queries when redirected to WhatsApp.
          </span>
        </div>
      </div>
    </article>
  );
}
