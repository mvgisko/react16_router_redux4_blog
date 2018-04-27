/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 17:56:47
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-27 17:41:41
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import { getArticles } from '../api';
import './articleList.css';

class ArticleList extends Component {
  componentDidMount() {
    getArticles();
  }

  render() {
    const { articles } = this.props;

    // if (articles.loading) return spinner;
    return (<Spinner />);

    return (
      <div className="Items">
        <div className="Items__nav">
          <span>
            <input type="search" placeholder="Search Articles" />
          </span>
          This is navigation for articles
        </div>

        <ul className="Items__list">
          {
            articles.data.map((el) => {
              const { id, title, userId, date, views } = el;
              return (
                <li className="ListItem" key={id}>

                  <Link to={`/articles/${id}`} className="Item__title">{ title }</Link>

                  <div className="Item__meta">
                    <span className="Item__author">
                      by <span className="author">{ userId }</span>
                    </span>
                    <span className="Item__date"> { date }</span>
                    <span className="Item__views"> | { views } views</span>
                  </div>

                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return { articles: store.articles };
};

export default connect(mapStateToProps)(ArticleList);
