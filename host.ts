import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open Menu</button>
      {isOpen && (
        <div>
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
