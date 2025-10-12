import React from "react";
import hariyali_teej_1 from "../assets/hariyali-teej-1.jpg";
import diwali from "../assets/BihariJi4.jpg";
import janmashtami from "../assets/BihariJi3.jpg";
import { Link } from "react-router-dom";
import fool_bangla_1 from "../assets/fool-bangla-1.jpg";
import sharad_purnima_1 from "../assets/sharad-purnima-1.jpg";
import radha_astami_2 from "../assets/radha-astami-2.jpg";

export default function Gallery() {
  const galleryItems = [
  { name: "Hariyali Teej", image: hariyali_teej_1, link: "/gallery/hariyali-teej" },
  { name: "Janmashtami", image: janmashtami, link: "/gallery/janmashtami" },
  { name: "Diwali", image: diwali, link: "/gallery/diwali" },
  { name: "Fool Bangla", image: fool_bangla_1, link: "/gallery/fool bangla" },
  { name: "Sharad Purnima", image: sharad_purnima_1, link: "/gallery/sharad purnima" },
  { name: "Radha Astami", image: radha_astami_2, link: "/gallery/radha astami" },
];


  return (
    <div className="container mx-auto my-32">
      <h1 className="text-4xl font-semibold text-center text-amber-600">
        <u>Gallery</u>
      </h1>

      {/* all image container */}
      <div className="flex flex-wrap justify-around items-center text-center mt-10">
        {galleryItems.map((item, i) => 
        (
          <Link key={i} to={item.link} className="rounded-3xl m-4 bg-amber-500 p-3 w-[380px] transition-transform hover:-translate-y-1 font-semibold hover:shadow-xl hover:shadow-amber-400">
            {/* Image container */}
            <div className="relative group w-full h-[250px] rounded-3xl overflow-hidden"> <img src={item.image} alt={item.name}className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:blur-[3px]"/>
              {/* Overlay name on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-2xl font-semibold text-white bg-black/50 px-4 py-2 rounded-lg">{item.name}</p>
              </div>
            </div>
            <p className="pt-4 text-xl font-semibold">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
