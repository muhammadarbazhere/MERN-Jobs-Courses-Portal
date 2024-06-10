import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../CourseSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.jpg';

function AddCourseForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', description: '', category: '', duration: '' ,charges: '', image: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    try {
         await dispatch(createUser(formData));
      toast.success('Form submitted successfully!');
      navigate('/MyCourseList');
    } catch (error) {
      toast.error('Error submitting the form. Please try again.');
    }
  };

  return (
    <div className="mx-auto  w-full md:w-2/3 lg:w-1/2">
      <div className="bg-white shadow-md rounded font-[Chivo] px-8 pt-6 pb-8 mb-4">
       
        <div className=" flex justify-center rounded-md mb-0">
          <img src={logo} alt="Logo" className="mb-5 h-28 w-28" />
        </div>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Course Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder='Course Title ..*'
              value={formData.title}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder='Course Description ..*'
              value={formData.description}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4 w-full">
      <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
      <select
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              placeholder='Course Charges ..*'
              value={formData.charges}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

<div className="mb-4">
            <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">Duration</label>
            <input
              type="text"
              id="duration"
              name="duration"
              placeholder='Course Duration ..*'
              value={formData.duration}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>




          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Course Link</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder='Paste Your Course Link Here..*'
              value={formData.image}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {formData.image && (
              <div className="mt-3">
                <img src={formData.image} alt="Preview" className="object-contain h-40 w-full my-2" />
              </div>
            )}

          <button
            type="submit"
            disabled={!formData.title || !formData.description || !formData.category || !formData.charges || !formData.image}
            className={`bg-blue-500 ${(!formData.title || !formData.description || !formData.category || !formData.charges || !formData.image) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} w-full rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline`}
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourseForm;
