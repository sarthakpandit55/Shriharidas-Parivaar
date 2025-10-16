import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from 'react-icons/fa6';
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import laddu from "../assets/laddu.jpg";
import himanshu from "../assets/himanshu.jpg";


function Contact() {
  return (
    <>

    {/* Contact  */}
    <div className='container mx-auto my-5 p-5 mt-22'>
        <h1 className='text-3xl font-bold bg-amber-600 p-4 w-full rounded-xl'>Contact Us / संपर्क करें :-</h1>
        
        {/* card 1 */}
        <div className="flex flex-col sm:flex-row justify-evenly items-center p-6 gap-6 my-20">
          {/* Image */}
          <div className="flex flex-col justify-center items-center">
            <img src={himanshu} alt="Tushar Bihari Goswami" className="object-cover rounded-full w-54 h-54 md:w-78 md:h-78 lg:w-92 lg:h-92 shadow"/>
          <p className="text-xl font-semibold pt-3 text-center">Kunal Bihari Goswami <br /> ( Himanshu Bihari Goswami )</p>
          </div>
          {/* Social links */}
          <div className="flex flex-col gap-10 text-xl mt-4 sm:mt-0">
            <a href="https://wa.me/917088122009?text=Hello%20there%2C%20I%20found%20your%20number%20on%20the%20website!" target='blank'>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="lg:w-15 lg:h-15 h-10 w-10 text-green-500" />
              <span className="font-semibold lg:text-3xl text-md">+91 7088122009</span>
            </div>
            </a>
            <a href="https://www.instagram.com/pujarikunalgoswamii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>
            <div className="flex items-center gap-3">
              <FaInstagram className="lg:w-15 lg:h-15 h-10 w-10 text-pink-500" />
              <span className="font-semibold lg:text-3xl text-md">pujarikunalgoswamii</span>
            </div>
            </a>
            <a href="https://www.youtube.com/@Pujarikunalgoswami" target='blank'>
            <div className="flex items-center gap-3">
              <FaYoutube className="lg:w-15 lg:h-15 h-10 w-10 text-red-500" />
              <span className="font-semibold lg:text-3xl text-md">pujarikunalgoswamii</span>
            </div>
            </a>
          </div>
        </div>

        <div className="p-1 w-full bg-black rounded-4xl"></div>

        {/* card 2 */}
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-6 my-20">
          {/* Image */}
          <div className="flex flex-col justify-center items-center"><img src={laddu} alt="Tushar Bihari Goswami" className="object-cover rounded-full w-54 h-54 md:w-78 md:h-78 lg:w-92 lg:h-92 shadow"/>
          <p className="text-xl font-semibold pt-3 text-center">Tushar Bihari Goswami <br /> ( Laddu Bihari Goswami )</p>
          </div>
          {/* Social links */}
          <div className="flex flex-col gap-10 text-xl mt-4 sm:mt-0">
            <a href="https://wa.me/918630362454?text=Hello%20there%2C%20I%20found%20your%20number%20on%20the%20website!" target='blank'>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="lg:w-15 lg:h-15 h-10 w-10 text-green-500" />
              <span className="font-semibold lg:text-3xl text-md">+91 8630362454</span>
            </div>
            </a>
            <a href="https://www.instagram.com/shriharidas_parivaar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>
            <div className="flex items-center gap-3">
              <FaInstagram className="lg:w-15 lg:h-15 h-10 w-10 text-pink-500" />
              <span className="font-semibold lg:text-3xl text-md">shriharidas_parivaar</span>
            </div>
            </a>
            <a href="https://www.youtube.com/@laddu_bihariji_pujari">
            <div className="flex items-center gap-3">
              <FaYoutube className="lg:w-15 lg:h-15 h-10 w-10 text-red-500" />
              <span className="font-semibold lg:text-3xl text-md">shriharidas_parivaar</span>
            </div>
            </a>
          </div>
        </div>

        <div className="p-1 w-full bg-black rounded-4xl"></div>
    </div>

    {/* Map */}
    <div className="container mx-auto my-5 p-5">
  <div className="bg-gray-200 w-full flex flex-col lg:flex-row justify-around items-center rounded-3xl p-10 gap-10 mt-10 shadow-md">
    
    {/* Map */}
    <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
      <iframe title="location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.02766680096144!2d77.69046937562022!3d27.579802372028027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736e372937faf7%3A0xd1f392db0770da6f!2sShri%20Banke%20Bihari%20Temple%2C%20Vrindavan!5e0!3m2!1sen!2sin!4v1758731161608!5m2!1sen!2sin"
        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    {/* Divider (hidden on small, visible on lg) */}
    <div className="hidden lg:block lg:h-3/4 lg:w-[2px] bg-gray-400 rounded-full"></div>

    {/* Form */}
    <div className="bg-white rounded-xl shadow-lg p-5 md:p-10 w-full md:w-[400px]">
      <form action="">
        <label className="block mb-2 font-semibold text-gray-700">Name</label>
        <input type="text" placeholder="Enter your name" className="w-full border-2 border-gray-300 p-2 rounded-md mb-5 focus:outline-none focus:ring-2 focus:ring-amber-500"/>

        <label className="block mb-2 font-semibold text-gray-700">Mobile Number</label>
        <input type="text" placeholder="Enter your number" className="w-full border-2 border-gray-300 p-2 rounded-md mb-5 focus:outline-none focus:ring-2 focus:ring-amber-500"/>

        <label className="block mb-2 font-semibold text-gray-700">Email</label>
        <input type="email" placeholder="Enter your email" className="w-full border-2 border-gray-300 p-2 rounded-md mb-5 focus:outline-none focus:ring-2 focus:ring-amber-500"/>

        <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold w-full rounded-lg p-2 transition">
          Send
        </button>
      </form>
    </div>
  </div>
</div>


    </>
  )
}

export default Contact
