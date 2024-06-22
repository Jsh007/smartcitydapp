/* eslint-disable @typescript-eslint/indent */
// prettier-ignore
import './SidebarNavs.css';

import {useContext} from 'react';

import {SidebarContext} from './Sidebar';
import {type SidebarLinkProps} from '@/types/propTypes';
import {Link} from 'react-router-dom';

export function SidebarLink({icon, label, active, alert, link}: SidebarLinkProps) {
	const {expanded} = useContext(SidebarContext)!;

	return (
		<Link to={link}>
			<li
				className={`
		  relative flex items-center py-2 px-3 my-1
		  font-medium rounded-md cursor-pointer
		  transition-colors group
		  ${
				active
					? 'bg-gradient-to-tr from-sky-200 to-sky-100 text-sky-700'
					: 'hover:bg-gradient-to-tr from-indigo-900 to-indigo-700 text-gray-100'
			}
	  `}>
				{icon}

				<span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
					{label}
				</span>

				{alert && (
					<div
						className={`absolute right-2 w-2 h-2 rounded bg-sky-400 ${expanded ? '' : 'top-2'}`}></div>
				)}

				{!expanded && (
					<div
						className={`
			absolute left-full rounded-md px-2 py-1 ml-6
			bg-sky-100 text-sky-800 text-sm
			invisible opacity-20 -translate-x-3 transition-all
			group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
		`}>
						{label}
					</div>
				)}
			</li>
		</Link>
	);
}

export default SidebarLink;
