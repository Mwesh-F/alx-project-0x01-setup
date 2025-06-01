// components/common/UserModal.tsx

import { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        address: { ...prev.address, [key]: value }
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value }
        }
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        company: { ...prev.company, [key]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="grid gap-3 grid-cols-2">
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2" />
          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="border p-2" />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2" />
          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border p-2" />
          <input name="website" placeholder="Website" value={formData.website} onChange={handleChange} className="border p-2" />

          <input name="address.street" placeholder="Street" value={formData.address.street} onChange={handleChange} className="border p-2" />
          <input name="address.city" placeholder="City" value={formData.address.city} onChange={handleChange} className="border p-2" />
          <input name="address.zipcode" placeholder="Zipcode" value={formData.address.zipcode} onChange={handleChange} className="border p-2" />
          <input name="geo.lat" placeholder="Latitude" value={formData.address.geo.lat} onChange={handleChange} className="border p-2" />
          <input name="geo.lng" placeholder="Longitude" value={formData.address.geo.lng} onChange={handleChange} className="border p-2" />
          <input name="company.name" placeholder="Company Name" value={formData.company.name} onChange={handleChange} className="border p-2" />
          <input name="company.catchPhrase" placeholder="Catch Phrase" value={formData.company.catchPhrase} onChange={handleChange} className="border p-2" />

          <div className="col-span-2 flex justify-end mt-4 gap-4">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

