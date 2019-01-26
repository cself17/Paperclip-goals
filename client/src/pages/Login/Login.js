import React from 'react'

function Login() {
	return (
		<React.Fragment>
			<form>
				First name:<br />
				<input type="text" name="firstname" />
				<br />
				Last name:<br />
				<input type="text" name="lastname" />
				<br />
				<input type="submit" />
			</form>
		</React.Fragment>
	)
}

export default Login;