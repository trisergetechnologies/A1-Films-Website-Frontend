import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/sections/PageHero';
import WorkEnvironment from '@/components/sections/WorkEnvironment';
import AboutFounders from '@/components/sections/AboutFounders';
import Teams from '@/components/sections/Teams';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/utils/useScrollAnimation';

const TeamsPage = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Our Team | A1 Films";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <PageHero 
        title="Our Team"
        subtitle="Meet the talented individuals who make it all possible"
      />
      <WorkEnvironment />
      <AboutFounders />
      <Teams />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TeamsPage;

