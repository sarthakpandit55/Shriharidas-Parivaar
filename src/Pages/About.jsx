import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import img from '../assets/BihariJi.jpg'
import { FaLanguage } from 'react-icons/fa6';
import SEO from "../Components/SEO";


function About() {

    const [chanLang, setchanLang] = useState(false);

  return (
    <>

    {/* meta tag */}

    <SEO
    title="About"
    description="Learn about Shri Haridas Parivaar, the divine life of Shree Swami Haridas Ji Maharaj, his teachings, and spiritual legacy."
    keywords="Shri Haridas Parivaar, Swami Haridas Ji, Spiritual History, Vrindavan, Hindu Saints, Divine Life, Spiritual Teachings"
    />

    {/* about page */}
    <Navbar/>
    
    <div className="w-full min-h-screen flex justify-center bg-gradient-to-b from-amber-100 to-amber-400 px-6 py-40">
            <div className="container flex flex-col  shadow-2xl p-6 rounded-lg backdrop-blur-2xl bg-[#0e0d0d37]  shadow-amber-600 ">
                  <div className="flex justify-center">
                    <img src={img} alt="About Us" className="w-full h-[40vh] md:w-2/5 lg:h-[50vh] lg:w-1/3 rounded-[50%] shadow-2xl shadow-amber-500 border-amber-600 border-2" />
                  </div>
                  <div className="flex flex-col w-full">

                    <span className="justify-end flex text-4xl flex-col items-end gap-2">
                      <FaLanguage className={`cursor-pointer transition-colors duration-300 ${chanLang ? "text-black" : "text-gray-500"}`} onClick={()=>setchanLang(!chanLang)}/>
                        <p className="text-sm font-bold text-red-600">{chanLang?"English":"Hindi"} </p>
                    </span>

                    {chanLang ?
                      (<p className="text-lg text-justify ">
            
                       "ऐसो रसिक भयो नहिं है है भूमण्डल आकाश" <br />

                        अनन्य रसिक चक्र चूड़ामणि सारस्वत कुल मार्तण्ड श्री स्वामी हरिदासजी महाराज प्रभु की प्रधान सखी श्रीललिता जू के अवतार थे। विधर्मियों का साम्राज्य था लोग अनेक धर्म एवं कर्मकाण्ड के भँवर में फँसे हुए थे। ऐसे समय में श्री स्वामीजी ने दिव्यातिदिव्य नित्य विहार रसोपासना का प्रकाश किया। प्राणी मात्र के विदग्ध हृदय को शान्ति एवं शीतलता प्रदान की। <br />

                        सद्गृहस्थ एवं साधारण जन के जीवन के नियम प्रदान किये- <br />

                        "ज्यों ही ज्यों ही तुम राखत हो, त्यों ही त्यों ही रहियत हों हो हरि" हरि भज हरि भज छाँड़ि मान नर तन कौ। मत वंछै मति वंछै, रे तिल तिल धन कौ ।। <br />

                        अष्टादश-सिद्धान्त के पदों में उपरोक्त एवं अन्य नियम वर्णित है।<br />

                        जिस पथ को प्राप्त करने के लिए बड़े-बड़े ज्ञानी तपस्वी नेत्र मूंदकर<br />

                        नासिका पकड़ हजारों हजार वर्षों तक ध्यान करते हैं, वेद वेदान्त जिस पथ को प्राप्त नहीं कर सके उसी अनन्य रसिकों के बाँके पथ को श्री हरिदासजी महाराज ने विश्व में प्रकाशित किया जैसाकि स्वयं वल्लभ-पथगामी श्रीगोविन्द <br />

                        स्वामीजी ने उनकी प्रशंसा में लिखा- <br />

                        "रसिक अनन्यन को पथ बाँकों। <br />

                        महामुनि मार्ग का अनुसरण करते हैं, आँखें बंद करके सदैव उत्तर दिशा की ओर चलते हैं। जिस मार्ग का वेद पश्चाताप करते हैं, उसी मार्ग पर चलें, जाने वालों में कोई भेद नहीं है। श्री हरिदास ने सौ मार्ग लिए हैं, रहस्यों के प्रेम ने पगडंडी चलाई है। <br />

                        उधर तो वृषभाननन्दिनी श्री किशोरी जू का जन्मोत्सव मनाया जा रहा था तो यहाँ हरिदासपुर ग्राम में श्री आशुधीर जी एवं उनकी पत्नी श्री मती गंगादेवी जी के यहाँ सं० १५३५ की भाद्रपद शुक्ला अष्टमी को श्री स्वामी जी महाराज अवतरित हुए। विवाह २५ वर्ष की अवस्था में हुआ अवश्य किन्तु पत्नी श्री स्वामी जी का विरक्त भाव देख अपने कंकण से अग्नि प्रज्ज्वलित कर दिव्य प्रकाश रूप हो गईं। परम पूज्य पिता एवं गुरु श्री आशुधीर जी से दीक्षा ले वृन्दावन आगमन हुआ। परम पवित्र श्यामा कुञ्जबिहारी के नित्य लीला स्थल श्री निधिवनराज में रस भाव समाधि में लीन रहने लगे। <br />

                        संगीत शिरोमणि रसिक शेखर ललितावतार अनन्यरसिक श्री स्वामी हरिदास जी महाराज की संगीत साधना का परम मंगलमय परिणाम श्री निधिवनराजजी <br /> <br /><br /><br />

                        में स्वयंप्रकट ठा. श्री बाँकेबिहारी जी महाराज हैं। श्री बिहारीजी महाराज का श्री विग्रह एक-प्राण दो देह के स्वरूप का साक्षात दर्शन है जैसे काले घनेबादलों में दामिनी का प्रकाश दैदीप्यमान होता है उसी तरह श्रीराधा श्री बिहारीजी में समाहित हैं। भक्तों के आग्रह के कारण निकुञ्जस्थ प्रिया-प्रियतम का साक्षात् श्री विग्रह प्रगट किया-माई री सहज जोरी प्रगट भई। रंग की गौर श्याम घनदामिनी जैसे ।। <br />

                        यह जोड़ी आज ही प्रगट नहीं हुई पहले भी थी आज भी है आगे भी रहेगी- मेरे नित्य किशोर अजन्मा, विहरत एक प्राण द्वै तन्मा। <br />

                        आज भी श्री बाँकेबिहारी जी महाराज की अद्भुत छवि का दर्शन ऐसा ही है, प्रिया-प्रियतम दोनों मिल एक रूप हैं। वे नन्दनन्दन एवं वृषभानुनन्दिनी श्री राधारानीजी से भिन्न है। निरन्तर नित्यविहार में लीन रहते हैं। श्री बिहारीदासजी ने कहा कि धर्म, कर्म, भुक्ति-मुक्ति एवं वेदवेदान्त को मर्यादाओं से आगे अंशकला अवतार एवं उससे भी आगे बृज के रससिन्धु को पार जो कर सके वही श्री स्वामी हरिदासजी के रस प्रदेश में प्रवेश कर सकता है। <br />

                        श्री बिहारीजी महाराज की पूजा पद्धति भी सबसे अलग सबसे भिन्न है। प्रभु यहाँ झाँकियों में दर्शन देते हैं। शृंगार, राजभोग और शयन भोग ये तीन आरतियाँ होती हैं। हाँ साल में एक बार ही जन्माष्टमी के उत्सव पर मंगला आरती एवं अक्षय तृतीया पर चरणों के दर्शन होते हैं। प्रभु की इच्छानुसार ही श्री स्वामी हरिदासजी के कनिष्ठ भ्राता श्री जगन्नाथ जी के वंशज गोस्वामीगण श्री बिहारीजी महाराज को लाड़ लड़ाते हैं उनकी सेवा में निरन्तर लीन रहते हैं। एक बार भी जिसने इस छवि का दर्शन किया वह बस उन्हीं का हो गया। <br />

                        बाँके की बाँकी झाँकी करि, बाकी रह्यौ कहा है <br />

                        आज समस्त वैष्णव भक्तजन सम्प्रदायवाद का त्यागकर श्री बिहारी जी महाराज की बाँकी छवि का दर्शन कर इनके कटीले नयनों में एकबार झाँकता है तो सभी सांसारिक मोहपाश से मुक्त होकर श्री बिहारीजी महाराज का चरणानुरागी हो जाता है। ठा. श्री बाँकेबिहारीजी महाराज का अपने सभी भक्तों पर अनुग्रह भेदरहित है। पूर्व में श्री बाँकेबिहारीजी महाराज की सेवा पूजा श्री निधिवनराज में ही होती थी, वर्तमान में ठा. श्री बाँकेबिहारी जी महाराज के मन्दिर का निर्माण सन् १८६४ में किया गया जिसमें सभी गोस्वामियों ने तन-मन-धन से सहयोग दिया। आज भी ठा. श्री बाँकेबिहारीजी महाराज के विभिन्न उत्सवों पर वृन्दावन नगर की हर गली और इस नगर को जोड़ने वाली सभी सीमाओं से एक ही स्वर-श्री बाँकेबिहारी लाल की जय ! श्री बाँकेबिहारी लाल की जय !! का उद्घोष समस्त ब्रज मण्डल में सुनाई देता है और सभी भक्तों का सैलाब अपने लाड़ले ठाकुरजी की एक झलक पाने को ललक उठता है और उनकी एक झाँकी पाकर धन्य हो जाता है। <br /> <br />

                        <p className='font-bold text-2xl'>कुंज बिहारी श्री हरिदास।।</p>


                      </p>)
                      :
                     (<p className="text-lg text-justify tracking-tighter">
                      "Such a Connoisseur Never Existed in the World or the Heavens" <br />

                      The unparalleled connoisseur, the crown jewel of the scholarly Saraswat lineage, Shri Swami Haridas Ji Maharaj, was the principal companion of Lord Shri Lalita Ji. In those times, the world was ruled by heretics, and people were lost in the maze of various religions and rituals. Amidst this darkness, Shri Swamiji illuminated the divine eternal pastime of rasa-worship, bringing peace and serenity to the hearts of all living beings. <br />

                      He also laid down guiding principles for the lives of householders and ordinary people: <br />

                      "As you remain devoted, so shall you remain in the Lord. Chant Hari, chant Hari, forsaking worldly pride. Seek neither wealth nor wisdom; seek only the dust of the Lord’s feet." <br />

                      These and other principles are described in the verses of the Ashtadash-Siddhant. <br />

                      The path that great sages and ascetics, meditating for thousands of years with closed eyes and disciplined breath, could not attain through the Vedas and Vedanta, Shri Haridas Ji Maharaj revealed for the exclusive connoisseurs. As Vallabh-Pathi Shri Govind Swamiji praised: <br />

                      "The unparalleled connoisseurs follow the winding path. With eyes closed, they always proceed northward. They tread the path that the Vedas themselves could not. Among those who walk this path, there is no distinction. Shri Haridas took a hundred paths; love for the divine guided his secret journey." <br />

                      While elsewhere the birth festival of Vrishbhanandini Shri Kishori Ji was being celebrated, in Haridaspur village, Shri Ashudhir Ji and his wife, Smt. Gangadevi Ji, witnessed the incarnation of Shri Swamiji Maharaj on Bhadrapad Shukla Ashtami in the year 1535. Though married at the age of 25, his wife, seeing Shri Swamiji’s renunciation, ignited the divine light with her bangles and merged into a radiant spiritual form. <br />

                      Receiving initiation from his revered father and guru Shri Ashudhir Ji, he arrived in Vrindavan. Immersed in the blissful rasa of the Lord’s eternal pastimes, he resided in the sacred Shyama Kunj Bihari’s Shri Nidhivan Raj, the eternal playground of divine leelas. <br />

                      The supreme fruit of the musical devotion of this master, Lalitavatar Ananya Rasik Shri Swami Haridas Ji Maharaj, manifested in the divinely enchanted Shri Nidhivan Raj Ji. <br /> <br /> <br /> <br />

                      I am the self-manifested Thakur Shri Banke Bihari Ji Maharaj. The sacred form of Shri Bihari Ji Maharaj is a living vision of one soul in two bodies, just as the flash of lightning illuminates dark, dense clouds, Shri Radha is fully integrated within Shri Bihari Ji. At the behest of devotees, the divine couple, the Beloveds of the Nikunja, manifested together—the naturally joined pair of Mother and Lord appeared. Their complexion is fair and their hue like the dark lightning.

                      This divine pair did not manifest for the first time today—they have always existed, exist now, and shall exist forever. My eternal youthful form, ever playful, moves in one soul, two bodies.

                      Even today, the vision of Shri Banke Bihari Ji Maharaj is wondrous; the Beloveds, Radha and Bihari, are one in form, distinct from Nandanandan and Vrishbhanandini Shri Radharani Ji. They remain continually absorbed in eternal pastimes. Shri Bihari Das Ji said that to surpass the limits of dharma, karma, bhukti-mukti, Vedas, and Vedanta, and to cross even the ocean of rasa in Brij, one must enter the realm of rasa of Shri Swami Haridas Ji.

                      The worship of Shri Bihari Ji Maharaj is unique and distinctive. The Lord gives darshan in Jhankis (tableau displays). Three main aartis are performed: Shringar, Rajbhog, and Shayan. Once a year, during Janmashtami, the Mangala Aarti is performed, and on Akshaya Tritiya, devotees receive darshan of His feet. By the Lord’s will, the descendants of Shri Jagannath Ji, the junior brother of Shri Swami Haridas Ji, serve Shri Bihari Ji Maharaj lovingly and remain absorbed in His seva. Anyone who has had the darshan of this form becomes devoted to Him forever.

                      "Banke’s remaining glories, how could the rest remain unknown?"

                      Today, all Vaishnav devotees, setting aside sectarianism, gain the darshan of Shri Bihari Ji Maharaj’s complete form. A single glance into His enchanting eyes frees the devotee from worldly attachments and binds their heart forever to the Lord’s lotus feet. The grace of Thakur Shri Banke Bihari Ji Maharaj is without distinction, extended to all devotees. Earlier, His seva and worship took place in Shri Nidhivan Raj, but in 1864, the present temple of Shri Banke Bihari Ji Maharaj was constructed with the wholehearted support of all Goswamis.

                      Even today, during various festivals of Shri Banke Bihari Ji Maharaj, every street of Vrindavan and all connecting regions resound with a single chant: <br />
                      “Shri Banke Bihari Lal Ki Jai! Shri Banke Bihari Lal Ki Jai!!” <br />
                      Devotees from all corners gather, eager to catch a glimpse of their beloved Thakur Ji. Those who behold even one tableau of Him feel eternally blessed. <br /> <br />
                      <p className='font-bold text-2xl'>Jai Jai Shri Haridas!</p>

                    </p>)
            
                    }
                  </div>
                </div>
        
    </div>

    </>
  )
}

export default About
