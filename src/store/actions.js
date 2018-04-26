/*
* @Author: Gisko Maksim
* @Date:   2018-04-25 19:05:55
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-26 15:26:30
*/
const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
const GET_ARTICLES_FAILED = 'GET_ARTICLES_FAILED';

export const getArticlesSuccess = articles => ({
  type: GET_ARTICLES_SUCCESS,
  articles,
});

export const getArticlesFailed = error => ({
  type: GET_ARTICLES_FAILED,
  error,
});
