import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>
      <nav>
        <Link href="/" className="mx-2 text-blue-600">Home</Link>
        <Link href="/posts" className="mx-2 text-blue-600">Posts</Link>
        <Link href="/users" className="mx-2 text-blue-600">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
