// remoteJobs1.jsx
import React from 'react';

const RemoteJobs1 = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase">Remote Opportunities</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Discover Your Next Remote Job
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            At Arbaz WebCraft, we connect you with exciting remote job opportunities that allow you to work from anywhere. Join our community of tech professionals and start your journey today!
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  {/* Heroicon name: outline/briefcase */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4V3a1 1 0 00-1-1H5a1 1 0 00-1 1v1m0 0a1 1 0 001 1h6a1 1 0 001-1V3m-7 1v1a1 1 0 001 1h6a1 1 0 001-1V4M4 21v-4a1 1 0 011-1h14a1 1 0 011 1v4m-1-10v6m-4-6v6M4 10v6m0-10a1 1 0 011-1h14a1 1 0 011 1v6H4V10z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium">Tech Jobs</h3>
                <p className="mt-2 text-base">
                  Explore a wide range of remote tech jobs, from software development to IT support, and find the perfect role for you.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  {/* Heroicon name: outline/academic-cap */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v4m-4-4h8m-4 4v2m0 2l2-2m-2 0l-2-2m2 2v-4" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium">Internships</h3>
                <p className="mt-2 text-base">
                  Kickstart your career with remote internships in various tech fields, gaining valuable experience and industry insights.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  {/* Heroicon name: outline/question-mark-circle */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.029 10.71c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .88-.49 1.68-1.25 2.12-.28.17-.46.48-.46.82v.5m0 3.5h.01M8.029 6.71A4.501 4.501 0 0112.529 5c2.485 0 4.5 2.015 4.5 4.5 0 1.38-.56 2.62-1.47 3.47-.91.85-1.47 2.1-1.47 3.47h.01v.01" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium">FAQs</h3>
                <p className="mt-2 text-base">
                  Have questions? Find answers to common queries about remote jobs and internships in our comprehensive FAQ section.
                </p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default RemoteJobs1;