import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/sections/PageHero';
import ServicesParagraph from '@/components/sections/ServicesParagraph';
import ServicesBoxes from '@/components/sections/ServicesBoxes';
import WhyCostEffective from '@/components/sections/WhyCostEffective';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/utils/useScrollAnimation';
import VideoCut from '@/components/sections/VideoCut'

const Services = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Services | A1 Films";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <PageHero 
        title="Our Services"
        subtitle="Comprehensive solutions designed to drive your business forward"
      />
      <ServicesParagraph />
      <ServicesBoxes />
      <VideoCut />
      <WhyCostEffective />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;

