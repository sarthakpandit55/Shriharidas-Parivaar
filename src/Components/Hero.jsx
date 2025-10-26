import React,  { useState } from "react";
import { Link } from "react-router-dom";


// component imports
import TextType from './TextType';
import ScrollVelocity from './ScrollVelocity';
import SevaGallery from "./SevaGallery";
import StoreGallery from "./StoreGallery";
import Contact from "../Pages/Contact";
import SEO from "./SEO.jsx";


// icon imports
import { FaLanguage } from 'react-icons/fa6';


// imports for images
import heroBg from "../assets/BihariJi3.jpg";
import AboutImg from "../assets/BihariJi.jpg"
import poster from '../assets/poster.jpg'





function Hero() {
  const [chanLang, setchanLang] = useState(false);

return (
<>
{/* Meta tags */}

    <SEO
    title="Home"
    description="Welcome to the official Shri Haridas Parivaar website — dedicated to devotion, seva, and spreading the teachings of Shri Haridas Ji."
    keywords="Shri Haridas, Vrindavan, Bhakti, Haridas Parivaar, Seva, Mandir"
    />




{/* Hero */}

    <section className="relative h-screen w-full flex items-center justify-center text-center text-white" style={{backgroundImage:`url(${heroBg})`,backgroundSize: "cover",backgroundPosition: "center",}}>

      <div className="absolute inset-0 bg-black/40"></div> {/* overlay */}

      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Shriharidas Parivaar
        </h1>
        <p className="text-lg md:text-2xl font-semibold mb-10 drop-shadow-md"> 
          <TextType text={["Spreading devotion", "positivity", "togetherness ✨"]} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|"/>
        </p>
      </div>
    </section>


{/* Circular Text */}

  <div className="my-40 text-amber-500 text-shadow-amber-600 ">
    <ScrollVelocity texts={['कुंज बिहारी श्री हरिदास || Kunj Bihari Shrihari Das ||', 'Kunj Bihari Shrihari Das || कुंज बिहारी श्री हरिदास ||']} velocity={140} className="custom-scroll-text py-3 my-3"/>
  </div>


{/* About */}

<div className="container mx-auto my-30 px-6" id="about">
    <div className="my-10">
      <p className="text-4xl font-semibold text-amber-500"><u>Shri Banke Bihari</u> / <u>श्री बांके बिहारी</u></p>
    </div>

    <div className="box flex flex-col lg:flex-row md:flex-row justify-center items-center gap-10 lg:gap-20 md:gap-16 px-6 shadow-2xl p-6 rounded-lg bg-white shadow-amber-600 ">
      <div className="lg:w-1/2 md:w-1/2 w-full">
        <img src={AboutImg} alt="About Us" className="w-full h-[400px] rounded-lg shadow-lg lg:h-[600px]" />
      </div>
      <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full">
        <span className="justify-end flex text-4xl flex-col items-end gap-2">
          <FaLanguage className={`cursor-pointer transition-colors duration-300 ${chanLang ? "text-black" : "text-gray-500"}`} onClick={()=>setchanLang(!chanLang)}/>
            <p className="text-sm font-bold text-red-600">{chanLang?"English":"Hindi"} </p>
        </span>
        {chanLang ?
          (<p className="text-lg text-justify ">

          "ऐसो रसिक भयो नहिं है है भूमण्डल आकाश" <br />

          अनन्य रसिक चक्र चूड़ामणि सारस्वत कुल मार्तण्ड श्रीस्वामी हरिदासजी महाराज प्रभु की प्रधान सखी श्रीललिता जू के अवतार थे। विधर्मियों का साम्राज्य था लोग अनेक धर्म एवं कर्मकाण्ड के भँवर में फँसे हुए थे। ऐसे समय में श्रीस्वामीजी ने दिव्यातिदिव्य नित्य विहार रसोपासना का प्रकाश किया। प्राणी मात्र के विदग्ध हृदय को शान्ति एवं शीतलता प्रदान की।<br />

          सद्‌गृहस्थ एवं साधारण जन के जीवन के नियम प्रदान किये- <br />

          "ज्यों ही ज्यों ही तुम राखत हो, त्यों ही त्यों ही रहियत हों हो हरि" हरि भज हरि भज छाँड़ि मान नर तन कौ। मत वंछै मति वंछै, रे तिल तिल धन कौ ।। <br />

          अष्टादश-सिद्धान्त के पदों में उपरोक्त एवं अन्य नियम वर्णित है।<br />

          जिस पथ को प्राप्त करने के लिए बड़े-बड़े ज्ञानी तपस्वी नेत्र मूंदकर नासिका पकड़ हजारों हजार वर्षों तक ध्यान करते हैं, वेद वेदान्त जिस पथ को प्राप्त नहीं कर सके उसी अनन्य रसिकों के बाँके पथ को श्रीहरिदासजी महाराज ने विश्व में प्रकाशित किया जैसाकि स्वयं वल्लभ-पथगामी श्रीगोविन्द स्वामीजी ने उनकी प्रशंसा में लिखा- <br />

          "रसिक अनन्यन को पथ बाँकों।    <Link to="/about" className="cursor-pointer text-blue-500">...और पढ़ें</Link>

          </p>)
          :
         (<p className="text-lg text-justify tracking-tighter">
          ‘Such a connoisseur there is not in the world or in the sky.’  <br/>

          Ananya Rasik, Chakr Chuḍāmaṇi Saraswat family’s Marṭand, Śrī Swāmi Haridāsji Maharaj, was the foremost devotee and the principal friend of Lord Shree Lalita Ji, an incarnation of divine love. During those times, when the empire was ruled by non-believers and people were entangled in various religions and rituals, Shree Swamiji illuminated the practice of divine daily pastimes filled with rasa (spiritual delight). He brought peace and tranquility to the hearts of all beings.  <br/>

          He provided rules for the life of householders and ordinary people:  <br/>

          ‘As soon as you burn (for Him), right then, right then, Hari stays with you; worship Hari, worship Hari, abandoning pride, O human body. Thoughts are desired, wisdom is desired, O seed of wealth.’  <br/>

          These and other rules are described in the verses of the Ashtadash-Siddhant.  <br/>

          The path that even great scholars and ascetics achieve by closing their eyes, holding their noses, and meditating for thousands of years, and the path of the Vedas and Vedanta that they could not attain, was revealed in the world by Shree Haridasji Maharaj for the connoisseurs of exclusive rasa. As the Valluabha-path follower Shree Govind Swamiji himself wrote in his praise:  <br/>

          ‘The path for the exclusive lover of rasa is twisted.’ <Link to="/about" className="text-blue-500">...Read more</Link>
        </p>)
        }
      </div>
    </div>
</div>



{/* Poster */}

<div className="container mx-auto my-40 text-center flex justify-evenly items-center flex-row bg-gray-200 py-7 rounded-3xl">
  <div className="w-1/3 ">
    <img src={poster} alt="" className="rounded-3xl"/>
  </div>

  <div className="text-md lg:text-4xl md:text-2xl font-semibold w-2/5 text-center text-gray-500">
    Bihar Punchami
  </div>
</div>


{/* Online Prashad */}

<div className="my-46" id="seva">
  <div className="text-center">
    <h1 className="text-4xl font-semibold text-amber-600"><u>Seva</u> / <u>सेवाएं</u></h1>
  </div>

    {/* Circular Cards */}
  <div className="lg:h-[550px] md:h-[500px] h-[300px] relative">
    <SevaGallery bend={3} textColor="#111111" borderRadius={0.05} scrollEase={0.02}/>
  </div>

  {/* button */}

  <div className="flex justify-center text-center mt-10">
    <Link to={"/seva"} className="bg-amber-500 p-2 lg:text-xl md:text-lg font-semibold rounded-lg text-white w-1/4 shadow-xl cursor-pointer">
    <button >Show All</button>
    </Link>
  </div>
</div>

{/* Online Store */}

<div className="my-46" id="store">
  <div className="text-center">
    <h1 className="text-4xl font-semibold text-amber-600"><u>Store</u> / <u>स्टोर</u></h1>
  </div>

    {/* Circular Cards */}
  <div className="lg:h-[550px] md:h-[500px] h-[300px] relative">
    <StoreGallery bend={3} textColor="#111111" borderRadius={0.05} scrollEase={0.02}/>
  </div>

  {/* button */}

  <div className="flex justify-center text-center mt-10">
    <Link to={"/store"} className="bg-amber-500 p-2 lg:text-xl md:text-lg font-semibold rounded-lg text-white w-1/4 shadow-xl cursor-pointer">
    <button >Show All</button>
    </Link>
  </div>
</div>



<Contact/>


</>
  );
}

export default Hero;
