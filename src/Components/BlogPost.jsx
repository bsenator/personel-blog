// BlogPost.jsx
import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, content, date }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <small>{date}</small>
    </div>
  );
};

export default BlogPost;
