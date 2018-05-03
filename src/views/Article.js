/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 17:55:34
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-05-03 20:47:55
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import { getArticle } from '../api';
import './article.css';

class Article extends Component {
	componentDidMount() {
		const articleId = this.props.match.params.id;
		getArticle(articleId);
	}

	render() {
		const { article } = this.props;

		if (article.loading) return <Spinner />;

		const { title, body, userId, date } = article.data;

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

				<p className="Item__body">{ body }</p>

				<Link to="/articles">Back</Link>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return { article: store.article };
};

export default connect(mapStateToProps)(Article);
