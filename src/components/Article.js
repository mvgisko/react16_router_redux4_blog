/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 12:21:39
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-23 23:40:09
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './article.css';

const Article = ({ id, title, author, date, views }) => (
  <li className="ListItem" key={id}>

    <Link to={`/articles/${id}`} className="Item__title">{ title }</Link>

    <div className="Item__meta">
      <span className="Item__author">
        by <span className="author">{ author }</span>
      </span>
      <span className="Item__date"> { date }</span>
      <span className="Item__views"> | { views } views</span>
    </div>

  </li>
);

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};


export default Article;
