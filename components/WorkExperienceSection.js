import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTextCharacter from './AnimatedTextCharacter';

const WorkExperienceSection = () => {
  return (
    <div className="flex">
      <motion.div
        initial={{ backgroundSize: 0 }}
        animate={{ backgroundSize: '100% 100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{
          backgroundImage: `url(${"/blue.jpg"})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
        className="h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
      >
       
      </motion.div>
     
      <div className="flex flex-wrap justify-center -mx-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration:1, ease: 'easeInOut', delay: 0.2 }}
          className="bg-blue-200 rounded-lg p-6 shadow-md mx-4 mb-8 w-full md:w-auto"
        >
          <h2 className="text-3xl font-bold mb-4">NEIGHBOURHOD</h2>
          
          <p className="mb-2">Web Development Lead</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Developed a society management application with React.js, Django, MySQL
            </li>
            
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          className="bg-blue-300 rounded-lg p-6 shadow-md mx-4 mb-8 w-full md:w-auto"
        >
          <h2 className="text-3xl font-bold mb-4">INDIAN STATISTICAL INSTITUTE</h2>
          <p className="mb-2">Kolkata</p>
         
          <p className="mb-2">Cryptography Research Intern</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Developed an application to automate randomness testing for given samples.</li>
            <li>
              Contributed to advanced Cryptography algorithms with the help of Randomness,
              Unpredictability and Testing.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
          className="bg-blue-400 rounded-lg p-6 shadow-md mx-4 mb-8 w-full md:w-auto"
        >
          <h2 className="text-3xl font-bold mb-4">CARAVEL LABS</h2>
          
          <p className="mb-2">Consulting Engineering Intern, Remote</p>
          <p className="mb-2">Headquarters - Seattle</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Worked in a team of 12 engineers in iterative and incremental utilizing the SCRUM
              methodology and SOLID Principles.
            </li>
            <li>
              Developed features for a 16-paged web app aimed at enhancing collaboration and
              knowledge sharing among underprivileged kids.
            </li>
            <li>
              Tech Stack: Next.js, Node.js, NO SQL (Azure COSMOS DB), TypeScript, Material UI,
              Figma, AI driven recommendation implemented by Linear Regression using a single
              variable for suggestions, upgraded the fetch time by 40% and accuracy greater than
              90%.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;