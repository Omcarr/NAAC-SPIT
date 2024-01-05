import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Buttons from './components/Buttons';
import CriteriaPage from '../src/pages/CriteriaPage';
import CriteriaPage2 from './pages/CriteriaPage2';
import CriteriaPage3 from './pages/CriteriaPage3';
import CriteriaPage4 from './pages/CriteriaPage4';
import CriteriaPage5 from './pages/CriteriaPage5';
import CriteriaPage6 from './pages/CriteriaPage6';
import CriteriaPage7 from './pages/CriteriaPage7';
import Ssr from './pages/Ssr';

// Import your other components

function App() {
  const Btns = [
    { label: "CRITERIA 1", component: <CriteriaPage /> },
    { label: "CRITERIA 2", component: <CriteriaPage2 /> },
    { label: "CRITERIA 3", component: <CriteriaPage3 /> },
    { label: "CRITERIA 4", component: <CriteriaPage4/> },
    { label: "CRITERIA 5", component: <CriteriaPage5 /> },
    { label: "CRITERIA 6", component: <CriteriaPage6 /> },
    { label: "CRITERIA 7", component: <CriteriaPage7 /> },
    { label: "SSR", component: <Ssr/> },
    
  ];

  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <motion.div className="flex gap-3 justify-center align-center">
        {Btns.map((button, index) => (
          <div key={index}>
            <Buttons Btn={button.label} component={button.component} />
          </div>
        ))}
      </motion.div>

      {selectedComponent && <div>{selectedComponent}</div>}
    </>
  );
}

export default App;
