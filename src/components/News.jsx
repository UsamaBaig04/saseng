import React from 'react';
import '../styles/News.css'; 

const News = () => {
  return (
    <div className="news-container">
      <div className="news-block">
        <h3>News Title 1</h3>
        <p>Lorem ipsum dolor.</p>
      </div>
      <div className="news-block">
        <h3>News Title 2</h3>
        <p>Lorem ipsum dolor.</p>
      </div>
      <div className="news-block">
        <h3>News Title 3</h3>
        <p>Lorem ipsum dolor </p>
      </div>
      <div className="news-block">
        <h3>News Title 4</h3>
        <p>Lorem ipsum dolor</p>
      </div>
    </div>
  );
};

export default News;
