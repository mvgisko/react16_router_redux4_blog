/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 17:56:47
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-26 16:37:19
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getArticles from '../api';
import './articleList.css';

class ArticleList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //   };
  // }

  componentDidMount() {
    getArticles();
    // return fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then((posts) => {
    //     this.setState({
    //       articles: posts,
    //     });
    //   });
  }

  render() {
    const { articles } = this.props;
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
            articles.map((el) => {
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
  return {
    articles: store.articles,
  };
};

export default connect(mapStateToProps)(ArticleList);
