import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { BookingModal } from './components/BookingModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('Avaliação Geral');

  const handleOpenBooking = (treatment?: string) => {
    if (treatment) {
      setSelectedTreatment(treatment);
    }
    setBookingModalOpen(true);
  };

  const handleSelectServiceFromGrid = (treatment: string) => {
    setSelectedTreatment(treatment);
    setBookingModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[hsl(var(--bg-canvas))] text-[hsl(var(--text-primary))]">
        <Navbar onOpenBooking={handleOpenBooking} />
        <main className="flex-1">
          <HeroSection onOpenBooking={handleOpenBooking} />
          <ServicesSection onSelectTreatment={handleSelectServiceFromGrid} />
          <AboutSection />
          <ContactSection selectedTreatment={selectedTreatment} />
        </main>
        <Footer />
        <BookingModal
          isOpen={bookingModalOpen}
          initialTreatment={selectedTreatment}
          onClose={() => setBookingModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
