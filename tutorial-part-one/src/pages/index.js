import React from 'react';
import Link from 'gatsby-link';

export default () => (
	<div style={{ color: 'goldenrod' }}>
		<h1>Hi there</h1>
		<p>Wow this is cool!</p>
		<img src="http://lorempixel.com/400/200" alt="" />
		<br />
		<div>
			<Link to="/page-2/">Link</Link>
		</div>
		<div>
			<Link to="/Counter/">Counter</Link>
		</div>
	</div>
);
