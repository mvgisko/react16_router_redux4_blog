import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import ArticleList from './views/ArticleList';
import Article from './views/Article';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

render(
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Switch>
					<Route exact path="/articles" component={ArticleList} />
					<Route path="/articles/:id" component={Article} />
					<Route path="/" render={() => (<Redirect to="/articles" />)} />
				</Switch>
			</App>
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
