import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import LoginForm from "./login";
import { useGetAllArticlesQuery } from "../rtk/apiSlice";
import LoadingCard from "./Lading";

function Home() {
  const { data, isLoading } = useGetAllArticlesQuery();
  const [showLogin, setShowLogin] = useState(false);

  if (isLoading) {
    return <LoadingCard />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4">
        {showLogin ? (
          <LoginForm />
        ) : (
          <div className="flex flex-wrap gap-4">
            {data.articles.map((article) => (
              <ArticleCard
                key={article.articleId}
                author={article.author}
                title={article.title}
                content={article.content}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
