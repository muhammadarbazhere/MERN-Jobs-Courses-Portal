import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJobInternship, showJobsInternships } from '../JobsInternshipSlice';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { IoMdSend } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';

const AllJobs = () => {
    const dispatch = useDispatch();
    const { data: jobs, loading, error } = useSelector(state => state.jobsInternshipsStore);
    
    useEffect(() => {
        dispatch(showJobsInternships());
    }, [dispatch]);


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
    
    const handleDelete = (id) => {
        dispatch(deleteJobInternship(id));
    };


    return (
        <div className="font-[Chivo] h-full w-full">
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
                <p className="text-center mt-3">No jobs available.</p>
            )}
            {!loading && !error && jobs.length > 0 && (
                <>
                   
                    <table className="w-full md:min-w-full   rounded-lg">
                        <thead className=''>
                            <tr>
                                <th className='hidden md:block'>

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

                                <th className="hidden sm:block text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700 ">TYPE</th>

                                <th className=" text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700 ">
                                
                                <span className='block sm:hidden'>STATUS</span>
                                    <span className='hidden sm:block'>JOB STATUS</span>
                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {jobs.map((item, id) => (
                               <React.Fragment key={id} >
                                <tr >
                                    <td className='px-4 hidden md:block'>
                                        <input type="checkbox" />
                                    </td>
                                    <td className="   text-gray-500 lg:px-8 px-1 py-4 text-sm sm:text-base">{item.title}</td>
                                    <td className="   text-gray-500 lg:px-8 px-1 py-4 text-sm sm:text-base">{item.description}</td>
                                    <td className="   text-gray-500 lg:px-8 px-1  py-4 text-sm sm:text-base">{formatDate(item.issue)}</td>
                                    <td className=" hidden sm:block  text-gray-500 lg:px-8 px-1 py-4 text-sm sm:text-base">{item.jobOrInternship}</td>
                                    <td className=" text-green-500  lg:px-8 px-1 py-4 text-sm sm:text-base">{item.status}</td>
                                  

                                  
                                    <td className='  text-gray-500 lg:px-8 px-1 py-4 flex flex-col md:flex-row  md:space-x-1 lg:space-x-2 space-x-0 justify-center items-center'>

            <div className='flex space-x-1 lg:space-x-2 pb-1 '>   

            <button className='border-2 border-blue-400 rounded-full px-2 py-2 bg-blue-400 text-white hover:bg-white hover:text-blue-400'>
    <IoMdSend size={8} className='block md:hidden'/>
    <IoMdSend  size={20} className='hidden md:block'/>
</button>

<button className="border-2 border-blue-400 rounded-full px-2 py-2 bg-blue-400 text-white hover:bg-white hover:text-blue-400">
    <Link to={`/MyeditJobs/${item.id}`}>
        <MdModeEdit size={8} className='block md:hidden'/>
        <MdModeEdit size={20}  className='hidden md:block'/>
    </Link>
</button>
</div>

<div className='flex space-x-1 lg:space-x-2'>
<button className="border-2 border-blue-400 rounded-full px-2 py-2 bg-blue-400 text-white hover:bg-white hover:text-blue-400 " onClick={() => handleDelete(item.id)}>
<MdDelete size={8} className='block md:hidden'/>
        <MdDelete size={20} className='hidden md:block'/>
</button>

<button className='border-2 border-blue-400 rounded-full px-2 py-2 bg-blue-400 text-white hover:bg-white hover:text-blue-400'>
    <BsThreeDots  size={8} className='block md:hidden'/>
    <BsThreeDots  size={20} className='hidden md:block'/>
</button>
</div>




                                    </td>
                                </tr>

                                {/* <tr>
                                 <td colSpan="6">
<div className="py-0"></div>

                                 </td>
                             </tr> */}

                                </React.Fragment>


                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default AllJobs;
