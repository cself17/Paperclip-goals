import React, { Component } from 'react';
import "./Jar.css";
import API from "../../utils/API";

export default class Jar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jar: {}
		}
	}

	componentDidMount() {
		console.log('howdy', this.props.match.params.id)
		API.getJarById(this.props.match.params.id)
			.then(res => {
				console.log('res', res);
				this.setState({ jar: {
					...res.data,
					paperclipsIn: this.makePaperclipsFromNumber(res.data.paperclipsIn),
					paperclipsOut: this.makePaperclipsFromNumber(res.data.paperclipsOut),
				 } })
			})
			.catch(err => console.log(err))
	}

	addpaperclip = id => {
		API.addpaperclip(id)
			.then(response => console.log("response", response))
			.catch(err => console.log("err", err.response))
	}

	/*function Jar() {
		return (
			<React.Fragment>
				<h1>Goal of the Jar</h1>
	
				<div class="row" className="container-drag">
					<div class="col s6">Paperclips</div>
					<div class="col s6">Jar</div>
				</div>
	
			</React.Fragment>
		)
	}
	*/

	/*export default class DragSpace extends Component { */

	onDragStart = (ev, id) => {
		console.log("dragstart:", id);
		ev.dataTransfer.setData("id", id);
	}

	onDragOver = (ev) => {
		ev.preventDefault();
	}

	makePaperclipsFromNumber = count => {
		let result = [];
		for (let i = 0; i < count; i++) {
			result.push({ id: i })
		}
		return result;
	}

	onDrop = (ev, cat) => {
		let id = ev.dataTransfer.getData("id");
		this.setState({
			...this.state,
			jar: {
				...this.state.jar,
				paperclipsIn: this.makePaperclipsFromNumber(this.state.jar.paperclipsIn.length + 1),
				paperclipsOut: this.makePaperclipsFromNumber(this.state.jar.paperclipsOut.length - 1)
			}
		});
		// let tasks = this.state.tasks.filter((task) => {
		// 	if (task.name == id) {
		// 		task.category = cat;
		// 	}
		// 	return task;
		// });
		// this.setState({
		// 	... this.state,
		// 	tasks
		// });
		this.addpaperclip(this.state.jar._id);
	}


	render() {
		var tasks = {
			wip: [],
			complete: []
		};

		console.log('this.state', this.state);

		if (false && this.state.jar && this.state.jar.paperclipsIn) {

			this.state.jar.paperclipsIn.forEach((t) => {
				tasks[t.category].push(
					<div key={t.name}
						onDragStart={(e) => this.onDragStart(e, t.name)}
						draggable
						className="draggable"
						style={{ backgroundColor: t.bgcolor }}

					>
						{t.name}
					</div>
				)
			});
		}



		return (
			<div className="container-drag">

				<div className="row">
					<div className="col s4"></div>
					<div className="header col s4">
					</div>
					<div className="col s4"></div>
				</div>

				<div className="row">
					<div className="wip col s4"
						onDragOver={(e) => this.onDragOver(e)}
						onDrop={(e) => { this.onDrop(e, "wip") }}>
						{/* {tasks.wip} */}
						{this.state.jar && this.state.jar.paperclipsIn && this.state.jar.paperclipsOut.map(clip =>
							<div key={clip.name}
								onDragStart={(e) => this.onDragStart(e, clip.name)}
								draggable
								className="draggable"
								style={{ backgroundColor: clip.bgcolor }}

							>
								{clip.name}
							</div>
						)}
					</div>

					<div className="col s4">
					</div>

					<div className="col s4">
						<div className="hey col s12">

						<div className="col s2"></div>
							<div className="droppable col s8"
								onDragOver={(e) => this.onDragOver(e)}
								onDrop={(e) => this.onDrop(e, "complete")}>
								 {this.state.jar.paperclipsIn && this.state.jar.paperclipsIn.map(clip => <div className="draggable" />)}</div>


							<div className="col 2"></div>

						</div>



					</div>
				</div>
			</div>
		);
	}
}