import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { portfolioProfile } from '../../data/portfolioData';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDFBF7] pointer-events-none"
    >
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-[#2D241E] text-[#FDFBF7] flex items-center justify-center shadow-lg"
        >
          <Sparkles className="w-6 h-6 text-[#E0A97E]" />
        </motion.div>
        <motion.h2
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-lg font-bold text-[#2D241E] tracking-tight"
        >
          {portfolioProfile.shortName}
        </motion.h2>
        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-xs text-[#7A695B] mt-1"
        >
          {portfolioProfile.subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};
