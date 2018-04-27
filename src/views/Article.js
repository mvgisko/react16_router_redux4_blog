/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 17:55:34
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-27 12:03:24
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './article.css';

const Article = ({ articles, match }) => {
  const article = articles.find((el) => match.params.id == el.id);
  const { title, userId, date } = article;
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

const mapStateToProps = (store) => {
  return { articles: store.articles };
};

export default connect(mapStateToProps)(Article);
