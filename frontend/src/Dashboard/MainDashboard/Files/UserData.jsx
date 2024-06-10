import React from "react";
import { FaClipboardUser } from "react-icons/fa6";

const UserData = () => {
  return (
    <div className="ml-24 sm:ml-56 ">
      <div className="bg-blue-100 mt-8 p-4 font-[Chivo]">
        <div className="font-bold text-lg flex gap-1 items-center">
          <FaClipboardUser className="" size={20} />
          <h1> User Data</h1>
        </div>

        <table className="w-full mt-4">
          <thead>
            <tr className="bg-gray-200 text-center font-bold">
              <th className="p-2">NAME</th>
              <th className="p-2">EMAIL</th>
              <th className="p-2">ROLE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-center">
              <td className="p-2">Muhammad Arbaz</td>
              <td className="p-2">muhammad.arbazhere@gmail.com</td>
              <td className="p-2">
                <button className="w-24 p-2 bg-green-500 text-white rounded">
                  Admin
                </button>
              </td>
            </tr>
            <tr className="bg-white text-center">
              <td className="p-2">samiullah</td>
              <td className="p-2">samiullah@gmail.com</td>
              <td className="p-2">
                <button className="w-24 p-2 bg-blue-500 text-white rounded">
                  User
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;
