import {  Route, Routes  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUp from './Web pages/Sign up/SignUp';
import SignIn from './Web pages/Sign in/SignIn';
import LandingPage from './Web pages/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loans from './Web pages/Loans/Loans';
import LoansApplication from './Web pages/Loans Generation/LoansApplication';
import Grant from './Web pages/Grant/Grant';
import Dashboard from './Web pages/Dashboard/Dashboard';
import ApplyLoan from './Web pages/Loan/ApplyLoan';
import LoanHomePage from './Web pages/Loan HomePage/LoanHomePage';
import ApplyGrant from './Web pages/Grant Application/ApplyGrant';
import SubmitGrantApplication from './Web pages/Grant continue/GrantContinue';
import RegisterPhone from './Web pages/Register Phone/RegisterPhone';
import RegisterEmail from './Web pages/Register Email/RegisterEmail';
import VerifyPhone from './Web pages/Verify Phone/VerifyPhone';
import VerifyEmail from './Web pages/Verify Email/VerifyEmail';
import ForgotPassword from './Web pages/Forgot Password/ForgotPassword';
import ForgotPasswordRedirect from './Web pages/Forgot Password Redirect/ForgotPasswordRedirect';
import ForgotPasswordReset from './Web pages/Forgot Password Reset/ForgotPasswordReset';
import LoansOnboarding from './Web pages/Loans Onboarding/LoansOnboarding';
import GrantOnboarding from './Web pages/Grant Onboarding/GrantOnboarding';
import InvoicesBoard from './Web pages/Admin Monitor Invoice/InvoicesBoard';
import AdministratorInvoice from './Web pages/Admin Monitor Invoice/AdministratorInvoice';
import MainDashoard from './Web pages/Main Dashboard/MainDashoard';
import Success from './Web pages/Success Reports/Success';


function App() {
  const [userIsInactive, setUserIsInactive] = useState(false);
  const inactivityThreshold = 300000; 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

//  let inactivityTimer;
  
//  const resetInactivityTimer = () => {
//    if (inactivityTimer) {
//      clearTimeout(inactivityTimer);
//    }
 
//    inactivityTimer = setTimeout(async () => {
   
//      setUserIsInactive(true);
//      await AsyncStorage.clear();
//      navigate('/sign_in');
     
//    }, inactivityThreshold);
//  };
 
//  const handleUserActivity = () => {
//    resetInactivityTimer();
//  };
 
//  useEffect(() => {
//    resetInactivityTimer();
 
//    const activityEvents = ['mousemove', 'keydown', 'mousedown', 'touchstart'];
//    activityEvents.forEach((event) => {
//      document.addEventListener(event, handleUserActivity);
//    });
 
//    return () => {
//      activityEvents.forEach((event) => {
//        document.removeEventListener(event, handleUserActivity);
//      });
 
//      if (inactivityTimer) {
//        clearTimeout(inactivityTimer);
//      }
//    };
//  }, []);




  return (
    <>
      <Routes>
        <Route path='/'element={<LandingPage/>}/>
        <Route path='/landing_page'element={<LandingPage/>}/>
        <Route path='/sign_up'element={<SignUp/>}/>
        <Route path='/sign_in'element={<SignIn/>}/>
        <Route path='/register_phone'element={<RegisterPhone/>}/>
        <Route path='/register_email'element={<RegisterEmail/>}/>
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/loans'element={<Loans/>}/>
        <Route path='/loan_onboarding'element={<LoansOnboarding/>}/>
        <Route path='/grant_onboarding'element={<GrantOnboarding/>}/>
        <Route path='/loan_application'element={<ApplyLoan/>}/>
        <Route path='/apply_for_loan'element={<LoanHomePage/>}/>
        <Route path='/submit_loan_application'element={<LoansApplication/>}/>
        <Route path='/grant'element={<Grant/>}/>
        <Route path='/grant_application'element={<ApplyGrant/>}/>
        <Route path='/submit_grant_application'element={<SubmitGrantApplication/>}/>
        <Route path='/verify_phone'element={<VerifyPhone/>}/>
        <Route path='/verify_email'element={<VerifyEmail/>}/>
        <Route path='/forgot_password'element={<ForgotPassword/>}/>
        <Route path='/forgot_password_redirect'element={<ForgotPasswordRedirect/>}/>
        <Route path='/forgot_password_reset'element={<ForgotPasswordReset/>}/>
        <Route path='/invoice_onboard'element={<InvoicesBoard/>}/>
        <Route path='/admin_invoice'element={<AdministratorInvoice/>}/>
        <Route path='/main_dashboard'element={<MainDashoard/>}/>
        <Route path='/success'element={<Success/>}/>
        </Routes>
        </>
  );
}

export default App;
