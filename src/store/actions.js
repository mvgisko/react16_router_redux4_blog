/*
* @Author: Gisko Maksim
* @Date:   2018-04-25 19:05:55
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-05-03 17:17:42
*/
const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
const GET_ARTICLES_LOADING = 'GET_ARTICLES_LOADING';
const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
const GET_ARTICLE_LOADING = 'GET_ARTICLE_LOADING';


export const getArticlesSuccess = articles => ({
	type: GET_ARTICLES_SUCCESS,
	articles,
});

export const getArticlesLoading = () => ({
	type: GET_ARTICLES_LOADING,
	loading: true,
});

export const getArticleSuccess = article => ({
	type: GET_ARTICLE_SUCCESS,
	article,
});

export const getArticleLoading = () => ({
	type: GET_ARTICLE_LOADING,
	loading: true,
});
