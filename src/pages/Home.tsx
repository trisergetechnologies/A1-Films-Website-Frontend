import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HomeHero from '@/components/HomeHero';
import HomeAbout from '@/components/HomeAbout';
import HomeServices from '@/components/HomeServices';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ClientsReviews from '@/components/sections/ClientsReviews';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Home = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Home | A1 Films";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <WhyChooseUs />
      <ClientsReviews />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;

