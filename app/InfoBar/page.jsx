import React from 'react';
import shapes from "/public/shablock.png"
import Image from 'next/image';
const InfoBar = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      textAlign: 'center', 
      padding: '100px 0', 
      fontFamily: 'Arial, sans-serif' ,
      display:"flex",
      justifyContent:"center",
      gap:"50px"
    }}>
      <Image
      src={shapes}
      width={100}
      height={100}
      />

      <div>
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
    </div>
  );
};

export default InfoBar;
