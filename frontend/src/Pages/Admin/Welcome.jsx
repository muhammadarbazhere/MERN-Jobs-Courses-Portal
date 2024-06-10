import React, { useState, useEffect } from 'react';

function Welcome() {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchName = async () => {
      setName("Welcome Muhammad Arbaz");
    };

    fetchName();

    const intervalId = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 2000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=' font-[Chivo] px-10 py-28 bg-blue-100'>
     

      <div className=' text-blue-400 flex items-center justify-center'>
        <h1 
          id='welcome' 
          className={`sm:text-5xl text-3xl welcome-animation ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
          style={{ transition: 'opacity 1s ease-in-out' }}
        >
          {name}
        </h1>
      </div>

    </div>
  );
}

export default Welcome;
