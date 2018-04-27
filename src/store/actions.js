/*
* @Author: Gisko Maksim
* @Date:   2018-04-25 19:05:55
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-27 15:36:50
*/
const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
const GET_ARTICLES_FAILED = 'GET_ARTICLES_FAILED';

export const getArticlesSuccess = articles => ({
  type: GET_ARTICLES_SUCCESS,
  articles,
});

export const getArticleSuccess = article => ({
  type: GET_ARTICLE_SUCCESS,
  article,
});

export const getArticlesFailed = error => ({
  type: GET_ARTICLES_FAILED,
  error,
});
