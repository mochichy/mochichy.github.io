import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, Router, hashHistory} from 'react-router'
import App from './App';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import RainbowPage from './RainbowPage'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="projects-page" component={ProjectsPage} />
			<Route path="about-page" component={AboutPage} />
			<Route path="contact-page" component={ContactPage} />
			<Route path="rainbow-page" component={RainbowPage} />

		</Route>
  	</Router>, 
  document.getElementById('root')
);