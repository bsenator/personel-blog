// Blog.jsx
import React, { useState } from 'react';
import BlogPost from './BlogPost';
import './Blog.css';

const Blog = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog">
      <input
        type="text"
        placeholder="Yazı Ara"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            content={post.content}
            date={post.date}
          />
        ))
      ) : (
        <p>Aradığınız kriterlere uygun yazı bulunamadı.</p>
      )}
    </div>
  );
};

export default Blog;
