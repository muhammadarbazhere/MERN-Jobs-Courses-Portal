import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const JobApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    resume: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataForUpload = new FormData();
    formDataForUpload.append("firstName", formData.firstName);
    formDataForUpload.append("email", formData.email);
    formDataForUpload.append("resume", formData.resume);
  
    try {
      const response = await fetch("http://localhost:3000/apply", {
        method: "POST",
        headers: {
          // No need for "Content-Type" header with FormData
        },
        credentials: "include",
        body: formDataForUpload,
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit application");
      }
  
      const data = await response.json();
      console.log("Application submitted successfully:", data);
      toast.success("Application submitted successfully");
      navigate("/"); // Redirect or navigate to another page upon success
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application");
      // Handle error state or display error message
    }
  };
  

  return (
    <div className="mx-auto mt-0 overflow-hidden sm:mt-4 w-full md:w-2/3 font-[Chivo] lg:w-2/5">
      <div className="bg-white shadow-md rounded px-8 pb-8 mb-4">
        <div className="w-full items-center py-6 flex justify-center">
          <img src={logo} alt="Logo" className="w-24 h-24" />
        </div>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mb-6">
            <label
              htmlFor="firstName"
              className="block text-gray-500 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              required
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-500 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="resume"
              className="block text-gray-500 text-sm font-bold mb-2"
            >
              Resume
            </label>
            <input
              required
              id="resume"
              name="resume"
              type="file"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-600 w-full rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300`}
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplyForm;
