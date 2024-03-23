
"use client"
import Card from "@/components/Card";
import Image from "next/image";
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar";
import AnimatedTextCharacter from "@/components/AnimatedTextCharacter";
import HorizontalScroll from "@/components/horizontal";
import WorkExperienceSection from "@/components/WorkExperienceSection";
export default function Home() {
  return (
    <>

      <Navbar />
      <div className="flex items-center justify-center h-screen relative">
        <motion.div
          initial={{ backgroundSize: 0, opacity: 0 }}
          animate={{ backgroundSize: '100% 100%', opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            backgroundImage: "url(/mural.jpeg)",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
          className="h-screen w-screen bg-cover bg-center bg-no-repeat absolute inset-0 flex items-center justify-center"
        >
          <motion.div initial={{ backgroundSize: 0 }}
            animate={{ backgroundSize: '100% 100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              backgroundImage: "url(/bg.jpg)",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}>
            <Image
              src={"/bg.jpeg"}
              width={316}
              height={206}
              alt="Your Profile Picture"
              className="h-80 w-80 rounded-full"
            />
          </motion.div>
          <div className="text-14xl  font-bold text-black font-extralight"><AnimatedTextCharacter text="Hi!I am a Full Stack Blockchain Developer!" />

          </div>


        </motion.div>

      </div>
      <div className="flex">
        <div className=" text-14xl justify-center font-bold text-black font-extralight"> <AnimatedTextCharacter text="   SKILLS    " />
          <div><motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="text-black text-4xl text-center max-w-md list-disc "
          >




            <span className="flex justify-self-center"></span>

            <span className="flex justify-center">Next.js</span>
            <span className="flex justify-center">React</span>
            <span className="flex justify-center">Node.js</span>
            <span className="flex justify-center">Express.js</span>
            <span className="flex justify-center">MySQL</span>
            <span className="flex justify-center">Three.js</span>
            <span className="flex justify-center">Tailwind CSS</span>
            <span className="flex justify-center">Material-UI</span>
            <span className="flex justify-center">Sanity.io</span>
            <span className="flex justify-center">Socket.io</span>


            <span className="flex justify-center">Solidity</span>
            <span className="flex justify-center">Thirdweb</span>
            <span className="flex justify-center">Ethers.js</span>
            <span className="flex justify-center">Web3.js</span>
            <span className="flex justify-center">Hardhat</span>
            <span className="flex justify-center">Ganache</span>
            <span className="flex justify-center">Truffle</span>






          </motion.div></div></div>


        <motion.div
          initial={{ backgroundSize: 0 }}
          animate={{ backgroundSize: '100% 100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            backgroundImage: "url(/space.jpg)",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
          className="h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
        >

          <div className="text-14xl font-bold text-white font-serif absolute inset-0 flex items-center justify-center">
            <AnimatedTextCharacter text="I cook things for the web" />
          </div>
        </motion.div>
        <div className="text-14xl flex justify-center font-bold text-black font-extralight">
        </div>
      </div>
      <div className="flex font-thin justify-center"> <AnimatedTextCharacter text="PLACES I HAVE WORKED AT" /></div>
      <WorkExperienceSection/>
    </>
  );
}






















