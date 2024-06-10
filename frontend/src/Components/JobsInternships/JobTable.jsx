import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJobInternship,  } from '../JobsInternshipSlice';
import { GoTrash } from "react-icons/go";
import { MdModeEdit } from "react-icons/md";
import EditJobInternship from './EditJobsInternship';

const JobTable = () => {
    const dispatch = useDispatch();
    const jobsData = useSelector(state => state.JobInternshipStore.data);

    const [editCourseId, setEditCourseId] = useState(null);

    const handleDelete = (id) => {
      console.log("Deleting course with ID:", id);
      dispatch(deleteJobInternship(id));
    };
  
    const handleEdit = (id) => {
      setEditCourseId(id);
    };
  
    const handleCloseEdit = () => {
      setEditCourseId(null);
    };
     

  

    const formatDate = (dateString) => {
        const currentDate = new Date().toISOString().slice(0, 10);
        if (dateString === currentDate) {
            return 'Today';
        } else if (dateString === new Date(Date.now() - 864e5).toISOString().slice(0, 10)) {
            return 'Yesterday';
        } else {
            return dateString;
        }
    };

    return (
        <div className="font-[Chivo] h-full w-full ">

{editCourseId && (
        <EditJobInternship jobId={editCourseId} onClose={handleCloseEdit} />
      )}


            <h1 className="py-10 text-center text-[#5F9BCE] text-4xl font-bold">All Courses</h1>
            <table className="w-full  rounded-lg">
                <thead>
                    <tr>
                      <th>
                      <input type="checkbox"/>
                      </th>
                        <th className=" text-gray-600 text-left px-8 py-4">
                          JOB TITLE</th>
                        <th className=" text-gray-600 text-left w-80 px-8 py-4">DESCRIPTION</th>
                        <th className=" text-left text-gray-600 px-8 py-4">JOB TYPE</th>
                        <th className=" text-gray-600 text-left px-8 py-4">JOB ISSUE DATE</th>
                        <th className=" text-left text-gray-600 px-8 py-4">JOB STATUS</th>
                        <th className=" text-left text-gray-600 px-8 py-4">

                        </th>
                     
                    </tr>
                </thead>
                <tbody className=''>
                    {jobsData.map((item, id) => (
                        <tr key={id} className='bg-red-300' style={{ marginBottom: '10px' }}>
                          <td className='bg-white mb-4'>
                          <input type="checkbox"/>
                          </td>
                            <td className=" text-gray-500 bg-white  px-8 py-4">
                            {item.title} </td>
                          
                            <td className=" text-gray-500 bg-white px-8 py-4">{item.description}</td>
                            <td className=" text-gray-500 bg-white px-8 py-4">{item.type}</td>
                            <td className=" text-gray-500 bg-white px-8 py-4">{formatDate(item.issue)}</td>
                            <td className=" text-green-400 bg-white px-8 py-4">{item.status}</td>
                            
                            <td className=" text-gray-500 bg-white px-8 py-4">
                            
                            <button onClick={() => handleEdit(item.id)} className="border-2 border-blue-400 rounded-full px-1 py-1 bg-blue-400 text-white hover:bg-white hover:text-blue-400 mr-2">
                              <MdModeEdit />
                            </button>
                           
                            <button onClick={() => handleDelete(item.id)} className="border-2 border-blue-400 rounded-full px-1 py-1 bg-blue-400 text-white hover:bg-white hover:text-blue-400">
                              <GoTrash />
                            </button>

                          </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobTable;


