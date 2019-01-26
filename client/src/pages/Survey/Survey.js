import React, { Component } from 'react';

function Survey() {
	return (
		<div>
			<form>
				Name of Goal:
			<br />
				<input type="text" name="firstname" />
					Paperclips you need to add to complete
				<input type="text" name="lastname" />
				<br />
				<input type="submit" />
			</form>
		</div>

	)
};

export default Survey;