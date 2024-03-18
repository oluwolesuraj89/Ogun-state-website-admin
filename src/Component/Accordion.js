import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          width: "500px !important",
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        //   borderBottom: '1px solid #ccc',
          cursor: 'pointer',
          backgroundColor: "#fff",
height: 128,
boxShadow: "0px 4px 20px rgba(234, 234, 234, 0.25)",
borderRadius: 20

        }}
        onClick={toggleAccordion}
      >
        <h3>{title}</h3>
        <button>{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <div style={{ padding: '10px' }}>{children}</div>}
    </div>
  );
};

export default Accordion;
