"use client"

import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-center py-12">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
      >
        <h1 className="text-4xl font-extralight mb-6 text-center">MY PROJECTS</h1>
        <div className="flex flex-wrap justify-center -mx-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="bg-yellow-200 rounded-lg p-6 shadow-md mx-4 mb-8 w-full md:w-auto"
          >
            <h2 className="text-2xl font-bold mb-4">ArtiShirt | AI Powered Website</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li>Built a 3D website using React.js and Three.js.</li>
              <li>Enabled user customization of their own T-shirt using logos made by AI according to the prompt the user inputs.</li>
              <li>Used the DALL-E API to fetch the logo according to the choices of the client.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="bg-yellow-300 rounded-lg p-6 shadow-md mx-4 mb-8 w-full md:w-auto"
          >
            <h2 className="text-2xl font-bold mb-4">ChatSpot | Chat Application</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li>Developed a Messaging App using Socket.io, HTML, CSS, and JavaScript.</li>
              <li>Implemented chat servers for texting multiple people at once.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
            className="bg-yellow-400 rounded-lg p-6 shadow-md mx-4 mb-8 w-full md:w-auto"
          >
            <h2 className="text-2xl font-bold mb-4">Goerli Airdrop Hunter</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li>Built a Web3 airdrop hunter application with the help of Solidity (Writing Smart Contract).</li>
              <li>Used JavaScript (React & Testing), Ethers.js (Blockchain Interaction), Alchemy (Blockchain Connection), and Netlify (Cloud Service).</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;