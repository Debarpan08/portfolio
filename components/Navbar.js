// import React from 'react';
// import Image from 'next/image';
// import AnimatedTextCharacter from './AnimatedTextCharacter';

// const Navbar = () => {
//   return (
//     <nav className="bg-black py-4 shadow-md fixed w-full z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
//         <div className="flex items-stretch">
//           <Image
//             src={"/bg.jpeg"}
//             alt="Your Picture"
//             width={96}
//             height={96}
//             className="h-12 w-12 rounded-full"
//           />
//           <div className="text-9xl font-bold text-white font-serif"><AnimatedTextCharacter text="What's up web surfers" /></div>
//         </div>
//         <div className="hidden md:block">
//           {/* Add your navigation links here */}
//         </div>
//         <div className="md:hidden">
//           {/* Add your mobile menu toggle button here */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;























// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <>
          
//     <nav className="bg-blue-200 py-8 shadow-md  w-full z-10 rounded-lg">
//       <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//         <div className="flex items-center">
//         </div>
//         <div className="hidden md:flex space-x-12">
//           <Link
//             href="/about"
//             className="text-2xl font-serif font-semibold text-white hover:text-gray-900"
//           >
//             About
//           </Link>
//           <Link
//             href="/projects"
//             className="text-2xl font-serif font-semibold text-white hover:text-gray-900"
//           >
//             Projects
//           </Link>
//           <Link
//             href="/contact"
//             className="text-2xl font-serif font-semibold text-white hover:text-gray-900"
//           >
//             Contact
//           </Link>
//         </div>
//         <div className="md:hidden">
//           {/* Add your mobile menu toggle button here */}
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;


















import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-200 py-3 shadow-md w-screen  rounded-lg">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          {/* Your logo or profile picture */}
        </div>
        <div className="flex justify-between flex-grow">
          <Link href="/about" className="text-4xl font-thin font-semibold text-blue-900 hover:text-white flex-grow text-center">
            ABOUT
          </Link>
          <Link href="/projects" className="text-4xl font-thin font-semibold text-blue-900 hover:text-white flex-grow text-center">
            PROJECTS
          </Link>
          <Link href="/connect" className="text-4xl font-thin font-semibold text-blue-900 hover:text-white flex-grow text-center">
            CONNECT 
          </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
