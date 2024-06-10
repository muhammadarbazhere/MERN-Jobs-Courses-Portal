import React from 'react';

const TaskProgress = () => {
  const sliders = [
    { name: 'Web Design', progress: 90 },
    { name: 'Social Media', progress: 89 },
    { name: 'Graphic Design', progress: 90 },
    { name: 'Human Resource', progress: 95 }
  ];

  return (
    <div className='bg-white px-10 w-2/6 sm:w-3/6 font-[Chivo]'>
         <h1 className='py-2 pt-8  text-gray-700 font-semibold font-[Chivo]'>Task Progress</h1>
    <div className="flex flex-col items-center text-sm">
       
      {sliders.map((slider, index) => (
        <div key={index} className="w-full m-5">
          <div className="mb-2 text-right">{slider.progress}
          <span>%</span>
          </div>
          <div className="relative">
            <div className="absolute -top-7 left-0">{slider.name}</div>
            <input
              type="range"
              min="0"
              max="100"
              value={slider.progress}
              readOnly
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TaskProgress;
