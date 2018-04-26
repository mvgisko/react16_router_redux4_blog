/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 17:55:34
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-27 00:40:48
*/
import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './article.css';

const Article = ({ match }) => {
  console.log(match);
  return (
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
};

// const mapStateToProps = (store) => {
//   return { article: store.article };
// };

// export default connect(mapStateToProps)(Article);
export default Article;
