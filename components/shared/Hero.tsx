import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative z-40 bg-[#09111f] text-white mt-10">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Read more books Meet great people
          </motion.h1>
          <motion.p
            className="text-lg mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The best reading or listening experience on any computer, tablet and
            smartphone. Read or listen anywhere, anytime, online or offline.
            Personalize your settings, follow your progress, archive your
            highlights and notes automatically: Glose is the ultimate reading
            hub.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
