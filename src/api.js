/*
* @Author: Gisko Maksim
* @Date:   2018-04-26 15:27:17
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-27 15:55:18
*/
import axios from 'axios';
import store from './store';
import { getArticlesSuccess, getArticleSuccess } from './store/actions';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export function getArticles() {
  return axios.get('/posts')
    .then((res) => {
      store.dispatch(getArticlesSuccess(res.data));
      return res;
    });
}

export function getArticle(id) {
  return axios.get(`/posts/${id}`)
    .then((res) => {
      store.dispatch(getArticleSuccess(res.data));
      return res;
    });
}
