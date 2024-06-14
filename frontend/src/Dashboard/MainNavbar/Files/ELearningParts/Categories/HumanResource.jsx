import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RiEditLine } from 'react-icons/ri';
import { FaChevronLeft, FaChevronRight, FaRegTrashAlt } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosAddCircleOutline } from 'react-icons/io';

function HumanResource() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/courses/getCourses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error.message);
        setLoading(false);
        toast.error('Error fetching courses');
      }
    };

    fetchCourses();
  }, []);

  // Filter courses by category 'Front-End Development'
  const backendCourses = courses.filter(course => course.category === 'Human Resource');

  // Get current courses for pagination
  const indexOfLastCourse = currentPage * postsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - postsPerPage;
  const currentCourses = backendCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle course deletion
  const handleDeleteCourse = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/courses/deleteCourse/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete course');
      }
      setCourses(courses.filter((course) => course._id !== id));
      toast.success('Course deleted successfully');
    } catch (error) {
      console.error('Error deleting course:', error.message);
      toast.error('Error deleting course');
    }
  };

  return (
    <div className="font-[Chivo] bg-blue-100 py-10 px-6 sm:px-10 lg:px-24">
      <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center">
      Human Resource Courses
      </h1>
      <div className="flex justify-end py-4 flex-row">
        <Link
          to="/MyAddCourse"
          className="bg-white text-[#5F9BCE] px-4 py-2 rounded-md border-2 border-[#5F9BCE] hover:bg-[#5F9BCE] hover:text-white duration-1000 flex items-center"
        >
          Add Courses <IoIosAddCircleOutline size={24} className="ml-2" />
        </Link>
      </div>
      {loading && (
        <div className="flex items-center justify-center mt-10">
          <div className="w-6 h-6 mr-3 border-t-2 border-b-2 border-gray-500 rounded-full animate-spin"></div>
          <p className="text-secondary">Loading...</p>
        </div>
      )}

      {backendCourses.length === 0 ? (
        <div className="flex justify-center h-full">
          <p className="text-lg text-center pt-12 text-gray-700 font-bold">
            No human resource courses available
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-3">
          {currentCourses.map((course) => (
            <div
              key={course._id}
              className="w-full sm:max-w-sm rounded-md overflow-hidden bg-white mb-6 border-2 border-white shadow-lg"
            >
              <img
                src={`http://localhost:3000/${course.image}`}
                className="w-full h-64 object-cover"
                alt={course.title}
              />
              <div className="px-3 py-2">
                <div className="font-bold text-gray-800 text-xl mb-0">
                  {course.title}
                </div>
                <p className="text-gray-700 flex gap-2 font-bold text-sm mb-1">
                  <h1>{course.category}</h1>
                  <span>
                    <FaArrowTrendUp size={20} />
                  </span>
                </p>
                <p className="text-gray-700 pb-1 text-base">
                  {course.description}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-gray-700 font-semibold text-end text-lg">
                    {course.duration}
                  </p>
                  <p className="text-[#5F9BCE] font-[Comfortaa] text-end text-2xl">
                    <span>only </span>${course.charges}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 px-3 py-2">
                <Link
                  to={`/MyEdit/${course._id}`}
                  className="text-[#5F9BCE] border-2 border-[#5F9BCE] hover:text-white rounded-full p-2 hover:bg-[#5F9BCE] focus:outline-none"
                >
                  <RiEditLine size={22} />
                </Link>
                <button
                  onClick={() => handleDeleteCourse(course._id)}
                  className="text-[#5F9BCE] border-2 border-[#5F9BCE] hover:text-white rounded-full p-2 hover:bg-[#5F9BCE] focus:outline-none"
                >
                  <FaRegTrashAlt size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center pt-6 ">
        <button
          className="mx-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={() =>
            setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
          }
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: Math.ceil(backendCourses.length / postsPerPage) }, (_, i) => (
          <button
            key={i}
            className={`mx-1 px-3 py-1 ${
              currentPage === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-[#5F9BCE] text-white hover:bg-[#5F9BCE]'
            } rounded-lg hover:bg-[#5F9BCE] focus:outline-none`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="mx-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={() =>
            setCurrentPage(
              currentPage === Math.ceil(backendCourses.length / postsPerPage)
                ? currentPage
                : currentPage + 1
            )
          }
          disabled={currentPage === Math.ceil(backendCourses.length / postsPerPage)}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default HumanResource;
