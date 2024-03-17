import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CriteriaPage from '../src/pages/CriteriaPage';
import CriteriaPage2 from './pages/CriteriaPage2';
import CriteriaPage3 from './pages/CriteriaPage3';
import CriteriaPage4 from './pages/CriteriaPage4';
import CriteriaPage5 from './pages/CriteriaPage5';
import CriteriaPage6 from './pages/CriteriaPage6';
import CriteriaPage7 from './pages/CriteriaPage7';
import Ssr from './pages/Ssr';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";

function App() {
  useGSAP(() => {
    gsap.from(".anime", { duration: 1, y: 100, opacity: 0, ease: 'power2.out' });

  })
  const Btns = [
    { label: "CRITERIA 1", component: <CriteriaPage /> },
    { label: "CRITERIA 2", component: <CriteriaPage2 /> },
    { label: "CRITERIA 3", component: <CriteriaPage3 /> },
    { label: "CRITERIA 4", component: <CriteriaPage4 /> },
    { label: "CRITERIA 5", component: <CriteriaPage5 /> },
    { label: "CRITERIA 6", component: <CriteriaPage6 /> },
    { label: "CRITERIA 7", component: <CriteriaPage7 /> },
    { label: "SSR", component: <Ssr /> },
  ];

  // Set the default component here
  const [selectedComponent, setSelectedComponent] = useState(<CriteriaPage />);

  const renderComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <div className='w-full z-10 anime1'>
        <Navbar/>
      </div>
      <div className='md:w-full md:w-[5rem] anime h-[45rem]'>
        <motion.div className="flex-container flex-wrap flex gap-3 justify-center align-center">
          {Btns.map((button, index) => (
            <div className='button-container' key={index}>
              <Buttons Btn={button.label} component={button.component} renderComponent={renderComponent} />
            </div>
          ))}
        </motion.div>
        {selectedComponent && <div>{selectedComponent}</div>}
      </div>
      <div className='anime1'>
        <Footer />
      </div>
    </>
  );
}

export default App;