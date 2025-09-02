import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  const { id, title, image, content, date, author, category } = article;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        {image && (
          <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{ height: "200px", aspectRatio: "16/9", objectFit: "cover" }}
          />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p
            className="card-text text-muted mb-1"
            style={{ fontSize: "0.9rem" }}
          >
            <small>
              {author} | {new Date(date).toLocaleDateString()}
            </small>
          </p>
          <p className="card-text" style={{ flexGrow: 1 }}>
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
          </p>
          <Link to={`/article/${id}`} className="btn btn-primary mt-auto">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
