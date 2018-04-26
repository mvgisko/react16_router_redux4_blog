/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 17:55:34
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-24 23:13:47
*/
import React from 'react';
import { Link } from 'react-router-dom';
import './article.css';

const Article = () => (
  <div className="Item">
    <Link to="/articles">Back</Link>

    <h1 className="Item__title">Article title</h1>

    <div className="Item__meta">
      <span className="Item__author">
        by <span className="author">author</span>
      </span>
      <span className="Item__date"> Date</span>
      <span className="Item__views"> | Views</span>
    </div>

    <Link to="/articles">Back</Link>
  </div>
);

export default Article;
