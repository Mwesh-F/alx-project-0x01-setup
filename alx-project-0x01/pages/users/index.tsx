import { useState } from "react";
import Header from "@/components/layout/Header"; // if you have a Header
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const UsersPage = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers(prev => [...prev, { ...newUser, id: prev.length + 1 }]);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-full"
            onClick={() => setModalOpen(true)}
          >
            Add User
          </button>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map(user => (
            <li key={user.id} className="p-4 border rounded shadow">
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
            </li>
          ))}
        </ul>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export default UsersPage;
