import React from "react";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";

const Home = () => {
  // Split featured (highlighted) and regular news
  const featuredNews = newsData.filter((article) => article.isFeatured);
  const latestNews = newsData.slice().reverse(); // Assuming latest is last in list

  return (
    <div className="container mt-4">
      {/* Highlighted Section */}
      {featuredNews.length > 0 && (
        <div className="mb-5">
          <h2>Top Stories</h2>
          <div className="row">
            {featuredNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      )}

      {/* Latest News Section */}
      <div>
        <h2>Latest News</h2>
        <div className="row">
          {latestNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
