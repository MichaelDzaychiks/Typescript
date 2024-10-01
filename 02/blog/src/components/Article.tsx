import React from 'react';

interface ArticleProps {
  id: string;
  title: string;
  tags: string[];
  date: string;
  isNew: boolean;
  imageUrl: string; // Add the image URL prop
}

const Article: React.FC<ArticleProps> = ({ title, tags, date, isNew, imageUrl }) => {
  return (
    <article className={`article ${isNew ? 'new' : ''}`}>
      <div className="article-image">
        <img src={imageUrl} alt={title} />
      </div>
      <h2>{title}</h2>
      <p className="date">{new Date(date).toLocaleDateString()}</p>
      <div className="tags">
        {tags.map(tag => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default Article;
