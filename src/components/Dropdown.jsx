import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = ({ buttonContent, dropdownItems }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <motion.div whileHover={{ scale: 1.1 }} className="relative inline-block z-30" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-white  text-[1rem] flex gap-1 px-4 py-2"
      >
        {buttonContent} <FaChevronDown className="mt-1 opacity-85" />
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute flex flex-col w-[20rem] z-30 mt-2 p-2 bg-slate-800 rounded-md shadow-md"
          >
            {dropdownItems.map((item, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                href={item.link}
                className="flex gap-1"
              >
                {item.text}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dropdown;