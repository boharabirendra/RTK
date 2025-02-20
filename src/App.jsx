import ArticleCard from "./component/ArticleCard";
import { useGetAllArticlesQuery } from "./rtk/apiSlice";

function App() {
  const { data, isLoading } = useGetAllArticlesQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="flex flex-col gap-4">
        {data.articles.map((article, index) => (
          <ArticleCard
            key={index}
            author={article.author}
            title={article.title}
            content={article.content}
          />
        ))}
      </div>
    </>
  );
}

export default App;
