import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_kvyx5j9', // Replace with your service ID
      'template_ztedftm', // Replace with your template ID
      form.current,
      'YSdD6gF5ZXVuGxhl-' // Replace with your public key
    )
    .then((result) => {
      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      form.current.reset();
    })
    .catch((error) => {
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pavneetbomrah@gmail.com',
      href: 'mailto:pavneetbomrah@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9818932172',
      href: 'tel:+919818932172'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Delhi, India',
      href: 'https://maps.google.com/?q=Delhi,India'
    }
  ];

  return (
    <div className="w-full p-5 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="orbitron text-[28px] font-semibold text-white mb-4">Contact Me</div>
        <div className="w-[40px] bg-[var(--orange-yellow-crayola)] h-[5px] rounded-[10px] mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">
              Let's work together!
            </h2>
            <p className="text-gray-300 text-sm mb-10">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out via my contact information below.
            </p>
            
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="text-[var(--orange-yellow-crayola)] p-2 bg-[var(--jet)] rounded-lg group-hover:bg-[var(--orange-yellow-crayola)] group-hover:text-white transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-gray-400">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Send me a message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 bg-[var(--jet)] border border-[var(--onyx)] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 bg-[var(--jet)] border border-[var(--onyx)] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-[var(--jet)] border border-[var(--onyx)] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 bg-[var(--orange-yellow-crayola)] text-gray-900 font-medium rounded-lg hover:bg-orange-500 transition-colors"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
              
              {submitStatus && (
                <div className={`p-3 rounded-lg ${submitStatus.success ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;