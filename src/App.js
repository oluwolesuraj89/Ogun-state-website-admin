import {  Route, Routes  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUp from './Web pages/Sign up/SignUp';
import SignIn from './Web pages/Sign in/SignIn';
import LandingPage from './Web pages/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './Web pages/Dashboard/Dashboard';

import CompleteReg from './Web pages/Complete Reg/CompleteReg';

import { RegistrationProvider } from './Web pages/RegistrationContext';

// import GrantTable from './Web pages/News Editor/NewsEditor';
import NewsEditor from './Web pages/News Editor/NewsEditor';
import SubNews from './Web pages/Sub News/SubNews';
import PubNews from './Web pages/Pub News/PubNews';
import CreateNews from './Web pages/CreateNews/CreateNews';


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
    <RegistrationProvider>
      <Routes>
        <Route path='/'element={<SignIn/>}/>
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/news_editor'element={<NewsEditor/>}/>
        <Route path='/my_profile'element={<CompleteReg/>}/>
        <Route path='/sign_in'element={<SignIn/>}/>
        <Route path='/subnew' element={<SubNews />} />
        <Route path='pubnew' element={<PubNews />} />
        <Route path='/create_news' element={<CreateNews/>}/>
        {/* <Route path='/landing_page'element={<LandingPage/>}/> */}
        <Route path='/sign_up'element={<SignUp/>}/>
        {/* <Route path='/register_phone'element={<RegisterPhone/>}/>
        <Route path='/register_email'element={<RegisterEmail/>}/>
        <Route path='/loans'element={<Loans/>}/>
        <Route path='/loan_onboarding'element={<LoansOnboarding/>}/>
        <Route path='/loan'element={<LoanTable/>}/>
        <Route path='/grant_onboarding'element={<GrantOnboarding/>}/>
        <Route path='/loan_ineligible'element={<LoanIneligible/>}/>
        <Route path='/grant_ineligible'element={<GrantIneligible/>}/>
        <Route path='/loan_application'element={<ApplyLoan/>}/>
        <Route path='/apply_for_loan'element={<LoanHomePage/>}/>
        <Route path='/submit_loan_application'element={<LoansApplication/>}/>
        <Route path='/grant'element={<Grant/>}/> */}
        {/* <Route path='/submit_grant_application'element={<SubmitGrantApplication/>}/> */}
        {/* <Route path='/my_profile'element={<Profile/>}/> */}
        {/* <Route path='/verify_phone'element={<VerifyPhone/>}/>
        <Route path='/verify_email'element={<VerifyEmail/>}/>
        <Route path='/forgot_password'element={<ForgotPassword/>}/>
        <Route path='/forgot_password_redirect'element={<ForgotPasswordRedirect/>}/>
        <Route path='/forgot_password_reset'element={<ForgotPasswordReset/>}/>
        <Route path='/invoice_onboard'element={<InvoicesBoard/>}/>
        <Route path='/admin_invoice'element={<AdministratorInvoice/>}/>
        <Route path='/main_dashboard'element={<MainDashoard/>}/>
        <Route path='/header_nav'element={<HeaderNav/>}/>
        <Route path='/success'element={<Success/>}/>
        <Route path='/apply_grant'element={<ApplyGrant/>}/> */}
        </Routes>
        </RegistrationProvider>
        </>
  );
}

export default App;
