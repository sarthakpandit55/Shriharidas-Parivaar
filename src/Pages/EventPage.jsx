import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";


// image imports
import laddu from "../assets/laddu.jpg";
import diwali from "../assets/diwali-1.jpg";
import hariyali_teej_1 from "../assets/hariyali-teej-1.jpg";
import hariyali_teej_2 from "../assets/hariyali-teej-2.jpg";
import hariyali_teej_3 from "../assets/hariyali-teej-3.jpg";
import hariyali_teej_4 from "../assets/hariyali-teej-4.jpg";
import hariyali_teej_5 from "../assets/hariyali-teej-5.jpg";
import hariyali_teej_6 from "../assets/hariyali-teej-6.jpg";
import hariyali_teej_7 from "../assets/hariyali-teej-7.jpg";
import hariyali_teej_8 from "../assets/hariyali-teej-8.jpg";
import fool_Bangla_1 from "../assets/fool-bangla-1.jpg";
import fool_Bangla_2 from "../assets/fool-bangla-2.jpg";
import fool_Bangla_3 from "../assets/fool-bangla-3.jpg";
import fool_Bangla_4 from "../assets/fool-bangla-4.jpg";
import fool_Bangla_5 from "../assets/fool-bangla-5.jpg";
import sharad_purnima_1 from "../assets/sharad-purnima-1.jpg";
import sharad_purnima_2 from "../assets/sharad-purnima-2.jpg";
import sharad_purnima_3 from "../assets/sharad-purnima-3.jpg";
import sharad_purnima_4 from "../assets/sharad-purnima-4.jpg";
import radha_astami_2 from "../assets/radha-astami-2.jpg";
import radha_astami_3 from "../assets/radha-astami-3.jpg";


// video imports
import teej_Video_1 from "../assets/hariyali-teej-video-1.mp4";
import radha_astami_Video_1 from "../assets/radha-astami-video-1.mp4";

export default function EventPage() {
  const { eventName } = useParams();
  const [selectedMedia, setSelectedMedia] = useState(null);

  const eventMedia = {
    diwali: [
      { type: "image", src: diwali },
      { type: "image", src: "/images/diwali2.jpg" },
      { type: "image", src: "/images/diwali3.jpg" },
    ],
    "janmashtami": [
      { type: "image", src: diwali },
      { type: "image", src: "/images/janmashtami2.jpg" },
      { type: "image", src: "/images/janmashtami3.jpg" },
    ],
    "hariyali-teej": [
      { type: "image", src: hariyali_teej_1 },
      { type: "image", src: hariyali_teej_2 },
      { type: "image", src: hariyali_teej_3 },
      { type: "image", src: hariyali_teej_4 },
      { type: "image", src: hariyali_teej_5 },
      { type: "image", src: hariyali_teej_6 },
      { type: "image", src: hariyali_teej_7 },
      { type: "image", src: hariyali_teej_8 },
      { type: "video", src: teej_Video_1 }, 
    ],
    "fool bangla": [
      { type: "image", src: fool_Bangla_1 },
      { type: "image", src: fool_Bangla_2 },
      { type: "image", src: fool_Bangla_3 },
      { type: "image", src: fool_Bangla_4 },
      { type: "image", src: fool_Bangla_5 },
    ],
    "sharad purnima": [
      { type: "image", src: sharad_purnima_1 },
      { type: "image", src: sharad_purnima_2 },
      { type: "image", src: sharad_purnima_3 },
      { type: "image", src: sharad_purnima_4 },
    ],
    "radha astami": [
      { type: "image", src: radha_astami_2 },
      { type: "image", src: radha_astami_3 },
      { type: "video", src: radha_astami_Video_1 }, 
    ],

  };

  const mediaList = eventMedia[eventName] || [];

  // 🧠 Function to trigger download (for image or video)
  const handleDownload = (url, type) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${eventName}.${type === "video" ? "mp4" : "jpg"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Link to="/gallery" className="inline-block mt-30 ml-8 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-all">
        ← Back to Gallery
      </Link>

      <section className={`container mx-auto p-6 text-center ${selectedMedia ? "blur-sm" : ""}`}>
        <h1 className="text-3xl font-bold mb-6 capitalize text-amber-600">
          <u>{eventName} Celebration</u>
        </h1>

        {mediaList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-16"> 
          {mediaList.map((item, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer" onClick={() => setSelectedMedia(item)}>
                {item.type === "image" ? (
                  <img src={item.src} alt={`${eventName} ${idx}`} className="w-full h-64 object-cover"/>) 
                  :
                  (<video src={item.src} className="w-full h-64 object-cover" muted loop autoPlay/>)
                }
              </div>
          ))}
          </div>) 
          : 
          (<p className="text-gray-500">No media available for this event yet.</p>)}
      </section>

      {/* 🔥 Popup Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setSelectedMedia(null)} > {/* close on outside click  */}
          <div className="relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>{/* prevent close on inside click */}
            {/* ❌ Close Button */}
            <button className="absolute top-2 right-2 text-white text-2xl bg-black/50 px-3 py-1 rounded-full hover:bg-black z-4" onClick={() => setSelectedMedia(null)}>
              ✕
            </button>

            {/* 🖼 Image or 🎥 Video */}
            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt="enlarged" className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-lg mb-4"/>) 
              : 
              (
              <video src={selectedMedia.src} controls autoPlay className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-lg mb-4"/>
            )}

            {/* ⬇️ Download Button */}
            <button onClick={() => handleDownload(selectedMedia.src, selectedMedia.type) } className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-all">
              ⬇ Download {selectedMedia.type === "video" ? "Video" : "Image"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
