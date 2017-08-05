import React from 'react';
import './css/AboutPage.css';


var AboutPage = React.createClass({
	render(){
		return(
			<div className="about">
				<div className="frame">
					<img src="img/profile.jpg" alt="profile" />
				</div>
				<div className="aboutme">
					<h1>About Me</h1>
					<p>Hi there! My name is Christy Lu. I'm a junior at the University of Washington majoring in Informatics. 
					I'm also a help desk consultant at UW-IT Learning Techonologies, working hard to provide software support and maintain harwdware. 
					Technology accesibility and developement are my dream fileds and I want to make lives of people using technology better!</p>
					<p>Please see my resume <a href="https://drive.google.com/file/d/0B56be1tVjhCAMkY0LVZzNXU4bTQ/view?usp=sharing" target="_blank"> HERE</a></p>
				</div>
			</div>
		);

	}
});

export default AboutPage;