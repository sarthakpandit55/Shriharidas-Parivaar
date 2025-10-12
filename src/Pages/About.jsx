import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import img from '../assets/BihariJi.jpg'
import { FaLanguage } from 'react-icons/fa6';


function About() {

    const [chanLang, setchanLang] = useState(false);

  return (
    <>
    <Navbar/>
    
    <div className="w-full min-h-screen flex justify-center bg-gradient-to-b from-amber-100 to-amber-400 px-6 py-40">
            <div className="container flex flex-col lg:flex-row md:flex-row justify-center items-center gap-10 lg:gap-20 md:gap-16 px-6 shadow-2xl p-6 rounded-lg backdrop-blur-2xl bg-[#0e0d0d37]  shadow-amber-600 ">
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <img src={img} alt="About Us" className="w-full h-[400px] rounded-lg shadow-lg lg:h-[600px]" />
                  </div>
                  <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full">

                    <span className="justify-end flex text-4xl flex-col items-end gap-2">
                      <FaLanguage className={`cursor-pointer transition-colors duration-300 ${chanLang ? "text-black" : "text-gray-500"}`} onClick={()=>setchanLang(!chanLang)}/>
                        <p className="text-sm font-bold text-red-600">{chanLang?"English":"Hindi"} </p>
                    </span>

                    {chanLang ?
                      (<p className="text-lg text-justify ">
            
                        "ऐसो रसिक भयो नहिं है है भूमण्डल आकाश" <br />

                        अनन्य रसिक चक्र चूड़ामणि सारस्वत कुल मार्तण्ड श्रीस्वामी हरिदासजी महाराज प्रभु की प्रधान सखी श्रीललिता जू के अवतार थे। विधर्मियों का साम्राज्य था लोग अनेक धर्म एवं कर्मकाण्ड के भँवर में फँसे हुए थे। ऐसे समय में श्रीस्वामीजी ने दिव्यातिदिव्य नित्य विहार रसोपासना का प्रकाश किया। प्राणी मात्र के विदग्ध हृदय को शान्ति एवं शीतलता प्रदान की। <br />

                        सद्‌गृहस्थ एवं साधारण जन के जीवन के नियम प्रदान किये- <br />

                        "ज्यों ही ज्यों ही तुम राखत हो, त्यों ही त्यों ही रहियत हों हो हरि" हरि भज हरि भज छाँड़ि मान नर तन कौ। मत वंछै मति वंछै, रे तिल तिल धन कौ ।।<br />

                        अष्टादश-सिद्धान्त के पदों में उपरोक्त एवं अन्य नियम वर्णित है।<br />

                        जिस पथ को प्राप्त करने के लिए बड़े-बड़े ज्ञानी तपस्वी नेत्र मूंदकर नासिका पकड़ हजारों हजार वर्षों तक ध्यान करते हैं, वेद वेदान्त जिस पथ को प्राप्त नहीं कर सके उसी अनन्य रसिकों के बाँके पथ को श्रीहरिदासजी महाराज ने विश्व में प्रकाशित किया जैसाकि स्वयं वल्लभ-पथगामी श्रीगोविन्द स्वामीजी ने उनकी प्रशंसा में लिखा-<br />

                        "रसिक अनन्यन को पथ बाँकों।<br />

                        जा पथ कौ पथ लेत महामुनि, मूँदत नैन गहै नित नाकौ ॥<br />

                        जा पथ जौ पछतात हैं वेद, लहै नहिं भेद रहै जकि जाकौ।<br />

                        सौ पथ श्री हरिदास लह्यौ, रसीरीत की प्रीत चलाय निसाँकौ ॥"<br />

                        उधर तो वृषभाननन्दिनी श्रीकिशोरी जू का जन्मोत्सव मनाया जा रहा था तो यहाँ हरिदासपुर ग्राम में श्रीआशुधीर जी एवं उनकी पत्नी श्रीमती गंगादेवी जी के यहाँ सं० १५३५ की भाद्रपद शुक्ला अष्टमी को श्रीस्वामी जी महाराज अवतरित हुए। विवाह २५ वर्ष की अवस्था में हुआ अवश्य किन्तु पत्नी श्रीस्वामी जी का विरक्त भाव देख अपने कंकण से अग्नि प्रज्ज्वलित कर दिव्य प्रकाश रूप हो गईं। परम पूज्य पिता एवं गुरु श्रीआशुधीर जी से दीक्षा ले वृन्दावन आगमन हुआ। परम पवित्र श्यामा कुञ्जबिहारी के नित्य लीला स्थल श्रीनिधिवनराज में रस भाव समाधि में लीन रहने लगे।<br />

                        संगीत शिरोमणि रसिक शेखर ललितावतार अनन्यरसिक श्रीस्वामी हरिदास जी महाराज की संगीत साधना का परम मंगलमय परिणाम श्रीनिधिवनराजजी<br />
            
                      </p>)
                      :
                     (<p className="text-lg text-justify tracking-tighter">
                      ‘Such a connoisseur there is not in the world or in the sky.’  <br/>
            
                      Ananya Rasik, Chakr Chuḍāmaṇi Saraswat family’s Marṭand, Śrī Swāmi Haridāsji Maharaj, was the foremost devotee and the principal friend of Lord Shree Lalita Ji, an incarnation of divine love. During those times, when the empire was ruled by non-believers and people were entangled in various religions and rituals, Shree Swamiji illuminated the practice of divine daily pastimes filled with rasa (spiritual delight). He brought peace and tranquility to the hearts of all beings.  <br/>
            
                      He provided rules for the life of householders and ordinary people:  <br/>
            
                      ‘As soon as you burn (for Him), right then, right then, Hari stays with you; worship Hari, worship Hari, abandoning pride, O human body. Thoughts are desired, wisdom is desired, O seed of wealth.’  <br/>
            
                      These and other rules are described in the verses of the Ashtadash-Siddhant.  <br/>
            
                      The path that even great scholars and ascetics achieve by closing their eyes, holding their noses, and meditating for thousands of years, and the path of the Vedas and Vedanta that they could not attain, was revealed in the world by Shree Haridasji Maharaj for the connoisseurs of exclusive rasa. As the Valluabha-path follower Shree Govind Swamiji himself wrote in his praise:  <br/>
            
                      ‘The path for the exclusive lover of rasa is twisted.’ <a href="" className="text-blue-500">...Read more</a>
                    </p>)
            
                    }
                  </div>
                </div>
        
    </div>

    </>
  )
}

export default About
