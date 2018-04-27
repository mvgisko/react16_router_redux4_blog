/*
* @Author: Gisko Maksim
* @Date:   2018-04-25 17:03:07
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-27 17:16:02
*/
const initState = {
  articles: {
    loading: false,
    data: [],
  },
  article: {},
};

const articles = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES_SUCCESS':
      return Object.assign({}, state, {
        articles: {
          data: action.articles
        }
      });
    case 'GET_ARTICLE_SUCCESS':
      return Object.assign({}, state, { article: action.article });
    default:
      return state;
  }
};

export default articles;
