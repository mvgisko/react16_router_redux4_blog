/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 17:56:47
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-05-03 20:19:25
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import { getArticles } from '../api';
import './articleList.css';

class ArticleList extends Component {
	constructor(props) {
		super(props);
		this.state = { search: '' };
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		getArticles();
	}

	handleSearch(event) {
		this.setState({ search: event.target.value.toLowerCase() });
	}

	render() {
		const { articles } = this.props;

		if (articles.loading) return <Spinner />;

		const displayedArticles = articles.data.filter((el) => {
			const searchValue = el.title.toLowerCase();
			return searchValue.indexOf(this.state.search) !== -1;
		});

		return (
			<div className="Items">
				<div className="Items__nav">
					<span>
						<input type="search" placeholder="Search" onChange={this.handleSearch} />
					</span>
					This is navigation for articles
				</div>

				<ul className="Items__list">
					{
						displayedArticles.map((el) => {
							const { id, title, userName, date, views } = el;
							return (
								<li className="ListItem" key={id}>

									<Link to={`/articles/${id}`} className="Item__title">{ title }</Link>

									<div className="Item__meta">
										<span className="Item__author">
											by <span className="author">{ userName }</span>
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
