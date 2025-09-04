import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { api } from '../utils/api';

const Contact = () => {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      await api.submitContact(values);
      setIsSubmitted(true);
      resetForm();
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative bg-[#1a1a1a]">
      
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#00f5ff]" data-text="Transmission Hub">Contact</h2>
      <p className="text-center text-[#b967ff] mb-12 max-w-2xl mx-auto">Ready to collaborate? Send a message and I'll respond ASAP</p>
      
      {isSubmitted ? (
        <div className="max-w-md mx-auto p-6 bg-[#00f5ff] bg-opacity-10 border border-[#00f5ff] rounded-lg text-center">
          <div className="w-16 h-16 bg-[#00f5ff] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0d0d12]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-[#00f5ff] text-lg font-medium">Message successfully transmitted!</p>
          <p className="text-gray-300 mt-2">I'll respond within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-[#b967ff] text-sm font-medium mb-2">
              
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-4 bg-[rgba(13,13,18,0.7)] border border-[rgba(0,245,255,0.3)] rounded-lg text-white focus:outline-none focus:border-[#00f5ff] focus:ring-2 focus:ring-[#00f5ff] focus:ring-opacity-20 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#b967ff] text-sm font-medium mb-2">
              
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-4 bg-[rgba(13,13,18,0.7)] border border-[rgba(0,245,255,0.3)] rounded-lg text-white focus:outline-none focus:border-[#00f5ff] focus:ring-2 focus:ring-[#00f5ff] focus:ring-opacity-20 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#b967ff] text-sm font-medium mb-2">
              
            </label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              rows="5"
              className="w-full p-4 bg-[rgba(13,13,18,0.7)] border border-[rgba(0,245,255,0.3)] rounded-lg text-white focus:outline-none focus:border-[#00f5ff] focus:ring-2 focus:ring-[#00f5ff] focus:ring-opacity-20 transition-all resize-none"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          {error && (
            <div className="mb-6 p-3 bg-[#ff2a6d] bg-opacity-10 border border-[#ff2a6d] rounded-lg text-center">
              <p className="text-[#ff2a6d]">{error}</p>
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full py-4 bg-gradient-to-r from-[#0d0d12] to-[#00f5ff] text-[#0d0d12] font-bold rounded-lg hover:opacity-50 transition-all flex items-center justify-center disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0d0d12]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Transmitting...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
      
      <div className="max-w-md mx-auto mt-16">
        <h3 className="text-xl font-bold text-center text-[#00f5ff] mb-6">Direct Channels</h3>
        <div className="flex justify-center gap-6">
          <a href="mailto:varunsunchu59@gmail.com" className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#b967ff] to-[#b967ff] text-[#0d0d12] hover:scale-110 transition-transform group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="https://github.com/sunnyvarun" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#b967ff] to-[#b967ff] text-[#0d0d12] hover:scale-110 transition-transform group">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
          </a>
          <a href="https://linkedin.com/in/varunkanth059" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#b967ff] to-[#b967ff] text-[#0d0d12] hover:scale-110 transition-transform group">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="35" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg>
          </a>
          <a href="https://flowcv.com/resume/i79mf228livr" className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#b967ff] to-[#b967ff] text-[#0d0d12] hover:scale-110 transition-transform group">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="30" viewBox="0 0 128 128"><path d="M30.13 51.31h20a1.75 1.75 0 0 0 1.75-1.75v-5.12a11.067 11.067 0 0 0-4.4-8.832 9.977 9.977 0 1 0-14.713 0 11.08 11.08 0 0 0-4.387 8.832v5.12a1.75 1.75 0 0 0 1.75 1.75zm10-28.894a6.477 6.477 0 1 1-6.477 6.477 6.485 6.485 0 0 1 6.473-6.476zM31.88 44.44a7.576 7.576 0 0 1 3.87-6.594 9.857 9.857 0 0 0 8.754 0 7.56 7.56 0 0 1 3.876 6.594v3.37h-16.5z"/><path d="M112.654 4.75H15.346A1.75 1.75 0 0 0 13.6 6.5v115a1.75 1.75 0 0 0 1.75 1.75h97.308a1.75 1.75 0 0 0 1.75-1.75V6.5a1.75 1.75 0 0 0-1.754-1.75zm-1.75 115H17.1V8.25h93.8z"/><path d="M26.346 65.75h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 80.194h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 109.083h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 94.639h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM64 22.417h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 36.861h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 51.306h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5z"/></svg>
          </a>
          <a href="tel:9550741375" className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#b967ff] to-[#b967ff] text-[#0d0d12] hover:scale-110 transition-transform group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;