import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteJobInternship,
  showJobsInternships,
} from "../JobsInternshipSlice";

const MixJobInternships = () => {
  const dispatch = useDispatch();
  const {
    data: jobs,
    loading,
    error,
  } = useSelector((state) => state.jobsInternshipsStore);

  useEffect(() => {
    dispatch(showJobsInternships());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const timestampInMilliseconds = dateString * 1000;

    const date = new Date(timestampInMilliseconds);

    // Get the year, month, and day
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;

    let day = date.getDate();
    day = day < 10 ? "0" + day : day;

    // Format the date as 'YYYY-MM-DD'
    const formattedDate = `${year}-${month}-${day}`;

    // Get the current date
    const currentDate = new Date().toISOString().slice(0, 10);

    // Check if the date is today or yesterday
    if (formattedDate === currentDate) {
      return "Today";
    } else if (
      formattedDate === new Date(Date.now() - 864e5).toISOString().slice(0, 10)
    ) {
      return "Yesterday";
    } else {
      return formattedDate;
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteJobInternship(id));
  };

  return (
    <div className="font-[Chivo] h-full w-full ">

<div className='w-full space-y-1  mb-8 flex flex-col items-center md:px-2'>
          <h1 className='font-[Comfortaa] mb-2 font-bold text-3xl sm:text-3xl text-[#272727] text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text'>Current Openings</h1> 
        
        </div>
      
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
            <thead className="">
              <tr>
                {/* <th className="hidden md:block"></th> */}
                <th className="  text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700 ">
                  <span className="block sm:hidden">TITLE</span>
                  <span className="hidden sm:block"> JOB TITLE</span>
                </th>
                <th className=" w-80  text-left  lg:px-2 px-2 py-4 text-xs sm:text-base text-gray-700">
                  DESCRIPTION
                </th>

                <th className="text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700 ">
                  <span className="block sm:hidden">ISSUE</span>
                  <span className="hidden sm:block"> ISSUE DATE</span>
                </th>

                <th className=" text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700 ">
                  TYPE
                </th>

                <th className=" text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700 ">
                  <span className="block sm:hidden">STATUS</span>
                  <span className="hidden sm:block">JOB STATUS</span>
                </th>
                 </tr>
            </thead>
            <tbody className="bg-white">
              {jobs.map((item, id) => (
                <React.Fragment key={id}>
                  <tr>
                    {/* <td className="px-4 hidden md:block">
                      <input type="checkbox" />
                    </td> */}
                    <td className="   text-gray-500 lg:px-8 px-1 py-4 text-xs sm:text-base">
                      {item.title}
                    </td>
                    <td className="w-80   text-gray-500 lg:px-8 px-1 py-4 text-xs sm:text-base">
                      {item.description}
                    </td>
                    <td className="   text-gray-500 lg:px-8 px-1  py-4 text-xs sm:text-base">
                      {formatDate(item.issue)}
                    </td>
                    {/* <td className=" hidden sm:block  text-gray-500 lg:px-8 px-1 py-4 text-sm sm:text-base">
                      {item.jobOrInternship}
                    </td> */}

                    <td className="   text-gray-500 lg:px-8 px-1  py-4 text-xs sm:text-base">
                    {item.jobOrInternship}
                    </td>

                    <td className=" text-green-500  lg:px-8 px-1 py-4 text-xs sm:text-base">
                      {item.status}
                    </td>
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

export default MixJobInternships;
