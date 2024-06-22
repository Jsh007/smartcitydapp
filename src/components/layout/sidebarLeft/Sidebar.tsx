import './SidebarNavs.css';
import './Sidebar.css';
import {ChevronFirst, ChevronLast, Menu, X} from 'lucide-react';
import {createContext, useState} from 'react';

import {type SidebarProps} from '@/types/propTypes';
import {type SidebarContextType} from '@/types/stateTypes';
import {Logout} from '@mui/icons-material';
import {useSendLogoutMutation} from '@/features/auth/authApiSlice';
import {useNavigate} from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import Avatar from '@/features/auth/public/template/avatar/Avatar';

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar({children}: SidebarProps) {
	const [expanded, setExpanded] = useState(true);
	const {username, email} = useAuth();
	const [sendLogout] = useSendLogoutMutation();
	const navigate = useNavigate();
	const userInitals = username?.substring(0, 2).toLocaleUpperCase();

	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<aside className='h-screen desktop-menu'>
			<nav className='h-full flex flex-col  lg:border-r shadow-sm sidebar-style'>
				{/* Header */}
				<div className='p-4 pb-2 flex justify-between items-center'>
					<img
						src='/images/gtx-stream-logo1.png'
						className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
						alt=''
					/>
					{/* Hide this Btn on mobile screens */}
					{/* Desktop menu Icon */}
					<button
						onClick={() => {
							setExpanded((curr) => !curr);
						}}
						className='max-sm:hidden p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
						{expanded ? <ChevronFirst color='black' /> : <ChevronLast color='#000' />}
					</button>
					{/* Mobile menu Icon */}
					<button
						onClick={() => {
							setMenuOpen(!menuOpen);
						}}
						className='lg:hidden md:hidden p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
						{menuOpen ? <X color='#000' /> : <Menu color='#000' />}
					</button>
				</div>
				{/* Links For Desktop  View */}
				<SidebarContext.Provider value={{expanded}}>
					{menuOpen ? (
						<ul className='open flex-1 px-3 lg:hidden'>{children}</ul>
					) : (
						<ul className='flex-1 px-3 max-sm:hidden'>{children}</ul>
					)}
				</SidebarContext.Provider>
				{/* Footer */}
				<div className='border-t border-b flex p-3 sidebar-userinfo'>
					<Avatar
						initials={userInitals}
						borderRadius={8}
						width={50}
						height={50}
						background='#27275a'
					/>
					<div
						className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}>
						<div className='leading-4'>
							<h4 className='font-semibold text-gray-100'> {username} </h4>
							<span className='text-xs text-gray-100'> {email} </span>
						</div>
						{/* <MoreVertical size={20} className='text-gray-600' /> */}
						<Logout
							className='text-gray-200 cursor-pointer'
							onClick={async (e) => {
								const result = await sendLogout(null);

								navigate('/');
							}}
						/>
					</div>
				</div>
			</nav>
		</aside>
	);
}
