import './src/index.css';

import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import AffilateProfilePage from '@features/user/pages/AffilateProfilePage';
import AffiliateApplyPage from '@features/user/pages/AffiliateApplyPage';
import AlertListAffiliatePage from '@features/alert/pages/AlertListAffiliatePage';
import AlertListPage from '@features/alert/pages/AlertListPage';
// import AffiliatesListPage from '@/features/affiliates/pages/AffiliatesListPage';
// import AppFlow from './src/components/admin/navigation/AppFlow';
import AppFlow from '@components/navigation/AppFlow';
import ClaimListAffiliatePage from '@features/claim/pages/ClaimListAffiliatePage';
import ClaimListPage from '@features/claim/pages/ClaimListPage';
// NEW
import DashFlow from '@components/navigation/DashFlow';
import DashboardAffilatePage from '@features/dashboard/pages/DashboardAffilatePage';
import DashboardPage from '@features/dashboard/pages/DashboardPage';
import EarningListAffiliatePage from '@features/earning/pages/EarningListAffiliatePage';
import EarningListPage from '@features/earning/pages/EarningListPage';
import Error404Page from 'src/pages/Error404Page';
// import PersistentLogin from '@/features/auth/PersistentLogin';
import ReferralListAffiliatePage from '@features/referral/pages/ReferralListAffiliatePage';
import ReferralListPage from '@features/referral/pages/ReferralListPage';
// import RequireAuth from '@/features/auth/RequireAuth';
import TaskListAffiliatePage from '@features/task/pages/TaskListAffiliatePage';
import TaskListPage from '@features/task/pages/TaskListPage';
import UserProfilePage from '@features/user/pages/UserProfilePage';
import UserTokenAffiliatePage from '@features/user/pages/UserTokenAffiliatePage';
import UserTokenPage from '@features/user/pages/UserTokenPage';
import { lazy } from 'react';
import { roles } from '@config/roles';

const Signup = lazy(async () => import('@features/auth/pages/SignupPage'));
const SignupSuccess = lazy(async () => import('@features/auth/pages/SignupSuccessPage'));
const Login = lazy(async () => import('@features/auth/pages/LoginPage'));
const AdminLogin = lazy(async () => import('@features/auth/pages/AdminLoginPage'));
const ResetPassword = lazy(async () => import('@features/auth/pages/ResetPasswordPage'));
const UpdatePassword = lazy(async () => import('@features/auth/pages/UpdatePasswordPage'));

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppFlow />} errorElement={<Error404Page />}>
      {/* Public Routes */}
      <Route index element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="admin" element={<AdminLogin />} />
      <Route path="success" element={<SignupSuccess />} />
      <Route path="reset" element={<ResetPassword />} />
      {/* You might need to move this into the user/ route. 
	  since only authenticated/identified users should access this page */}
      <Route path="update" element={<UpdatePassword />} />

      {/* <Route element={<PersistentLogin />}> */}
      {/* <Route element={<RequireAuth permitedRoles={[roles.affiliate]} />}> */}
      <Route path="affiliatedash" element={<DashFlow />}>
        <Route index element={<DashboardAffilatePage />} />
        {/* Features Routes */}
        <Route path="profiles">
          <Route index element={<AffilateProfilePage />} />
          {/* <Route path="tasks" element={<Tasks />} /> */}
        </Route>
        <Route path="tasks">
          <Route index element={<TaskListAffiliatePage />} />
        </Route>

        <Route path="tokens">
          <Route index element={<UserTokenAffiliatePage />} />
        </Route>
        <Route path="referrals">
          <Route index element={<ReferralListAffiliatePage />} />
        </Route>
        <Route path="claims">
          <Route index element={<ClaimListAffiliatePage />} />
        </Route>
        <Route path="earnings">
          <Route index element={<EarningListAffiliatePage />} />
        </Route>
        <Route path="alert">
          <Route index element={<AlertListAffiliatePage />} />
        </Route>
      </Route>
      {/* </Route> */}

      {/* <Route element={<RequireAuth permitedRoles={[roles.user]} />}> */}
      <Route path="dash" element={<DashFlow />}>
        <Route index element={<DashboardPage />} />
        {/* Features Routes */}
        <Route path="profiles">
          <Route index element={<UserProfilePage />} />
          <Route path="apply-affiliate" element={<AffiliateApplyPage />} />
          {/* <Route path="tasks" element={<UserTasks />} /> */}
        </Route>
        <Route path="tasks">
          <Route index element={<TaskListPage />} />
        </Route>
        <Route path="tokens">
          <Route index element={<UserTokenPage />} />
        </Route>
        <Route path="referrals">
          <Route index element={<ReferralListPage />} />
        </Route>
        <Route path="claims">
          <Route index element={<ClaimListPage />} />
        </Route>
        <Route path="earnings">
          <Route index element={<EarningListPage />} />
        </Route>
        <Route path="alert">
          <Route index element={<AlertListPage />} />
        </Route>

        {/* <Route path="domains">
          <Route index element={<UserDomainsList />} />
          <Route path=":id" element={<EditDomain />} />
        </Route> */}
      </Route>
      {/* </Route> */}
      {/* </Route> */}
    </Route>,
  ),
);
