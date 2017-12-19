import React from 'react';
//import AboutCssModules from '../pages/about-css-modules.js';
import Container from '../components/Container';
//import styles from '../pages/about-css-modules.module.css';
import styled from 'styled-components';

const UserWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto 12px auto;
	&:last-child {
		margin-bottom: 0;
	}
`;

const Avatar = styled.img`
	flex: 0 0 96px;
	width: 96px;
	height: 96px;
	margin: 0;
`;

const Description = styled.div`
	flex: 1;
	margin-left: 18px;
	padding: 12px;
`;

const Username = styled.h2`
	margin: 0 0 12px 0;
	padding: 0;
	color: tomato;
`;

const Excerpt = styled.p`
	margin: 0;
`;


const User = props => {
	return (
		// Styling with CSS Modules
		// <div className={styles.user}>
		// 	<img src={props.avatar} className={styles.avatar} alt="" />
		// 	<div className={styles.description}>
		// 		<h2 className={styles.username}>{props.username}</h2>
		// 		<p className={styles.excerpt}>{props.excerpt}</p>
		// 	</div>
		// </div>

		// Styling with Glamor JS
		// <div
		// 	css={{
		// 		display: `flex`,
		// 		alignItems: `center`,
		// 		margin: `0 auto 12px auto`,
		// 		'&:last-child': { marginBottom: 0 }
		// 	}}
		// >
		// 	<img
		// 		src={props.avatar}
		// 		css={{ flex: `0 0 96px`, width: 96, height: 96, margin: 0 }}
		// 		alt=""
		// 	/>

		// 	<div css={{ flex: 1, marginLeft: 18, padding: 12 }}>
		// 		<h2 css={{ margin: `0 0 12px 0`, padding: 0 }}>
		// 			{props.username}
		// 		</h2>
		// 		<p css={{ margin: 0 }}>{props.excerpt}</p>
		// 	</div>
		// </div>

		// Styling with Styled Components

		
		<UserWrapper>
			<Avatar src={props.avatar} alt="" />
			<Description>
				<Username>{props.username}</Username>
				<Excerpt>{props.excerpt}</Excerpt>
			</Description>
		</UserWrapper>
	);
};

export default User;
