// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
// // import 'Naac-spit/src/index.css'
// function Buttons() {
//   const handleButtonClick = (criteria) => {
//     console.log(`Button clicked with criteria: ${criteria}`);

//   };
//     return (
//         <div className='button-container'>
//           <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 1')}>CRITERIA 1</AwesomeButton>
//           <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 2')}>CRITERIA 2</AwesomeButton>
//           <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 3')}>CRITERIA 3</AwesomeButton>
//           <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 4')}>CRITERIA 4</AwesomeButton>
//           <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 5')}>CRITERIA 5</AwesomeButton>
//           <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 6')}>CRITERIA 6</AwesomeButton>
//           <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 7')}>CRITERIA 7</AwesomeButton>
//           <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('SSR')}>SSR</AwesomeButton>

//         </div>
//       );}

// export default Buttons;

import React,{useState} from 'react'
import CriteriaPage from '../pages/CriteriaPage';

function Buttons({Btn}) {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(true);
  };
  return (
    <div className="">
      <button
        className="bg-white text-red-500 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-red-300 font-bold py-2 px-4 rounded shadow-md transition-all duration-300"
        onClick={handleButtonClick}
      >
        {Btn}
      </button>
      
      {showComponent && <CriteriaPage/>}

    </div>
  )
}

export default Buttons
