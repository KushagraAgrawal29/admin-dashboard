import React, { useEffect, useState } from "react";
import elemnts from "../JSXROUTES";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    elemnts.mockApi.getUsers().then(setUsers);
    elemnts.mockApi.getRoles().then(setRoles);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Users Card */}
        <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-4xl font-bold">{users.length}</p>
        </div>

        {/* Roles Card */}
        <div className="p-6 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Total Roles</h2>
          <p className="text-4xl font-bold">{roles.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
