import React from 'react';
import $ from 'jquery';
import Baby from 'babyparse';
import '../node_modules/materialize-css/dist/css/materialize.css';
import './css/ProjectsPage.css';

var ProjectsPage = React.createClass({
	getInitialState(){
		return{content:[]}
	},

	componentDidMount(){
		$.get('data/data.csv').then(function(data){
			var parsed = Baby.parse(data, {header:true});
			this.setState({content:parsed.data})
		}.bind(this));
	},

	render(){
		return(
			<div className="projects">
				
				<div>
					{
						this.state.content.map(function(d, i){
							return(
								<div key={i}>
									<div className="row" >
										<div className="col l4 s12 description">
											<h2>{d.name}</h2>
											<p>{d.description}</p>
											<p><b>{d.note1}</b></p>
											<p><b>{d.note2}</b></p>
										</div>
										<div className="col l6 s8 photo">
											<a href={d.url} target="_blank"><img src={d.img} alt="img" /></a>
										</div>
										<div className="col l2 s4 moreinfo">
											<h4>Date</h4>
											<p>{d.date}</p>

											<h4>Made with</h4>
											<p>{d.using}</p>

											<a href={d.url} target="_blank">Link to the website</a>
											<p></p>
										</div>
									</div>
									<div className="row">
									<hr></hr>
									</div>
								</div>
							);
						})

					}
				</div>

			</div>
		);
	}

});

export default ProjectsPage;