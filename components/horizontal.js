import { motion, useViewportScroll } from 'framer-motion';
import BlogCard from './Card';
import BlogCard1 from './Card';

const HorizontalScroll = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <div>
      <motion.div
        initial={{ backgroundSize: 0 }}
        animate={{ backgroundSize: '100% 100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{
          backgroundImage: "url(/blue.jpg)",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          transform: `translateX(${scrollYProgress * -100}vw)`, // Adjust the scroll speed here
        }}
        className="h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
      >
        <div className=" mt-24 absolute justify-center inset-0 flex overflow-x-scroll space-x-12">
          <BlogCard1 />
          <BlogCard1 />
          <BlogCard1 />
          
        </div>
      </motion.div>
    </div>
  );
};

export default HorizontalScroll;