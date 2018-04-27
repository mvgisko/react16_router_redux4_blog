/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 17:55:34
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-27 10:57:05
*/
import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import './article.css';

const Article = ({ match }) => {
  const { articles } = store.getState();
  const { id, title, userId, date } = articles[match.params.id];
  return (
    <div className="Item">
      <Link to="/articles">Back</Link>

      <h1 className="Item__title">{ title }</h1>

      <div className="Item__meta">
        <span className="Item__author">
          by <span className="author">{ userId }</span>
        </span>
        <span className="Item__date"> { date }</span>
        <span className="Item__views"> | Views</span>
      </div>

      <Link to="/articles">Back</Link>
    </div>
  );
};

export default Article;
