import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/sections/PageHero';
import OurStory from '@/components/sections/OurStory';
import OurGoals from '@/components/sections/OurGoals';
import OurScope from '@/components/sections/OurScope';
import AboutFounders from '@/components/sections/AboutFounders';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/utils/useScrollAnimation';

const About = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "About Us | A1 Films";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <PageHero 
        title="About Us"
        subtitle="Learn more about our story, mission, and the team behind our success"
      />
      <OurStory />
      <OurGoals />
      <OurScope />
      <AboutFounders />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;

