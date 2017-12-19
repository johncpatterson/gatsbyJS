import React from 'react';

import User from '../components/User';

import Container from '../components/Container';



// const User = props => (
// 	<UserWrapper>
// 		<Avatar src={props.avatar} alt="" />
// 		<Description>
// 			<Username>{props.username}</Username>
// 			<Excerpt>{props.excerpt}</Excerpt>
// 		</Description>
// 	</UserWrapper>
// );

export default () => (
	<Container>
		<h1>About Styled Components</h1>
		<p>Styled Components is cool</p>
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
