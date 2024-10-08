import './src/index.css';

import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import AffilateProfilePage from '@features/user/pages/AffilateProfilePage';
import AffiliateApplyPage from '@features/user/pages/AffiliateApplyPage';
import AffiliateDashFlow from '@components/navigation/affiliate/DashFlow';
import AlertListAffiliatePage from '@features/alert/pages/AlertListAffiliatePage';
import AlertListPage from '@features/alert/pages/AlertListPage';
// import AffiliatesListPage from '@/features/affiliates/pages/AffiliatesListPage';
// import AppFlow from './src/components/admin/navigation/AppFlow';
import AppFlow from '@components/navigation/AppFlow';
import BonusClaimingPage from '@features/bonus/pages/BonusClaimingPage';
import BonusListAffiliatePage from '@features/bonus/pages/BonusListAffiliatePage';
import BonusListPage from '@features/bonus/pages/BonusListPage';
import ClaimListAffiliatePage from '@features/claim/pages/ClaimListAffiliatePage';
import ClaimListPage from '@features/claim/pages/ClaimListPage';
// NEW
import DashFlow from '@components/navigation/user/DashFlow';
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
import UserTokenAffiliateClaimingPage from '@features/user/pages/UserTokenAffiliateClaimingPage';
import UserTokenAffiliatePage from '@features/user/pages/UserTokenAffiliatePage';
import UserTokenClaimingPage from '@features/user/pages/UserTokenClaimingPage';
import UserTokenPage from '@features/user/pages/UserTokenPage';
import { lazy } from 'react';
import { roles } from '@config/roles';
import TwitterLoginPage from '@features/auth/pages/TwitterLoginPage';
import AffiliateWithdrawalPage from '@features/user/pages/AffiliateWithdrawalPage';
import BonusClaimingAffiliatePage from '@features/bonus/pages/BonusClaimingAffiliatePage';

const Signup = lazy(async () => import('@features/auth/pages/SignupPage'));
const SignupSuccess = lazy(async () => import('@features/auth/pages/SignupSuccessPage'));
const Login = lazy(async () => import('@features/auth/pages/LoginPage'));
const AdminLogin = lazy(async () => import('@features/auth/pages/AdminLoginPage'));

const ResetPassword = lazy(async () => import('@features/auth/pages/ResetPasswordPage'));
const ForgotPassword = lazy(async () => import('@features/auth/pages/ForgotPasswordPage'));
const ProfileEditPage = lazy(async () => import('@features/auth/pages/ProfileEditPage'));

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppFlow />} errorElement={<Error404Page />}>
      {/* Public Routes */}
      <Route index element={<Login />} />
      <Route path="twitter-login" element={<TwitterLoginPage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="admin" element={<AdminLogin />} />
      <Route path="success" element={<SignupSuccess />} />
      {/* forgot password form and reset password form for the public */}
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-pasword" element={<ResetPassword />} />

      {/* <Route element={<PersistentLogin />}> */}
      {/* <Route element={<RequireAuth permitedRoles={[roles.affiliate]} />}> */}
      <Route path="affiliatedash" element={<AffiliateDashFlow />}>
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
          {/* This route should render the appropriate token claiming page component
          which will process the claiming 
          pass the userId in the route parameter or retrieve it from useAuth inside the page component
          */}
          <Route path="claim" element={<UserTokenAffiliateClaimingPage />} />
        </Route>
        <Route path="bonuses">
          <Route index element={<BonusListAffiliatePage />} />
          <Route path="claim" element={<BonusClaimingAffiliatePage />} />
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
        <Route path="withdrawals">
          <Route index element={<AffiliateWithdrawalPage />} />
        </Route>
        <Route path="alerts">
          <Route index element={<AlertListAffiliatePage />} />
        </Route>
        {/* Profile Edit form for authenticated users */}
        <Route path="edit-profile">
          <Route path=":id" element={<ProfileEditPage />} />
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
          <Route path="claim" element={<UserTokenClaimingPage />} />
        </Route>
        <Route path="bonuses">
          <Route index element={<BonusListPage />} />
          <Route path="claim" element={<BonusClaimingPage />} />
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
        <Route path="alerts">
          <Route index element={<AlertListPage />} />
        </Route>
        {/* Profile Edit form for authenticated users */}
        <Route path="edit-profile">
          <Route path=":id" element={<ProfileEditPage />} />
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
