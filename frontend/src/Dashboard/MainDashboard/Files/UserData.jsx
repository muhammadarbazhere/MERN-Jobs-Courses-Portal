import React, { useEffect, useState } from "react";
import { FaClipboardUser } from "react-icons/fa6";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when sending request
      try {
        const response = await fetch("http://localhost:3000/allUsers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Ensuring cookies are sent with the request
        });

        if (response.ok) {
          const data = await response.json();
          console.log('response: ', data);
          setUsers(data.users); // Access the user property
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false when request completes
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ml-24 sm:ml-56 ">
      <div className="bg-blue-100 mt-8 p-4 font-[Chivo]">
        <div className="font-bold text-lg flex gap-1 items-center">
          <FaClipboardUser className="" size={20} />
          <h1>Users Data</h1>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <table className="w-full mt-4">
          <thead>
            <tr className="bg-gray-200 text-center font-bold">
              <th className="p-2">NAME</th>
              <th className="p-2">EMAIL</th>
              <th className="p-2">ROLE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="bg-white text-center">
                <td className="p-2">{`${user.firstName} ${user.lastName}`}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  <button
                    className={`w-24 p-2 rounded ${
                      user.role === "Admin" ? "bg-green-500" : "bg-blue-500"
                    } text-white`}
                  >
                    {user.role}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;
