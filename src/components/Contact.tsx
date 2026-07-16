import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Navigation, Clock } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }
    
    // Simulate submission
    setIsSubmitted(true);
    
    // Reset after some time or keep showing success
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-[#FBF9F6] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-sans font-semibold text-[#C9A66B] uppercase tracking-[0.2em] block">
            Location & Contacts
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F5D50]">
            Get In Touch With Us
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            Have questions about group bookings, amenities, or route conditions? Fill out our form or contact us immediately via WhatsApp or phone call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Luxurious Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-10 shadow-md border border-brand-gold/10">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-inner">
                    <CheckCircle className="w-10 h-10 stroke-[2]" />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-dark">Message Sent Successfully!</h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto">
                    Thank you for writing to Karoo Haven Guest House. Our reservation manager will review your query and respond directly to your email inbox within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-[#C9A66B] hover:text-[#2F5D50] font-sans font-semibold text-xs tracking-wider uppercase border-b border-[#C9A66B] pb-1 transition-colors hover:border-[#2F5D50] cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-dark mb-1">
                      Send a Direct Message
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-light">
                      We aim to respond to all web submissions promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ayanda Mokhothu"
                        required
                        className="w-full bg-[#FBF9F6] border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. ayanda@example.com"
                        required
                        className="w-full bg-[#FBF9F6] border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Route Stopovers / Group Reservation"
                      className="w-full bg-[#FBF9F6] border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we assist you?"
                      rows={5}
                      required
                      className="w-full bg-[#FBF9F6] border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-dark resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-[#2F5D50] hover:bg-brand-green-light text-white font-medium text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Contact details and High-end Interactive Route Map Placeholder */}
          <div className="lg:col-span-5 space-y-8 font-sans">
            
            {/* Quick Contact Info */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-gold/10 shadow-sm space-y-6">
              <h3 className="font-serif text-lg md:text-xl font-bold text-brand-dark">
                Official Directory
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Physical Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#C9A66B] flex items-center justify-center shrink-0 border border-slate-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Physical Address</p>
                    <p className="text-brand-dark font-medium mt-0.5 leading-relaxed">
                      36 Stockenstrom Street, Colesberg, 9795, Great Karoo, South Africa
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#C9A66B] flex items-center justify-center shrink-0 border border-slate-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Telephone Line</p>
                    <a href="tel:+27821234567" className="text-brand-dark font-medium hover:text-[#2F5D50] mt-0.5 block hover:underline transition-colors">
                      +27 (0)82 123 4567
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#C9A66B] flex items-center justify-center shrink-0 border border-slate-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email Address</p>
                    <a href="mailto:stay@karoohaven.co.za" className="text-brand-dark font-medium hover:text-[#2F5D50] mt-0.5 block hover:underline transition-colors">
                      stay@karoohaven.co.za
                    </a>
                  </div>
                </div>

                {/* Reception Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#C9A66B] flex items-center justify-center shrink-0 border border-slate-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Reception Check-In</p>
                    <p className="text-brand-dark font-medium mt-0.5 leading-tight">
                      Daily: 14:00 to 20:00 <span className="text-slate-400 font-normal">(Late check-ins available on request)</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/27821234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-5 rounded-xl font-medium text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Custom N1 Midway Interactive Route Map Graphic (Sophisticated Google Maps alternative) */}
            <div className="bg-white rounded-2xl p-6 border border-brand-gold/10 shadow-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif text-sm font-bold text-[#2F5D50] uppercase tracking-wider">
                    Our Strategic N1 Midpoint Location
                  </h4>
                  <Navigation className="w-4 h-4 text-[#C9A66B]" />
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed mb-4">
                  Colesberg is the absolute halfway centerpoint between South Africa's primary centers. Pull off the N1 safely straight to our gates.
                </p>
              </div>

              {/* Styled route schematic map */}
              <div className="relative bg-[#2F5D50]/90 rounded-xl h-44 border border-brand-gold/25 p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A66B_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Cities Connection Line */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 50,30 Q 150,80 280,130" 
                    fill="none" 
                    stroke="#C9A66B" 
                    strokeWidth="3" 
                    strokeDasharray="4 6" 
                    className="animate-dash"
                  />
                </svg>

                {/* Joburg Label */}
                <div className="relative z-10 self-start ml-4 text-left">
                  <p className="text-[10px] font-bold text-[#dfc599] uppercase tracking-wider">Pretoria / JHB</p>
                  <span className="text-[9px] text-slate-300 block">N1 South bound</span>
                </div>

                {/* Colesberg pulsing core marker */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="relative flex h-5 w-5 justify-center items-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C9A66B] border-2 border-[#2F5D50] shadow-md"></span>
                  </div>
                  <p className="text-xs font-serif font-bold text-white tracking-widest uppercase mt-1 drop-shadow-sm bg-[#2F5D50]/80 px-2 py-0.5 rounded-md border border-brand-gold/20">
                    Colesberg
                  </p>
                  <p className="text-[9px] text-amber-300 font-semibold uppercase tracking-wider mt-0.5">Karoo Haven</p>
                </div>

                {/* Cape Town Label */}
                <div className="relative z-10 self-end mr-4 text-right">
                  <p className="text-[10px] font-bold text-[#dfc599] uppercase tracking-wider">Cape Town / PE</p>
                  <span className="text-[9px] text-slate-300 block">N1 North bound</span>
                </div>
              </div>

              {/* Google Maps External Navigation Launcher */}
              <div className="mt-4 flex gap-2">
                <a 
                  href="https://maps.google.com/?q=36+Stockenstrom+Street,+Colesberg,+South+Africa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center w-full bg-slate-50 hover:bg-slate-100 text-brand-dark border border-slate-200 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
