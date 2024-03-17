import React, { useState } from 'react';

function Buttons({ Btn, component, renderComponent }) {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(true);
    // Call the renderComponent function to update the selectedComponent
    renderComponent(component);
  };

  return (
    <div className="mt-5">
      <button
        className="bg-white text-blue-800 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:border-red-300 font-bold py-4 px-5 rounded shadow-md transition-all duration-300"
        onClick={handleButtonClick}
      >
        {Btn}
      </button>

      {showComponent && <div>{component}</div>}
    </div>
  );
}

export default Buttons;