/*
* @Author: Gisko Maksim
* @Date:   2018-04-26 15:27:17
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-05-03 20:24:10
*/
import axios from 'axios';
import store from './store';
import {
	getArticlesSuccess,
	getArticlesLoading,
	getArticleSuccess,
	getArticleLoading,
} from './store/actions';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export function getArticles() {
	store.dispatch(getArticlesLoading());

	return axios.all([
		axios.get('/posts'),
		axios.get('/users'),
	])
		.then(axios.spread((resPosts, resUsers) => {
			const articles = resPosts.data;
			const users = resUsers.data;

			articles.forEach((post) => {
				post.userName = users.find(el => el.id === post.userId).name;
			});

			store.dispatch(getArticlesSuccess(articles));
			return articles;
		}))
		.catch(console.log);
}

export function getArticle(id) {
	store.dispatch(getArticleLoading());

	return axios.get(`/posts/${id}`)
		.then((res) => {
			const article = res.data;
			store.dispatch(getArticleSuccess(article));
			return article;
		})
		.catch(console.log);
}
