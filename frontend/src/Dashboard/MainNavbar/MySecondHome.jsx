// import React, { useState, useEffect } from 'react';

// function MySecondHome() {
//   const [name, setName] = useState("");
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const fetchName = async () => {
//       setName("Welcome back Arbaz");
//     };

//     fetchName();

//     const intervalId = setInterval(() => {
//       setIsVisible((prevVisible) => !prevVisible);
//     }, 2000); 
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className='w-full h-[70vh] bg-blue-100 font-[Chivo] px-10'>
//       <h1 className='w-full h-28 text-gray-500 text-md flex items-center'>
//         You are here: Home / Social Swirl Dashboard
//       </h1>

//       <div className='w-full h-64 text-blue-400 flex items-center justify-center'>
//         <h1 
//           id='welcome' 
//           className={`text-4xl font-semibold welcome-animation ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
//           style={{ transition: 'opacity 1s ease-in-out' }}
//         >
//           {name}
//         </h1>
//       </div>

//     </div>
//   );
// }

// export default MySecondHome;



import React from 'react'

function MySecondHome() {
  return (
    <div></div>
  )
}

export default MySecondHome