import React from 'react';
import './css/ContactPage.css';

var ContactPage = React.createClass({
	render() {
		return(
			<div className="contact">
				<img src="img/contact.png" alt="paper-plane"/>
				<div className="contactme">
					<p>hyl9@uw.edu | 626-215-9650</p>
				</div>
				<div className="icon">
					<a href="https://github.com/znfish" target="_blank"><img src="img/GitHub.png" alt="GitHub"/></a>
					<a href="https://medium.com/@christylu" target="_blank"><img src="img/medium.png" alt="medium"/></a>
					<a href="https://www.linkedin.com/in/christy-lu-193015116?trk=nav_responsive_tab_profile_pic" target="_blank"><img src="img/linkedin.png" alt="linkedin"/></a>
				</div>


			</div>
		);

	}


});

export default ContactPage;