import React from 'react';
import { Link } from 'react-router';
import './css/App.css';

//import $ from 'jquery';


var App = React.createClass({

	render(){

		return(
			<div className="App">
				<div className="name">
					<h1>Christy Lu</h1>
				</div>
				<div className="navbar">
					<Link className="link" activeClassName="active" to="/">Home</Link>
					<Link className="link" activeClassName="active" to="/projects-page">Projects</Link>
					<Link className="link" activeClassName="active" to="/about-page">About</Link>
					<Link className="link" activeClassName="active" to="/contact-page">Contact</Link>
				</div>
				<div className="children">
					{this.props.children}
				</div>
			</div>

		);

	}

});

export default App;