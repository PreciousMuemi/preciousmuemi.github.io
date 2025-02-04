import React, { useState } from 'react';
import { MessageCircle, Send, Mail, Phone, User, FileText, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] py-20">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}>
          <Sparkles className="w-16 h-16 text-[#64ffda] mb-4 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mt-6">Let's Create Together</h1>
          <p className="text-xl mt-4">Have a project in mind? Let's discuss how we can make it happen.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div className="space-y-8" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}>
            {[
              { Icon: Mail, title: "Email Me At", content: "precious.muemi@gmail.com" },
              { Icon: Phone, title: "Call Me At", content: "+254 746 238 725" },
              { Icon: MessageCircle, title: "Response Time", content: "Within 24 hours" }
            ].map(({ Icon, title, content }, index) => (
              <div key={index} className="bg-[#112240] p-6 rounded-lg hover:scale-105 transition-all">
                <Icon className="w-8 h-8 text-[#64ffda] mb-4" />
                <h3 className="text-xl font-bold text-[#ccd6f6]">{title}</h3>
                <p className="mt-2">{content}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-[#112240] p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 60 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            {successMessage ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-[#ccd6f6] mb-4">Thank you, {formData.name}!</h2>
                <p className="text-lg">I'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {['name', 'email'].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                      <div className="relative">
                        {field === 'name' ? <User className="absolute left-3 top-3 w-5 h-5 text-[#64ffda]" /> : 
                         <Mail className="absolute left-3 top-3 w-5 h-5 text-[#64ffda]" />}
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full bg-[#0a192f] border border-[#233554] rounded-lg py-2 pl-12 pr-4 focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-colors"
                          placeholder={`Your ${field}`}
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-5 h-5 text-[#64ffda]" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#0a192f] border border-[#233554] rounded-lg py-2 pl-12 pr-4 focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-colors"
                      placeholder="Project subject"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-[#0a192f] border border-[#233554] rounded-lg p-4 focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-colors"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#64ffda] text-[#0a192f] font-medium py-3 rounded-lg hover:bg-[#64ffda]/90 transition-colors flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
