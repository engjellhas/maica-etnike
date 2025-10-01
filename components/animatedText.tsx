'use client';
import { motion } from 'framer-motion';
import React from 'react';

const AnimatedText = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.h1
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            initial={{ scale: 0.95, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="titleFont text-4xl md:text-7xl mb-2 font-light"
        >
            {children}
        </motion.h1>
    );
};

export default AnimatedText;
