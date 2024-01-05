// import React,{useState} from 'react'
// import CriteriaPage from '../pages/CriteriaPage';

// function Buttons({Btn, blocks}) {
//   const [showComponent, setShowComponent] = useState(false);

//   const handleButtonClick = () => {
//     setShowComponent(true);
//   };
//   return (
//     <div className="">
//       <button
//         className="bg-white text-red-500 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-red-300 font-bold py-2 px-4 rounded shadow-md transition-all duration-300"
//         onClick={handleButtonClick}
//       >
//         {Btn}
//       </button>
      
//       {showComponent && {blocks}}

//     </div>
//   )
// }

// export default Buttons

import React, { useState } from 'react';

function Buttons({ Btn, component }) {
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

      {showComponent && <div>{component}</div>}
    </div>
  );
}

export default Buttons;
