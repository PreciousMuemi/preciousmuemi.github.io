import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  MessageCircle, 
  CheckCircle, 
  Rocket 
} from 'lucide-react';
import { motion } from 'framer-motion';

const GetStartedSection = () => {
  const steps = [
    {
      icon: FileText,
      text: "Discuss Project Requirements"
    },
    {
      icon: MessageCircle,
      text: "Collaborative Planning"
    },
    {
      icon: Rocket,
      text: "Develop & Iterate"
    },
    {
      icon: CheckCircle,
      text: "Deliver Excellence"
    }
  ];

  return (
    <div className="py-20 bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Want to get in touch?
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          100% satisfaction guaranteed
        </motion.p>

        <motion.p 
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          We will give you an experience that will echo through your memory. Maximum satisfaction for my customers is what we sincerely crave for.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.7,
                staggerChildren: 0.2
              }
            }
          }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <step.icon className="w-12 h-12 text-blue-400 mb-4" />
              <p className="text-gray-300">{step.text}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 text-gray-600 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <button 
            className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            View My Resume
          </button>
          <button 
            className="px-8 py-3 border border-blue-600 rounded-full hover:bg-blue-600/10 transition-colors"
            onClick={() => window.location.href = '/contact'}
          >
            Start Conversation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStartedSection;
