/*
* @Author: Gisko Maksim
* @Date:   2018-04-25 16:54:02
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-26 11:48:06
*/
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
export default store;
