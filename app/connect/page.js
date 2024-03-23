"use client"


import React from 'react';
import { motion } from 'framer-motion';

const ConnectPage = () => {
  return (
    <div className='flex'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="max-w-8xl mx-auto bg-blue-400 rounded-lg shadow-lg p-8"
      >
        <h1 className="text-4xl text-white font-extralight font-bold mb-6 text-center">CONNECT WITH ME</h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-extralight text-white font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-extralight text-white font-semibold">Email</h3>
              <p className="text-white">jhadebarpan@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-extralight text-white font-semibold">Phone</h3>
              <p className="text-white">+91 8637095185</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
        >
          <h2 className="text-2xl font-extralight text-white font-bold mb-4">Social Media</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-extralight text-white font-semibold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/debarpan-jha-6190511b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-800"
              >
                https://www.linkedin.com/in/debarpan-jha-6190511b9/
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Twitter</h3>
              <a
                href="https://twitter.com/DebarpanJha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-800"
              >
                https://twitter.com/DebarpanJha
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold">GitHub</h3>
              <a
                href="https://github.com/Debarpan08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-800"
              >
                https://github.com/Debarpan08
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Instagram</h3>
              <a
                href="https://www.instagram.com/de_b_entor?igsh=MTZ2bDEzZW42dGFuNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-800"
              >
                https://www.instagram.com/de_b_entor?igsh=MTZ2bDEzZW42dGFuNg==
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
  );
};

export default ConnectPage;