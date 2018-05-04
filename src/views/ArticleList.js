/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 17:56:47
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-05-04 12:00:23
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
		this.state = {
			search: '',
			sort: 'title_desc',
		};
		this.sort = [
			{ value: 'title_desc', name: 'Title (desc)' },
			{ value: 'title_asc', name: 'Title (asc)' },
			{ value: 'userName_desc', name: 'Author (desc)' },
			{ value: 'userName_asc', name: 'Author (asc)' },
		];
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSort = this.handleSort.bind(this);
	}

	componentDidMount() {
		getArticles();
	}

	handleSearch(event) {
		this.setState({ search: event.target.value.toLowerCase() });
	}

	handleSort(event) {
		this.setState({ sort: event.target.value });
	}

	render() {
		const { articles } = this.props;
		const { search, sort } = this.state;

		if (articles.loading) return <Spinner />;

		const displayedArticles = articles.data.filter((el) => {
			const searchValue = el.title.toLowerCase();
			return searchValue.indexOf(search) !== -1;
		}).sort((prev, next) => {
			const [field, sortDirec] = sort.split('_');

			if (sortDirec === 'desc') {
				if (prev[field] < next[field]) return 1;
				if (prev[field] > next[field]) return -1;
			} else if (sortDirec === 'asc') {
				if (prev[field] > next[field]) return 1;
				if (prev[field] < next[field]) return -1;
			}

			return 0;
		});

		return (
			<div className="Items">
				<div className="Items__nav">
					<span>
						<input type="search" placeholder="Search" onChange={this.handleSearch} />
						Sort by:
						<select name="sort" id="sortArticle" onChange={this.handleSort}>
							{
								this.sort.map((el) => {
									const { value, name } = el;
									return (
										<option key={value} value={value}>{name}</option>
									);
								})
							}
						</select>
					</span>
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
