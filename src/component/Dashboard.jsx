import React, { useState } from "react";
import { ArticleCard } from "./UserArticleCard";
import { ArticleForm } from "./ArticleForm";
import {
  useDeleteArticleMutation,
  useGetAllArticlesOfUserQuery,
} from "../rtk/apiSlice";
import LoadingCard from "./Lading";

export const Dashboard = () => {
  const { data, isLoading, refetch } = useGetAllArticlesOfUserQuery();
  const [deleteArticle] = useDeleteArticleMutation();

  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  const handleCreate = (data) => {
    console.log("Creating article:", data);
    setShowForm(false);
  };

  const handleEdit = (data) => {
    console.log("Editing article:", data);
    setEditingArticle(null);
  };

  const handleDelete = async (articleId) => {
    await deleteArticle(articleId);
    refetch();
  };

  if (isLoading) {
    return <LoadingCard />;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Articles Dashboard</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Create Article
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.articles.map((article) => (
          <ArticleCard
            key={article.articleId}
            {...article}
            onEdit={setEditingArticle}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {(showForm || editingArticle) && (
        <ArticleForm
          article={editingArticle}
          onSubmit={editingArticle ? handleEdit : handleCreate}
          onCancel={() => {
            setShowForm(false);
            setEditingArticle(null);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
