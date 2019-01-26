import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from "react-router-dom"
import "./home.css"

export default class Home extends React.Component {
	state = {
		jars: []
	}
	componentDidMount() {
		API.getAllJars()
			.then(response => this.setState({
				jars: response.data
			}))
			.catch(err => console.log("error", err))
	}
	render() {

		return (
			<div class="back">
			<div class="row">
			<div class="col s2"></div>

			<div class="card-panel #4db6ac #e1f5fe light-blue lighten-5

 col s8">
			<h1>Paperclip Goals</h1>
			</div>
			
			</div>
				<ul>
					{this.state.jars.map(jar =>

						<div class="row">
						<div class="col s4"></div>
							<div class="card-panel #e1f5fe light-blue lighten-5
 col s4">
								<h4><li key={jar._id}>
									<Link to={`/jar/${jar._id}`}>{jar.name}</Link>
								</li>
								</h4>
								<div class="col s4"></div>
							</div>
						</div>
					)}
				</ul>
			</div>
		)
	}
}