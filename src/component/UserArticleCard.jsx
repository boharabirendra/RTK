export const ArticleCard = ({
  articleId,
  author,
  title,
  content,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="w-[400px] mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-500 mb-2">By {author}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit({ articleId, author, title, content })}
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(articleId)}
              className="text-red-600 hover:text-red-800 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
        <p className="mt-2 text-gray-700">{content}</p>
      </div>
    </div>
  );
};
