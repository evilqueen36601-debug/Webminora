import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { SERVICES } from './data/salonData';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].title);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F1] text-[#2B1C16]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <GallerySection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <BookingSection preselectedService={selectedService} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
