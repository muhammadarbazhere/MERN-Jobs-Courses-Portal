import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteJobInternship } from "../JobsInternshipSlice";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
// import EditJobInternship from "./EditJobInternship";
import { useNavigate } from "react-router-dom";

function ListJobInternship() {
  const jobsInternships = useSelector((state) => state.JobInternshipStore.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editJobInternshipId, setEditJobInternshipId] = useState(null);

  const handleDelete = (id) => {
    console.log("Deleting job/internship with ID:", id);
    dispatch(deleteJobInternship(id));
  };

  const handleEdit = (id) => {
    setEditJobInternshipId(id);
  };

  const handleCloseEdit = () => {
    setEditJobInternshipId(null);
  };

  const handleAdd = () => {
    navigate("/MyAddJobInternship");
  };

  return (
    <div className="bg-blue-100 px-0 font-[Chivo]">
      {editJobInternshipId && (
        <EditJobInternship jobInternshipId={editJobInternshipId} onClose={handleCloseEdit} />
      )}

      <div className="flex justify-end my-4">
        <div
          className="flex text-white bg-green-500 rounded-full px-3 py-2 justify-center items-center cursor-pointer"
          onClick={handleAdd}
        >
          <button className="px-4 text-xl">Add Job/Internship</button>
        </div>
      </div>

      <div className="flex flex-wrap gap-16 bg-red-200 justify-center mb-5">
        {jobsInternships &&
          jobsInternships.map((item) => (
            <div
              key={item.id}
              className="w-[25%] bg-yellow-200 rounded-lg shadow-md overflow-hidden relative"
            >
              {/* Your JSX for displaying job/internship item */}
              {/* You can customize this part based on your requirements */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListJobInternship;
