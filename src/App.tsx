import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import BookingCTA from './components/BookingCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-gold/30 selection:text-brand-dark overflow-x-hidden">
      {/* Sticky Top Transparent Nav */}
      <Navbar onBookClick={() => handleOpenBooking()} />

      {/* Hero Banner Landing Section */}
      <Hero onBookClick={() => handleOpenBooking()} />

      {/* About Heritage Block */}
      <About onBookClick={() => handleOpenBooking()} />

      {/* Rooms Showcase */}
      <Rooms onBookClick={(roomId) => handleOpenBooking(roomId)} />

      {/* Amenities Bento Grid */}
      <Amenities />

      {/* Interactive visual Lightbox Gallery */}
      <Gallery />

      {/* Guest Review Slider Carousel */}
      <Testimonials />

      {/* Brand Distinctions */}
      <WhyChooseUs />

      {/* Promotional Wide Banner CTA */}
      <BookingCTA onBookClick={() => handleOpenBooking()} />

      {/* Multi-grid Contact Details and Map and Message Form */}
      <Contact />

      {/* Footer Block */}
      <Footer />

      {/* Hidden Overlay components */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedRoomId={selectedRoomId} 
      />
    </div>
  );
}

