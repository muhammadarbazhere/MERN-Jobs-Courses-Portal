import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../App/CartSlice'; // Adjust the path if necessary
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaChevronLeft, FaChevronRight, FaRegTrashAlt } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

function Courses() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const myCardsState = useSelector(state => state.cart.items); // Assuming your cart slice is named 'cart'

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/courses/getCourses');
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Get current users
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddToCart = (course) => {
    // Check if the course is already in the cart
    const isAlreadyInCart = myCardsState.some(item => item._id === course._id);

    if (!isAlreadyInCart) {
      dispatch(addToCart(course));
      toast.success(`${course.title} added to cart!`);
    } else {
      toast.warn(`${course.title} is already in your cart!`);
    }
  };

  return (
    <div className="font-[Chivo] bg-blue-100  px-4 lg:px-6 xl:px-20">
      

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
      <ToastContainer />

      {users.length === 0 ? (
        <div className="flex justify-center h-full ">
          <p className="text-lg text-center pt-12 text-gray-700 font-bold">
            No courses available
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-3 ">
          {currentUsers.map((course) => (
            <div
              key={course._id}
              className="w-full sm:max-w-sm rounded-md overflow-hidden bg-white mb-6 border-2 border-white shadow-lg transform transition-all hover:scale-105"
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

                <div className="flex items-center justify-start gap-2 ">
                
                  <p className="font-bold text-gray-800 text-end text-xl">
                    ${course.charges}
                  </p>
                  <p className="font-bold line-through text-gray-600 text-end text-base">
                  ${(course.charges * 5.70).toFixed(2)}
                  </p>
                </div>

                {/* Enroll button */}
                <button
                  onClick={() => handleAddToCart(course)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 flex rounded-md text-white font-[Chivo] my-2 w-full text-center items-center justify-center"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center pt-6">
        <button
          className="mx-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={() =>
            setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
          }
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>
        {Array.from(
          { length: Math.ceil(users.length / postsPerPage) },
          (_, i) => (
            <button
              key={i}
              className={`mx-1 px-3 py-1 ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-[#5F9BCE] text-white hover:bg-[#5F9BCE]"
              } rounded-lg hover:bg-[#5F9BCE] focus:outline-none`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
        <button
          className="mx-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={() =>
            setCurrentPage(
              currentPage === Math.ceil(users.length / postsPerPage)
                ? currentPage
                : currentPage + 1
            )
          }
          disabled={currentPage === Math.ceil(users.length / postsPerPage)}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
