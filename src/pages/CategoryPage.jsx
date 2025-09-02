import React from "react";
import { useParams } from "react-router-dom";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Filter articles by category (case-insensitive)
  const filteredArticles = newsData.filter(
    (article) => article.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-capitalize">{categoryName} News</h2>

      {filteredArticles.length === 0 ? (
        <p>No articles found in this category.</p>
      ) : (
        <div className="row">
          {filteredArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
