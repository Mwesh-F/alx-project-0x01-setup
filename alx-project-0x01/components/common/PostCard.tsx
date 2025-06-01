import React from 'react';

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
