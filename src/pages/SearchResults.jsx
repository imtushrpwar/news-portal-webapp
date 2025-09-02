import React from "react";
import { useLocation } from "react-router-dom";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";

const SearchResults = () => {
  const location = useLocation();

  // Extract query parameter ?q=...
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";

  // Filter articles by query in title or content (case-insensitive)
  const filteredArticles = newsData.filter((article) => {
    const lowerQuery = query.toLowerCase();
    return (
      article.title.toLowerCase().includes(lowerQuery) ||
      article.content.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div className="container mt-5">
      <h2 className="mb-4">
        Search Results for: <em>{query}</em>
      </h2>

      {filteredArticles.length === 0 ? (
        <p>No articles matched your search.</p>
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

export default SearchResults;
