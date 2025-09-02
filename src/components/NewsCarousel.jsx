import React from "react";
import { Link } from "react-router-dom";

const NewsCarousel = ({ articles }) => {
  const featured = articles.filter((item) => item.isFeatured);

  if (featured.length === 0) return null; // Don’t render if no featured news

  return (
    <div
      id="newsCarousel"
      className="carousel slide mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {featured.map((article, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={article.id}
          >
            {article.image && (
              <img
                src={article.image}
                className="d-block w-100"
                alt={article.title}
                style={{
                  height: "400px",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />
            )}
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>{article.title}</h5>
              <p>{article.content.slice(0, 100)}...</p>
              <Link
                to={`/article/${article.id}`}
                className="btn btn-sm btn-light"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#newsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#newsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden"></span>
      </button>
    </div>
  );
};

export default NewsCarousel;
