import React from "react";

const ArticleCard = ({ author, title, content }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">By {author}</p>
        <p className="mt-2 text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
