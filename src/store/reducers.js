/*
* @Author: Gisko Maksim
* @Date:   2018-04-25 17:03:07
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-05-03 20:47:00
*/
const initState = {
	articles: {
		loading: false,
		data: [],
	},
	article: {
		loading: false,
		data: {},
	},
};

const articles = (state = initState, action) => {
	switch (action.type) {
	case 'GET_ARTICLES_LOADING':
		return Object.assign({}, state, { articles: { loading: action.loading } });
	case 'GET_ARTICLES_SUCCESS':
		return Object.assign(
			{},
			state,
			{
				articles: {
					data: action.articles,
					loading: false,
				},
			}
		);
	case 'GET_ARTICLE_LOADING':
		return Object.assign({}, state, { article: { loading: action.loading } });
	case 'GET_ARTICLE_SUCCESS':
		return Object.assign(
			{},
			state,
			{
				article: {
					loading: false,
					data: action.article,
				},
			}
		);
	default:
		return state;
	}
};

export default articles;
