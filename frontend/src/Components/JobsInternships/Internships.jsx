import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  showJobsInternships } from '../JobsInternshipSlice';

const Internships = () => {
    const dispatch = useDispatch();
    const { data: jobs, loading, error } = useSelector(state => state.jobsInternshipsStore);
    
    useEffect(() => {
        dispatch(showJobsInternships());
    }, [dispatch]);

    const filteredJobs = jobs ? jobs.filter(item => item.jobOrInternship === 'internship') : [];


    const formatDate = (dateString) => {
        const timestampInMilliseconds = dateString * 1000;
    
        const date = new Date(timestampInMilliseconds);
    
        // Get the year, month, and day
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month; 

        let day = date.getDate();
        day = day < 10 ? '0' + day : day; 
    
        // Format the date as 'YYYY-MM-DD'
        const formattedDate = `${year}-${month}-${day}`;
    
        // Get the current date
        const currentDate = new Date().toISOString().slice(0, 10);
    
        // Check if the date is today or yesterday
        if (formattedDate === currentDate) {
            return 'Today';
        } else if (formattedDate === new Date(Date.now() - 864e5).toISOString().slice(0, 10)) {
            return 'Yesterday';
        } else {
            return formattedDate;
        }
    };

    return (
        <div className="font-[Chivo] h-full w-full overflow-hidden">
            {loading && (
                <div className="flex items-center justify-center mt-10">
                    <div className="w-6 h-6 mr-3 border-t-2 border-b-2 border-gray-500 rounded-full animate-spin"></div>
                    <p className="text-secondary">Loading...</p>
                </div>
            )}
            {error && (
                <p className="text-center text-red-500 mt-3">
                    <span className="font-bold">Error:</span> {error}
                </p>
            )}
            {!loading && !error && jobs.length === 0 && (
                <p className="text-center mt-3">No internships available.</p>
            )}
            {!loading && !error && jobs.length > 0 && (
                <>
                   
                    <table className="w-full md:min-w-full   rounded-lg">
                        <thead className=''>
                            <tr>
                                <th className=''>

                                </th>
                                <th className="  text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700 ">
                                <span className='block sm:hidden'>TITLE</span>
                                    <span className='hidden sm:block'> JOB TITLE</span>
                                </th>
                                <th className="  text-left  lg:px-2 px-2 py-4 text-xs sm:text-base text-gray-700">DESCRIPTION</th>

                                <th className="text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700 ">
                                    <span className='block sm:hidden'>ISSUE</span>
                                    <span className='hidden sm:block'> ISSUE DATE</span>
                                    </th>
                                <th className=" text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700 ">
                                
                                <span className='block sm:hidden'>STATUS</span>
                                    <span className='hidden sm:block'>JOB STATUS</span>
                                </th>

                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {filteredJobs.map((item, id) => (
                               <React.Fragment key={id} >
                                <tr >
                                    <td className='px-4 '>
                                        <input type="checkbox" />
                                    </td>
                                    <td className="  text-left text-gray-500 lg:px-8 px-1 py-4 text-sm sm:text-base">{item.title}</td>
                                    <td className=" text-left  text-gray-500 lg:px-8 px-1 py-4 text-sm sm:text-base">{item.description}</td>
                                    <td className=" text-left  text-gray-500 lg:px-8 px-1  py-4 text-sm sm:text-base">{formatDate(item.issue)}</td>
                                   
                                    <td className="text-left text-green-500  lg:px-8 px-1 py-4 text-sm sm:text-base">{item.status}</td>
                                  
                                </tr>

                              

                                </React.Fragment>


                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default Internships;
