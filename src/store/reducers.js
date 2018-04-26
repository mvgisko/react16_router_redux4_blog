/*
* @Author: Gisko Maksim
* @Date:   2018-04-25 17:03:07
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-26 16:57:11
*/
const initState = { articles: [] };

const articles = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES_SUCCESS':
      return Object.assign({}, state, { articles: action.articles });
    default:
      return state;
  }
};

export default articles;
