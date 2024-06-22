import {Link} from 'react-router-dom';
import React from 'react';

const Error404Page = () => (
	<div className='signup-page'>
		<div className='form-wrapper'>
			<h2 className='font-bold'>Error 404 - Page Not Found</h2>
			<p>The page you are trying to access does not exist.</p>
			<p className='errmsg'>
				<Link style={{fontWeight: 'bold', textAlign: 'right'}} to='/'>
					You can login here
				</Link>
			</p>
		</div>
	</div>
);

export default Error404Page;
