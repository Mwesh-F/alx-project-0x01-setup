import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, address, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">📧 {email}</p>
      <p className="text-gray-600">📞 {phone}</p>
      <p className="text-gray-600">🌐 {website}</p>
      <p className="text-gray-600">
        🏢 {company.name} - <em>{company.catchPhrase}</em>
      </p>
      <p className="text-gray-600">
        📍 {address.suite}, {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;

