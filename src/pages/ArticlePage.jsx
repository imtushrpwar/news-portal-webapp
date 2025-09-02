import React from "react";
import { useParams, Link } from "react-router-dom";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";

const ArticlePage = () => {
  const { id } = useParams();
  const articleId = parseInt(id, 10);
  const article = newsData.find((item) => item.id === articleId);

  if (!article) {
    return <div className="container mt-5">Article not found.</div>;
  }

  const { title, content, date, author, image, category } = article;

  // Find related articles by category (excluding current article)
  const relatedArticles = newsData.filter(
    (item) => item.category === category && item.id !== articleId
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-3">{title}</h1>
      <p className="text-muted">
        By <strong>{author}</strong> | {new Date(date).toLocaleDateString()}
      </p>
      <img
        src={image}
        alt={title}
        className="img-fluid mb-4"
        style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
      />

      <p className="lead">{content}</p>

      {/* Social Share */}
      <div className="my-4">
        <h5>Share this article:</h5>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary me-2"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-info text-white me-2"
        >
          Twitter
        </a>
        <a
          href={`mailto:?subject=${title}&body=Check out this article: ${window.location.href}`}
          className="btn btn-sm btn-secondary"
        >
          Email
        </a>
      </div>

      {/* Related News */}
      {relatedArticles.length > 0 && (
        <div className="mt-5">
          <h4>Related Articles</h4>
          <div className="row">
            {relatedArticles.map((item) => (
              <NewsCard key={item.id} article={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
