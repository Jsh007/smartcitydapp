// import './ProfileHeader.css';

// import Avatar from '../../../../features/auth/admin/template/avatar/Avatar';
// import {type ProfileHeaderProps} from '@/types/propTypes';
// import ProfileInfo from '../../../../features/auth/admin/template/widgets/ProfileInfo';
// import React from 'react';
// import UserMenu from '../../../../features/auth/admin/template/widgets/ProfileInfo';
// import Welcome from '../../../../features/auth/admin/template/greetings/Welcome';
// import ReferralLink from '@/features/users/admin/templates/links/ReferralLink';
// import useAuth from '@/hooks/useAuth';

/* 
Should contain Welcome message on the left and User Avatar on the left
Should fetch the currently logged in user and ther data from RTK state and pass on the data to it's children.
*/
// props: ProfileHeaderProps
function ProfileHeader() {
  /*
	This data wll be received from the props or global RTK state n production
	*/
  // const authUser = useAuth();
  // const profileData = {
  // 	...authUser,
  // 	dashTip: 'Explore your Dashboard',
  // };
  return (
    <div className="profile-header">
      <h1>Profile Header</h1>
      {/* <h1>Profile Header</h1> */}
      {/* <Welcome username={profileData.username} dashTip={profileData.dashTip} /> */}
      {/* <ReferralLink username={profileData.username} /> */}
      {/* <UserMenu /> */}
      {/* <ProfileInfo username={profileData.username} /> */}
    </div>
  );
}

export default ProfileHeader;
