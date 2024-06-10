import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser, deleteCourseFunc } from '../../../../../Components/CourseSlice';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiEditLine } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight, FaRegTrashAlt } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';

function Backend() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state.app);
    
    const frontEndCourses = users.filter(user => user.category === "Back-End Development");

    useEffect(() => {
        dispatch(showUser());
    }, [dispatch]);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentUsers = frontEndCourses.slice(indexOfFirstPost, indexOfLastPost); // Use frontEndCourses instead of users

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="  font-[Chivo] bg-blue-100 py-10 px-6 sm:px-10 lg:px-24">
            <h1 className="text-2xl sm:text-3xl font-bold  text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center">Back-End Courses</h1>
            <div className='flex justify-end py-4 flex-row'>
                <Link to="/MyAddCourse" className="bg-white text-[#5F9BCE] px-4 py-2 rounded-md border-2  border-[#5F9BCE] hover:bg-[#5F9BCE] hover:text-white duration-1000 flex items-center">
                    Add Courses <IoIosAddCircleOutline size={24} className="ml-2" />
                </Link>
            </div>
            {loading && (<div className="flex items-center justify-center mt-10"><div className="w-6 h-6 mr-3 border-t-2 border-b-2 border-gray-500 rounded-full animate-spin"></div><p className="text-secondary">Loading...</p></div>)}
         
            {error && (<p className="text-center text-red-500 mt-3"><span className="font-bold">Error:</span> {error}</p>)}
            <ToastContainer />

            {frontEndCourses.length === 0 ? (
                <div className="flex justify-center h-full ">
                    <p className='text-lg text-center pt-12 text-gray-700 font-bold'>No backend courses avalaible</p>
                </div>
            ) : (
                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6  my-3">
                    {currentUsers.map(user => (
                        <div key={user.id} className="w-full sm:max-w-sm rounded-md overflow-hidden bg-white mb-6 border-2 border-white shadow-lg">
                            <img src={user.image} className="w-full h-64 object-cover" alt={user.title} />
                            <div className="px-3 py-2">
                                <div className="font-bold text-gray-800 text-xl mb-0">{user.title}</div>
                                <p className="text-gray-700 flex gap-2 font-bold text-sm mb-1"> 
                                  <h1>{user.category}</h1> 
                                   <span><FaArrowTrendUp size={20}/></span>
                                   </p>
                                <p className="text-gray-700 pb-1 text-base"> {user.description}</p>

                                <div className='flex items-center justify-between'>
                                <p className="text-gray-700 font-semibold  text-end text-lg"> {user.duration}</p>
                               
                                <p className="text-[#5F9BCE] font-[Comfortaa] text-end text-2xl">
                                  <span>only  </span>
                                    ${user.charges}</p>
                                    </div>

                                    </div>
                                
                            <div className=" flex justify-end gap-3 px-3 py-2">
                                <Link to={`/MyEdit/${user.id}`} className="text-[#5F9BCE] border-2 border-[#5F9BCE] hover:text-white rounded-full p-2 hover:bg-[#5F9BCE] focus:outline-none"> <RiEditLine size={22} /></Link>
                                <button onClick={() => dispatch(deleteCourseFunc(user.id))} className="text-[#5F9BCE] border-2 border-[#5F9BCE] hover:text-white rounded-full p-2 hover:bg-[#5F9BCE] focus:outline-none"> <FaRegTrashAlt size={20} /></button>
                            </div>
                            
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-center pt-6 ">
                <button
                    className="mx-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    onClick={() => setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaChevronLeft />
                </button>
                {Array.from({ length: Math.ceil(frontEndCourses.length / postsPerPage) }, (_, i) => (
                    <button
                        key={i}
                        className={`mx-1 px-3 py-1 ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-[#5F9BCE] text-white hover:bg-[#5F9BCE]'
                            } rounded-lg hover:bg-[#5F9BCE] focus:outline-none`}
                        onClick={() => paginate(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="mx-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    onClick={() =>
                        setCurrentPage(currentPage === Math.ceil(frontEndCourses.length / postsPerPage) ? currentPage : currentPage + 1)
                    }
                    disabled={currentPage === Math.ceil(frontEndCourses.length / postsPerPage)}
                >
                    <FaChevronRight />
                </button>
            </div>
          
        </div>
    );
}
export default Backend;
