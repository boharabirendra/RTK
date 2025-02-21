import React from "react";

const LoadingCard = () => {
  return (
    <div className="max-w-sm w-full p-4 border rounded-lg shadow-md bg-white animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded-md"></div>
      <div className="mt-4 h-6 bg-gray-300 rounded w-3/4"></div>

      <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-5/6"></div>

      <div className="mt-4 h-10 bg-gray-300 rounded w-1/3"></div>
    </div>
  );
};

export default LoadingCard;
