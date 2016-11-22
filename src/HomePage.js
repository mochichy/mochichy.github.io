import React from 'react';
import './css/HomePage.css';

var HomePage = React.createClass({

	render(){
		return(
			<div className="home">
				<h3>Hello, my name is Christy!</h3>
				<h3>I am a</h3>
				<h3> Programmer. Dreamer. Learner. Thinker </h3><br/>
				<h5>This portfolio is mainly about what I have learned in Info343 course, 
				Client-side Programming this quarter.</h5>
			</div>
		);

	}
});

export default HomePage;