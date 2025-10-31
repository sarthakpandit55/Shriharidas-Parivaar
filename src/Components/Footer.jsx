import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa6";
import laddu from "../assets/laddu.jpg";
import himanshu from "../assets/himanshu.jpg";
import { Link } from "react-router-dom";
import SEO from "./SEO.jsx";

function Footer() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Add your Web3Forms access key
    formData.append("access_key", "027fca96-c7be-4cb6-9ec2-f7636cb3729e");

    // Add the reply_to field to ensure you receive replies
    formData.append("reply_to", formData.get("email"));

    // Log the form data for debugging
    console.log("Footer Form Data:", Object.fromEntries(formData));

    try {
      console.log("Submitting to Web3Forms...");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log("Web3Forms Response:", data);

      if (data.success) {
        setResult(`✅ Message sent successfully!`);
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        console.error("Submission Error Details:", data);
        setResult(`❌ Error: ${data.message || "Please try again."}`);
        setTimeout(() => setResult(""), 5000);
      }
    } catch (error) {
      console.error("Network Error Details:", error);
      setResult("❌ Connection error. Please try again.");
      setTimeout(() => setResult(""), 3000);
    }
  };

  return (
    <>
      {/* meta tags */}
      <SEO
        title="Shri Haridas Parivaar"
        description="Official website of Shri Haridas Parivaar — explore seva, store, gallery, events, and connect with devotees. Stay updated with spiritual activities and temple events."
        keywords="Shri Haridas Parivaar, Vrindavan, Seva, Mandir, Temple Events, Devotional Items, Gallery, Spiritual Activities"
      />

      {/* Main Footer */}
      <div className="bg-gray-900 text-white flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 px-5 sm:px-20 w-full gap-10">
        {/* First */}
        <div className="flex flex-col gap-10 w-full lg:w-1/3">
          {/* card1 */}
          <div className="flex flex-col sm:flex-row justify-evenly items-center bg-gray-800 p-6 rounded-xl shadow-md gap-6">
            <div className="flex flex-col justify-center text-center items-center">
              <img
                src={himanshu}
                alt="Kunal Bihari Goswami"
                className="object-cover rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 shadow"
              />
              <p className="text-sm font-semibold pt-3">
                Kunal Bihari Goswami <br /> ( Himanshu Bihari Goswami )
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm mt-4 sm:mt-0">
              <a
                href="https://wa.me/917088122009?text=Hello%20there%2C%20I%20found%20your%20number%20on%20the%20website!"
                target="blank"
              >
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="w-5 h-5 text-green-500" />
                  <span className="font-medium">+91 7088122009</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/pujarikunalgoswamii"
                target="blank"
              >
                <div className="flex items-center gap-3">
                  <FaInstagram className="w-5 h-5 text-pink-500" />
                  <span className="font-medium">pujarikunalgoswamii</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/@Pujarikunalgoswami"
                target="blank"
              >
                <div className="flex items-center gap-3">
                  <FaYoutube className="w-5 h-5 text-red-500" />
                  <span className="font-medium">pujarikunalgoswamii</span>
                </div>
              </a>
            </div>
          </div>

          {/* card2 */}
          <div className="flex flex-col sm:flex-row justify-evenly items-center bg-gray-800 p-6 rounded-xl shadow-md gap-6">
            <div className="flex flex-col justify-center text-center items-center">
              <img
                src={laddu}
                alt="Tushar Bihari Goswami"
                className="object-cover rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 shadow"
              />
              <p className="text-sm font-semibold pt-3">
                Tushar Bihari Goswami <br />( Laddu Bihari Goswami )
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm mt-4 sm:mt-0">
              <a
                href="https://wa.me/918630362454?text=Hello%20there%2C%20I%20found%20your%20number%20on%20the%20website!"
                target="blank"
              >
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="w-5 h-5 text-green-500" />
                  <span className="font-medium">+91 8630362454</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/shriharidas_parivaar"
                target="blank"
              >
                <div className="flex items-center gap-3">
                  <FaInstagram className="w-5 h-5 text-pink-500" />
                  <span className="font-medium">shriharidas_parivaar</span>
                </div>
              </a>
              <a href="https://www.youtube.com/@shriharidas_parivaar" target="blank">
                <div className="flex items-center gap-3">
                  <FaYoutube className="w-5 h-5 text-red-500" />
                  <span className="font-medium">shriharidas_parivaar</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="lg:w-1/4">
          <h1 className="text-2xl mb-5 font-semibold">Related Links</h1>
          <div className="flex flex-col gap-3">
            <Link to="/">
              <p className="cursor-pointer hover:text-amber-500 transition">
                Home
              </p>
            </Link>
            <Link to="/about">
              <p className="cursor-pointer hover:text-amber-500 transition">
                About
              </p>
            </Link>
            <Link to="/seva">
              <p className="cursor-pointer hover:text-amber-500 transition">
                Seva
              </p>
            </Link>
            <Link to="/store">
              <p className="cursor-pointer hover:text-amber-500 transition">
                Store
              </p>
            </Link>
            <Link to="/contact">
              <p className="cursor-pointer hover:text-amber-500 transition">
                Contact Us
              </p>
            </Link>
            <Link to="/gallery">
              <p className="cursor-pointer hover:text-amber-500 transition">
                Gallery
              </p>
            </Link>
          </div>
        </div>

        {/* Web3Form Contact */}
        <div className="lg:w-1/3">
          <h1 className="text-2xl mb-5 font-semibold">Reach Us :</h1>
          <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-sm">
            <form onSubmit={onSubmit} className="flex flex-col">
              <input type="hidden" name="subject" value="New Footer Contact Form - Shri Haridas Parivaar" />
              <input type="hidden" name="from_name" value="Shri Haridas Parivaar Website Footer" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <label className="mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full border-2 border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <label className="mb-1 font-medium">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
                className="w-full border-2 border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <label className="mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full border-2 border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <label className="mb-1 font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="3"
                required
                className="w-full border-2 border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>

              <button
                type="submit"
                disabled={result === "Sending..."}
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg py-2 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {result === "Sending..." ? "Sending..." : "Send Message"}
              </button>
            </form>
            {result && (
              <p className={`text-center text-sm mt-3 ${
                result.includes("✅") ? "text-green-600" : 
                result.includes("❌") ? "text-red-600" : 
                "text-gray-700"
              }`}>
                {result}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="w-full text-center text-sm text-gray-400 bg-gray-900 py-3 border-t border-gray-800">
        This website is created by{" "}
        <Link to="https://sarthak-pandit-portfolio.vercel.app/" target="blank">
          <span className="text-white">Sarthak Pandit</span>
        </Link>
      </p>
    </>
  );
}

export default Footer;
