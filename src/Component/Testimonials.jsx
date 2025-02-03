import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Clock, ThumbsUp, Share2 } from 'lucide-react';
import { ImQuotesRight } from "react-icons/im";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplayPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      content: "Kevin Obote is the kind of colleague you look forward to working with. He possesses deep expertise in his field and excels at putting his knowledge into practice with precision. Kevin is also highly receptive to professional feedback, welcoming constructive criticism with an open mind. He's someone you can engage in meaningful and insightful conversations with, making every interaction both productive and enjoyable.",
      author: "Chris Achinga",
      role: "Software Engineer (Python & JavaScript)",
      rating: 5,
      date: "August 28, 2024",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEolKPJsaqBrg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720518798131?e=1741219200&v=beta&t=XgQ77O6MzWoKweoU1YwVknpnvM4hb_6EIp6u5wjpYBI",
      tags: ["Project Management"]
    },
    // Add more testimonials as needed
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    })
  };

  const swipeConfidenceThreshold = 5000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  useEffect(() => {
    if (!isAutoplayPaused) {
      const timer = setInterval(() => paginate(1), 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoplayPaused]);

  return (
    <div className="py-8 md:py-12 px-4 bg-gray-30 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto relative min-h-[450px] md:h-[400px]">
        {/* Navigation buttons - hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex absolute z-50 inset-0 items-center justify-between pointer-events-none">
          <div className="w-12 pointer-events-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-midnight-blue dark:bg-gray-800/50 rounded-full shadow-lg border border-gray-800 dark:border-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-700 transition-colors"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="text-gray-800 dark:text-gray-300" size={20} />
            </motion.button>
          </div>
          <div className="w-12 pointer-events-auto text-right">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-midnight-blue dark:bg-gray-800/50 rounded-full shadow-lg border border-gray-800 dark:border-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-700 transition-colors"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="text-gray-800 dark:text-gray-300" size={20} />
            </motion.button>
          </div>
        </div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full bg-midnight-blue dark:bg-gray-800 p-4 md:p-8 rounded-xl shadow-2xl border border-white dark:border-gray-700"
          >
            <ImQuotesRight className="absolute top-4 right-4 text-gray-700/40 dark:text-gray-200/40 hidden md:block" size={120} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-4 md:mb-6"
            >
              <div className="relative mx-auto md:mx-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-blue-800 dark:border-blue-500"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-800 dark:bg-blue-500 rounded-full p-1">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ThumbsUp size={12} className="text-white" />
                  </motion.div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-bold text-lg md:text-xl text-gray-800 dark:text-white mb-1">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-blue-800 dark:text-blue-400 font-medium text-sm md:text-base">
                  {testimonials[currentIndex].role}
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-800 dark:text-gray-400 mt-1 justify-center md:justify-start">
                  <Clock size={14} />
                  {testimonials[currentIndex].date}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-4 md:mb-6 justify-center md:justify-start"
            >
              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-600 dark:text-yellow-400" size={16} fill="currentColor" />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative z-10 mb-4 md:mb-6"
            >
              <p className="dark:text-gray-300 text-base md:text-lg leading-relaxed max-h-[200px] md:max-h-none overflow-y-auto">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {testimonials[currentIndex].tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 dark:text-blue-400 text-gray-800 rounded-full text-xs md:text-sm">
                  #{tag}
                </span>
              ))}
            </motion.div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
              >
                <Share2 className="dark:text-gray-400" size={16} />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination dots */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-800 dark:bg-blue-500' : 'bg-gray-300 dark:bg-gray-700'}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
