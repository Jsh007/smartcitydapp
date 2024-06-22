import './LayoutContent.css';

import {Outlet} from 'react-router-dom';
import ProfileHeader from '../header/ProfileHeader';
import React from 'react';

function LayoutBody() {
	return (
		<div className='content-container'>
			<ProfileHeader />
			<div className='outlet-wrapper'>
				<Outlet />
			</div>
		</div>
	);
}

export default LayoutBody;
