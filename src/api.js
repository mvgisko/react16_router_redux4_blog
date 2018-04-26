/*
* @Author: Gisko Maksim
* @Date:   2018-04-26 15:27:17
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-26 16:01:25
*/
import axios from 'axios';
import store from './store';
import { getArticlesSuccess } from './store/actions';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default function getArticles() {
  return axios.get('/posts')
    .then((res) => {
      store.dispatch(getArticlesSuccess(res.data));
      return res;
    });
}
