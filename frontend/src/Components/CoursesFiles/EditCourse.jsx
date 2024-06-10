import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCourseFunc } from '../CourseSlice';
import logo from '../../assets/logo.jpg';


const EditCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({
    title: '',
    description: '',
    category: '',
    charges: '',
    duration: '',
    image: ''
  });

  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    if (id && users.length > 0) {
      const singleUser = users.find((user) => user.id === id);
      setUpdateData(singleUser);
    }
  }, [id, users]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editCourseFunc(updateData));
    navigate("/MyCourseList");
  };

  return (
    <div className="bg-blue-100 py-20">
    <div className="mx-auto  w-full md:w-2/3 lg:w-1/2 ">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
      <h1 className=" text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl font-bold text-white flex items-center justify-center space-x-3 py-6 text-center mb-2">
      <h2 >
      Update 
      </h2>
        <span className="text-2xl">
        {updateData.title} 
        </span>
        
         </h1>
      <hr className="w-full h-2 text-blue-[#00008B]" />
      <div className=" flex justify-center rounded-md mb-2">
        <img src={logo} alt="Logo" className="mb-5 h-28 w-28" />
      </div>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Course Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={updateData.title}
              onChange={newData}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={updateData.description}
              onChange={newData}
            />
          </div>
          <div className="mb-4">
      <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
      <select
        id="category"
        name="category"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={updateData.category}
        onChange={newData}
      >
        <option value="">Select a category</option>
        <option value="Front-End Development">Front-End Development</option>
        <option value="Back-End Development">Back-End Development</option>
        <option value="Social Media Marketing">Social Media Marketing</option>
        <option value="SEO">SEO</option>
        <option value="Human Resource">Human Resource</option>
        <option value="Graphic Designing">Graphic Designing</option>
      </select>
    </div>
          <div className="mb-4">
            <label htmlFor="charges" className="block text-gray-700 text-sm font-bold mb-2">Charges</label>
            <input
              type="number"
              id="charges"
              name="charges"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={updateData.charges}
              onChange={newData}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">Duration</label>
            <input
              type="text"
              id="duration"
              name="duration"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={updateData.duration}
              onChange={newData}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={updateData.image}
              onChange={newData}
            />
            {updateData.image && (
              <div className="mt-3">
                <img src={updateData.image} alt="Preview" className="object-contain h-40 w-full" />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Course
          </button>
        </form>

      </div>
    </div>
    </div>
  );
};

export default EditCourse;
