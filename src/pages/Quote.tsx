import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/utils/useScrollAnimation';
import GetQuoteForm from '@/components/QuoteForm';

const QuotePage = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Quote Us | A1 Films";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <GetQuoteForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default QuotePage;

