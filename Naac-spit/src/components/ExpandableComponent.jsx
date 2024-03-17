import React from 'react';
import { FaPlus, FaMinus, FaFileDownload } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const ExpandableComponent = ({ mainContent, links, isOpen, openBar }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ opacity: isOpen ? 1 : 0, transition: { duration: 0.3, ease: 'easeInOut' } });
  }, [controls, isOpen]);

  return (
    <motion.div>
      <button
        onClick={openBar}
        className="md:w-[23rem] w-[12rem] h-[3rem] p-2 shadow-md text-white bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
      >
        <div className='flex justify-between'>
          <div className='mt-1 text-[1rem] font-bold'>{mainContent}</div> 
          {isOpen ? (
            <FaMinus style={{ fontSize: '1.5rem' }} className='mt-1' />
          ) : (
            <FaPlus style={{ fontSize: '1.5rem' }} className='mt-1' />
          )}
        </div>
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
      >
        {isOpen && (
          <div className="md:w-[23rem] w-[12rem] bg-sky-700 p-4">
            {links.map(({ name, pdf }, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                <a className='flex ml-3 gap-1 transform hover:scale-x-110 transition-transform duration-300 ease-in-out' href={pdf} target="_blank" rel="noopener noreferrer">
                  <FaFileDownload className='mt-1'/>
                  {name}
                </a>
              </motion.div> 
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ExpandableComponent;
