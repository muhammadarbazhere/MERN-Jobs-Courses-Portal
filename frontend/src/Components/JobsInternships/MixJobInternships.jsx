import React, { useState, useEffect } from "react";

const MixJobInternships = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3000/jobs-internships/getAllJobs"); // Replace with your actual backend API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };
  

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete job/internship");
      }
      const updatedJobs = jobs.filter((job) => job._id !== id);
      setJobs(updatedJobs);
    } catch (error) {
      console.error("Error deleting job/internship:", error.message);
    }
  };

  return (
    <div className="font-Chivo h-full w-full">
      <div className="w-full space-y-1 mb-8 flex flex-col items-center md:px-2">
        <h1 className="font-Comfortaa mb-2 font-bold text-3xl sm:text-3xl text-#272727 text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
          Current Openings
        </h1>
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
          <table className="w-full md:min-w-full rounded-lg">
            <thead>
              <tr>
                <th className="text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700">
                  <span className="block sm:hidden">TITLE</span>
                  <span className="hidden sm:block"> JOB TITLE</span>
                </th>
                <th className="w-80 text-left lg:px-2 px-2 py-4 text-xs sm:text-base text-gray-700">
                  DESCRIPTION
                </th>
                <th className="text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700">
                  <span className="block sm:hidden">ISSUE</span>
                  <span className="hidden sm:block"> ISSUE DATE</span>
                </th>
                <th className="text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700">
                  TYPE
                </th>
                <th className="text-left lg:px-2 px-1 py-4 text-xs sm:text-base text-gray-700">
                  <span className="block sm:hidden">STATUS</span>
                  <span className="hidden sm:block">JOB STATUS</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {jobs.map((item, id) => (
                <tr key={id}>
                  <td className="text-gray-500 lg:px-8 px-1 py-4 text-xs sm:text-base">
                    {item.title}
                  </td>
                  <td className="w-80 text-gray-500 lg:px-8 px-1 py-4 text-xs sm:text-base">
                    {item.description}
                  </td>
                  <td className="text-gray-500 lg:px-8 px-1 py-4 text-xs sm:text-base">
                    {formatDate(item.createdAt)}
                  </td>
                  <td className="text-gray-500 lg:px-8 px-1 py-4 text-xs sm:text-base">
                    {item.jobOrInternship}
                  </td>
                  <td className="text-green-500 lg:px-8 px-1 py-4 text-xs sm:text-base">
                    {item.status}
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default MixJobInternships;
