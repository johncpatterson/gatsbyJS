import React from 'react';
import User from '../components/User';
import Container from '../components/Container';

export default () => (
	<Container>
		<h1>About Glamor</h1>
		<p>Glamor is cool</p>
		<User
			username="Jane Doe"
			avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
			excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
		/>

		<User
			username="Bob Smith"
			avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
			excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
		/>
	</Container>
);
