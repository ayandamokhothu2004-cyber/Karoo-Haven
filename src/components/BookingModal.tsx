import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Phone, Mail, User, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { ROOMS_DATA } from '../data';
import { BookingInquiry } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export default function BookingModal({ isOpen, onClose, selectedRoomId }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [roomId, setRoomId] = useState(selectedRoomId || '');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  
  const [nights, setNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [inquiryCode, setInquiryCode] = useState('');

  // Sync selectedRoomId if it changes from parent
  useEffect(() => {
    if (selectedRoomId) {
      setRoomId(selectedRoomId);
    }
  }, [selectedRoomId]);

  // Calculate nights and price when dates or room changes
  useEffect(() => {
    if (checkIn && checkOut && roomId) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (end > start) {
        setNights(diffDays);
        const selectedRoom = ROOMS_DATA.find(r => r.id === roomId);
        if (selectedRoom) {
          setTotalPrice(selectedRoom.price * diffDays);
        }
      } else {
        setNights(0);
        setTotalPrice(0);
      }
    } else {
      setNights(0);
      setTotalPrice(0);
    }
  }, [checkIn, checkOut, roomId]);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomId || !checkIn || !checkOut) {
      alert('Please fill in all details.');
      return;
    }
    setStep(2);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Please enter your contact details.');
      return;
    }

    // Generate random premium inquiry reference
    const randomRef = 'KH-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryCode(randomRef);

    // Save inquiry to localStorage to preserve state/history
    const existingInquiries = JSON.parse(localStorage.getItem('karoo_inquiries') || '[]');
    const newInquiry: BookingInquiry & { ref: string; totalPrice: number; nights: number; timestamp: string } = {
      ref: randomRef,
      name,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      roomType: ROOMS_DATA.find(r => r.id === roomId)?.name || 'Custom Stay',
      comments,
      totalPrice,
      nights,
      timestamp: new Date().toISOString()
    };
    existingInquiries.push(newInquiry);
    localStorage.setItem('karoo_inquiries', JSON.stringify(existingInquiries));

    // Proceed to success state
    setStep(2);
  };

  const getWhatsAppLink = () => {
    const selectedRoom = ROOMS_DATA.find(r => r.id === roomId);
    const message = `Hello Karoo Haven! %0A%0AI would like to inquire about a booking:%0A%0A` +
      `*Reference:* ${inquiryCode}%0A` +
      `*Guest Name:* ${name}%0A` +
      `*Room:* ${selectedRoom?.name}%0A` +
      `*Dates:* ${checkIn} to ${checkOut} (${nights} nights)%0A` +
      `*Guests:* ${guests} Person(s)%0A` +
      `*Est. Total:* R ${totalPrice.toLocaleString()}%0A` +
      `*Comments:* ${comments || 'None'}`;
    
    // Colesberg South African standard WhatsApp link
    return `https://wa.me/27821234567?text=${message}`;
  };

  const resetForm = () => {
    setStep(1);
    setRoomId(selectedRoomId || '');
    setCheckIn('');
    setCheckOut('');
    setGuests(2);
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
    setNights(0);
    setTotalPrice(0);
    setInquiryCode('');
    onClose();
  };

  const selectedRoom = ROOMS_DATA.find(r => r.id === roomId);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl bg-[#FBF9F6] rounded-2xl shadow-2xl overflow-hidden z-10 border border-brand-gold/20 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-[#2F5D50] text-white px-6 py-4 flex items-center justify-between border-b border-brand-gold/20">
              <div>
                <h3 className="font-serif text-xl md:text-2xl tracking-wide text-[#dfc599]">Book Your Karoo Haven Stay</h3>
                <p className="text-xs text-slate-300 font-sans mt-0.5">Secure Booking Inquiry • Colesberg, South Africa</p>
              </div>
              <button 
                onClick={resetForm} 
                className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Steps & Content Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {inquiryCode ? (
                /* SUCCESS STATE */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#2F5D50]/10 text-[#2F5D50] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#2F5D50] mb-2">Inquiry Successfully Submitted!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-brand-dark">{name}</strong>. We have received your booking inquiry and put a temporary hold on your selected dates.
                  </p>

                  {/* Summary Slip */}
                  <div className="w-full max-w-md bg-white border border-brand-gold/30 rounded-xl p-5 text-left shadow-sm mb-6 font-sans">
                    <div className="flex justify-between border-b border-slate-100 pb-3 mb-3">
                      <span className="text-xs text-slate-500 uppercase tracking-wider">Inquiry Reference</span>
                      <strong className="text-[#C9A66B] font-mono tracking-wider">{inquiryCode}</strong>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Selected Accommodation:</span>
                        <span className="font-medium text-brand-dark">{selectedRoom?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Dates Selected:</span>
                        <span className="font-medium text-brand-dark">{checkIn} to {checkOut}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Duration:</span>
                        <span className="font-medium text-brand-dark">{nights} Nights</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Guests Registered:</span>
                        <span className="font-medium text-brand-dark">{guests} Guests</span>
                      </div>
                      <div className="border-t border-dashed border-slate-200 my-3 pt-3 flex justify-between text-base font-semibold">
                        <span className="text-[#2F5D50]">Estimated Total:</span>
                        <span className="text-[#2F5D50]">R {totalPrice.toLocaleString()} ZAR</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 max-w-md mb-8">
                    An email copy was drafted to <span className="font-semibold">{email}</span>. One of our guest hosts will email or call you shortly to confirm the availability and process secure deposit payment.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <a 
                      href={getWhatsAppLink()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      Instantly Confirm via WhatsApp
                    </a>
                    <button 
                      onClick={resetForm}
                      className="flex-1 bg-brand-dark hover:bg-slate-800 text-white py-3 px-5 rounded-lg font-medium text-sm transition-colors cursor-pointer"
                    >
                      Close Summary
                    </button>
                  </div>
                </motion.div>
              ) : step === 1 ? (
                /* STEP 1: DATE & ACCOMMODATION SELECTION */
                <form onSubmit={handleNext} className="space-y-6">
                  <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 text-xs text-[#2F5D50] flex gap-2 items-start">
                    <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                    <span>Colesberg is highly popular! Book in advance to secure comfortable sleeping beds on your long N1 roadtrip journey.</span>
                  </div>

                  {/* Room selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      1. Choose Accommodation
                    </label>
                    <select
                      value={roomId}
                      onChange={(e) => setRoomId(e.target.value)}
                      required
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark"
                    >
                      <option value="">Select a luxurious room...</option>
                      {ROOMS_DATA.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name} — R {room.price.toLocaleString()} / night
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Check In / Out Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        2. Check-In Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input
                          type="date"
                          value={checkIn}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setCheckIn(e.target.value)}
                          required
                          className="w-full bg-white border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        3. Check-Out Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input
                          type="date"
                          value={checkOut}
                          min={checkIn || new Date().toISOString().split('T')[0]}
                          onChange={(e) => setCheckOut(e.target.value)}
                          required
                          className="w-full bg-white border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      4. Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full bg-white border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark"
                      >
                        <option value={1}>1 Guest</option>
                        <option value={2}>2 Guests</option>
                        <option value={3}>3 Guests</option>
                        <option value={4}>4 Guests</option>
                        <option value={5}>5+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Live Price Receipt Slip */}
                  {nights > 0 && selectedRoom && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-white border border-brand-gold/30 rounded-xl p-4 space-y-2 shadow-sm font-sans"
                    >
                      <div className="flex justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                        <span>Rate / Night:</span>
                        <span>R {selectedRoom.price.toLocaleString()} ZAR</span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Calculated Stay:</span>
                        <span>{nights} nights</span>
                      </div>
                      <div className="flex justify-between text-sm font-semibold text-[#2F5D50] pt-2 border-t border-dashed border-slate-200">
                        <span>Estimated Total Cost:</span>
                        <span>R {totalPrice.toLocaleString()} ZAR</span>
                      </div>
                    </motion.div>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#2F5D50] hover:bg-brand-green-light text-white py-3 px-6 rounded-lg font-medium text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      Continue to Contact Details
                    </button>
                  </div>
                </form>
              ) : (
                /* STEP 2: PERSONAL CONTACT INFORMATION */
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
                      Review & Provide Details
                    </h4>
                    <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs text-slate-600 flex justify-between items-center mb-6">
                      <div>
                        <p className="font-semibold text-brand-dark">{selectedRoom?.name}</p>
                        <p className="mt-0.5">{checkIn} to {checkOut} • {nights} nights • {guests} guests</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-[#C9A66B] hover:underline text-xs font-semibold cursor-pointer"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                        className="w-full bg-white border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="johndoe@example.com"
                          required
                          className="w-full bg-white border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+27 82 123 4567"
                          required
                          className="w-full bg-white border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Comments */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Special Requests / Comments
                    </label>
                    <textarea
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      placeholder="E.g., early arrival check-in, dietary restrictions for breakfast, twin beds setup..."
                      rows={3}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark resize-none"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 py-3 rounded-lg font-medium text-sm transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#2F5D50] hover:bg-brand-green-light text-white py-3 rounded-lg font-medium text-sm shadow-md transition-all cursor-pointer"
                    >
                      Submit Booking Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
