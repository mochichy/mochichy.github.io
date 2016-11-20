import React from 'react';
import './css/AboutPage.css';


var AboutPage = React.createClass({
	render(){
		return(
			<div className="about">
				<div className="frame">
					<img src="img/profile.jpg" alt="profile" />
				</div>
				<div className="description">
					<h1>About Me</h1>
					<p>Hi there! My name is Christy Lu. I'm a sophomore at the University of Washington majoring in Informatics. 
					I'm also an officer of TYAPN(Taiwanese Youth Alliance of Pacific West), working hard to connect students and professionals. 
					User interface and developement are my dream fileds and I want to make lives of people using technology better.</p>
				</div>
			</div>
		);

	}
});

export default AboutPage;