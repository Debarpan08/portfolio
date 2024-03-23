"use client"


import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="flex">
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="max-w-8xl  mx-auto bg-lime-200 rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      >

        <div>
          <img
            src={"/chobi.jpeg"}
            
            alt="Profile Photo"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-extralight mb-6 text-center">ABOUT ME</h1>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-extralight mb-4">EDUCATION</h2>
            <div>
              <h3 className="text-xl font-extralight">Heritage Institute of Technology</h3>
              <p className="text-gray-600">Bachelor of Technology (B.Tech) in Computer Science and Engineering. Current GPA-8.53/10</p>

              <h3 className="text-xl font-extralight">Delhi Public School, Ruby Park</h3>
              <p className="text-gray-600">AISSCE- 91.2%</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="mb-8"
          >
           
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
            className="mb-8"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-extralight">Technical Skills</h3>
                <p className="text-gray-600">
                  <p className="text-gray-600">
                    Developer Tools and Database: Git, Azure, VS Code, MongoDB, CosmosDB
                  </p>
                  Languages: JavaScript, HTML/CSS, Tailwind CSS, TypeScript, Java, Solidity, C
                </p>
                <p className="text-gray-600">
                  Frameworks: Next.js, React.js, Node.js, Express.js, Ethers.js, Material-UI
                </p>
              </div>
              <div>
                <h3 className="text-xl font-extralight">Coursework</h3>
                <p className="text-gray-600">
                  OOPS, DBMS, Operating System, Digital Electronics, Data Structures and Algorithms
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* <h1 className="text-4xl font-thin text-white font-bold mb-6 text-center"> Here are a few technologies I've been working with recently:
        JavaScript (ES6+)
        React
        TypeScript
        Python
        C++
        Vector Database</h1> */}
    </div>
  );
};

export default AboutPage;