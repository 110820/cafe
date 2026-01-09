import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Fea";
import WhyChoose from "./components/WhyChoose";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Gallery from "./pages/Gallary";
import CoffeeMenu from "./pages/CoffeeMenu";


function App() {
  return (
    <div className="bg-cream">
    
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Features />
            <WhyChoose />
            <Products />
            <Testimonials />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Story />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/coffee-menu" element={<CoffeeMenu />} />
      </Routes>
    
    </div>
  );
}

export default App;
