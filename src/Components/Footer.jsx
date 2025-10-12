import React from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa6";
import laddu from "../assets/laddu1.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-white flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 px-5 sm:px-20 w-full gap-10">
        
        {/* First */}
        <div className="flex flex-col gap-10 w-full lg:w-1/3">

          {/* card1 */}
          <div className="flex flex-col sm:flex-row justify-evenly items-center bg-gray-800 p-6 rounded-xl shadow-md gap-6">
            {/* Image */}
            <div className="flex flex-col justify-center items-center"><img src={laddu} alt="Tushar Bihari Goswami" className="object-cover rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 shadow"/>
              <p className="text-sm font-semibold pt-3">Tushar Bihari Goswami <br /> (Laddu Bihari Goswami)</p>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3 text-sm mt-4 sm:mt-0">
              <a href="https://wa.me/917088122009?text=Hello%20there%2C%20I%20found%20your%20number%20on%20the%20website!" target='blank'>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-green-500" />
                <span className="font-medium">+91 7088122009</span>
              </div>
              </a>
              <a href="https://www.instagram.com/pujarikunalgoswamii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>
              <div className="flex items-center gap-3">
                <FaInstagram className="w-5 h-5 text-pink-500" />
                <span className="font-medium">pujarikunalgoswamii</span>
              </div>
              </a>
              <a href="https://www.youtube.com/@Pujarikunalgoswami" target='blank'>
              <div className="flex items-center gap-3">
                <FaYoutube className="w-5 h-5 text-red-500" />
                <span className="font-medium">pujarikunalgoswamii</span>
              </div>
              </a>
            </div>
          </div>

          {/* card2 */}
          <div className="flex flex-col sm:flex-row justify-evenly items-center bg-gray-800 p-6 rounded-xl shadow-md gap-6">
            {/* Image */}
            <div className="flex flex-col justify-center items-center">
              <img src={laddu} alt="Tushar Bihari Goswami" className="object-cover rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 shadow"/>
              <p className="text-sm font-semibold pt-3">Tushar Bihari Goswami</p>
            </div>
            {/* Social links */}
            <div className="flex flex-col gap-3 text-sm mt-4 sm:mt-0">
              <a href="https://wa.me/918630362454?text=Hello%20there%2C%20I%20found%20your%20number%20on%20the%20website!" target='blank'>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-green-500" />
                <span className="font-medium">+91 8630362454</span>
              </div>
              </a>
              <a href="https://www.instagram.com/shriharidas_parivaar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>
              <div className="flex items-center gap-3">
                <FaInstagram className="w-5 h-5 text-pink-500" />
                <span className="font-medium">pujarikunalgoswamii</span>
              </div>
              </a>
              <a href="https://www.youtube.com/@laddu_bihariji_pujari">
              <div className="flex items-center gap-3">
                <FaYoutube className="w-5 h-5 text-red-500" />
                <span className="font-medium">pujarikunalgoswamii</span>
              </div>
              </a>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="lg:w-1/4">
          <h1 className="text-2xl mb-5 font-semibold">Related Links</h1>
          <div className="flex flex-col gap-3">
            <Link to="/"><p className="cursor-pointer hover:text-amber-500 transition">Home</p></Link>
            <Link to="/about"><p className="cursor-pointer hover:text-amber-500 transition">About</p></Link>
            <Link to="/seva"><p className="cursor-pointer hover:text-amber-500 transition">Seva</p></Link>
            <Link to="/store"><p className="cursor-pointer hover:text-amber-500 transition">Store</p></Link>
            <Link to="/contact"><p className="cursor-pointer hover:text-amber-500 transition">Contact Us</p></Link>
            <Link to="/gallery"><p className="cursor-pointer hover:text-amber-500 transition">Gallery</p></Link>
          </div>
        </div>

        {/* Third */}
        <div className="lg:w-1/3">
          <h1 className="text-2xl mb-5 font-semibold">Reach Us :</h1>
          <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-sm">
            <form className="flex flex-col">
              <label className="mb-1 font-medium">Name</label>
              <input type="text" placeholder="name" className="w-full border-2 border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"/>

              <label className="mb-1 font-medium">Mobile Number</label>
              <input type="text" placeholder="mobile number" className="w-full border-2 border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"/>

              <label className="mb-1 font-medium">Email</label>
              <input type="email" placeholder="email" className="w-full border-2 border-gray-300 p-2 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-amber-500"/>

              <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg py-2 transition">Send</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="w-full text-center text-sm text-gray-400 bg-gray-900 py-3 border-t border-gray-800">
        This website is created by <Link to="https://sarthak-pandit-portfolio.vercel.app/" target="blank"><span className="text-white">Sarthak Pandit</span></Link>
      </p>
    </>
  );
}

export default Footer;
