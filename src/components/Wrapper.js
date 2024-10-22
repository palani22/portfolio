import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: 'url("/jeremy-bishop-G9i_plbfDgk-unsplash.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
