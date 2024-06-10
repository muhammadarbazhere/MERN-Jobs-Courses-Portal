import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../CourseSlice';

const CoursesTable = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.app);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                await dispatch(showUser());
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div className="font-[Chivo]  h-full pb-6 w-auto">
            <h1 className='py-10 text-center  text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-4xl font-bold'>
                Courses List
                </h1>
            
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">Error: {error}</p>}
            
          
{users.length === 0 ? (
  <div className=" flex justify-center h-full mt-44">
    <p className='text-3xl text-center'> Please add courses...</p>
  </div>
) : (
                <table className="w-full md:min-w-full bg-white  rounded-lg">
                    <thead>
                        <tr className=''>
                            <th className="bg-[#5F9BCE]  text-white text-left lg:px-8 px-2 text-xs sm:text-base py-4">Course Title</th>
                            <th className="bg-[#5F9BCE] text-white text-left lg:px-8 px-2 py-4 text-xs sm:text-base">Category</th>
                            <th className="bg-[#5F9BCE]  text-white text-left   md:px-8 px-2 py-4 text-xs sm:text-base">Description</th>

                            <th className="bg-[#5F9BCE] text-white text-left lg:px-8 px-2 py-4 text-xs sm:text-base hidden sm:block">Status</th>

                            <th className="bg-[#5F9BCE]  text-left text-white lg:px-8 px-2 py-4 text-xs sm:text-base">Duration</th>
                            <th className="bg-[#5F9BCE] text-white text-left lg:px-8 px-2 py-4 text-xs sm:text-base">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, id) => (
                             <React.Fragment key={id}>
                             <tr>
                                 <td className="text-gray-500 lg:px-8 px-2 py-4 text-xs sm:text-base">{item.title}</td>
                                 <td className="text-gray-500 lg:px-8 px-2 py-4 text-xs sm:text-base">{item.category}</td>
                                 <td className="text-gray-500 lg:px-8 px-2 py-4 text-xs sm:text-base">{item.description}</td>
                                 <td className="text-green-500 hidden sm:block lg:px-8 px-2 py-4 text-xs sm:text-base">Completed</td>
                                 <td className="text-gray-500 lg:px-8 px-2 py-4 text-xs sm:text-base">{item.duration}</td>
                                 <td className="text-gray-500 lg:px-8 px-2 py-4 text-xs sm:text-base">${item.charges}</td>
                             </tr>
                             <tr>
                                 <td colSpan="6">
<div className="border"></div>

                                 </td>
                             </tr>
                         </React.Fragment>
                            
                          
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CoursesTable;