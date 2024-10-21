import React from 'react';

const InfoBar = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      textAlign: 'center', 
      padding: '100px 0', 
      fontFamily: 'Arial, sans-serif' 
    }}>
     <h2 style={{ 
  color: '#030f97', 
  fontSize: '42px', 
  marginBottom: '10px', 
  fontWeight: 'bold' ,
  fontFamily:"poppins",
  fontWeight:"bold"// or use '700' for bold
}}>
  How does it work?
</h2>
      <p style={{ 
        color: '#5D5D6C', 
        fontSize: '14px', 
        margin: 0 ,
        fontFamily:"poppins"
      }}>
        Make a flexible data structure in 2 minutes.<br />
        Use our powerful features to customize your API.
      </p>
    </div>
  );
};

export default InfoBar;
