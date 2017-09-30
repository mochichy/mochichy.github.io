import React from 'react';
import { Link } from 'react-router';
import './css/App.css';

//import $ from 'jquery';


var App = React.createClass({
	getInitialState(){
		return{name:""}
	},
	render(){
		return(
			<div className="App">
				<div className="name">
					<h2>Christy Lu</h2>
				</div>
				<div className="navbar">
					<Link className="link" activeClassName="active" to="/">Home</Link>
					<Link className="link" activeClassName="active" to="/projects-page">Projects</Link>
					<Link className="link" activeClassName="active" to="/about-page">About</Link>
					<Link className="link" activeClassName="active" to="/contact-page">Contact</Link>
					<Link className="link" activeClassName="active" to="/rainbow-page">Rainbow!</Link>
				</div>
				<div className="children">
					{this.props.children}
				</div>
			</div>

		);

	}

});

export default App;