import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Store from "./Pages/Store.jsx";
import Seva from "./Pages/Seva.jsx";
import EventPage from "./Pages/EventPage.jsx"; 
import ScrollToTop from "./Components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/seva" element={<Seva/>}/>
        <Route path="/store" element={<Store/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:eventName" element={<EventPage />} /> 

      </Routes>
      <Footer />
    </>
  );
}

export default App;
