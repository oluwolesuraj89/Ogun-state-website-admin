import {  Route, Routes  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUp from './Web pages/Sign up/SignUp';
import SignIn from './Web pages/Sign in/SignIn';
import LandingPage from './Web pages/LandingPage/LandingPage';
import Register from './Web pages/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompleteRegistration from './Web pages/Complete Registration/CompleteRegistration';
import Dashboard from './Web pages/Dashboard/Dashboard';
import Dashboard2 from './Web pages/Dashboard2/Dashboard';
import DashboardFinal from './Web pages/Dashboard2/Dashboard';
import Loans from './Web pages/Loans/Loans';
import LoansContinue from './Web pages/Loans Continue/LoansContinue';
import LoansApplication from './Web pages/Loans Generation/LoansApplication';
import Grant from './Web pages/Grant/Grant';
import GrantContinue from './Web pages/Grant continue/GrantContinue';
import CompleteRegDashboard from './Web pages/CompleteRegDashBoard/CompleteRegDashboard'
import MainDashoard from './Web pages/Main Dashboard/MainDashoard';

function App() {
  const [userIsInactive, setUserIsInactive] = useState(false);
  const inactivityThreshold = 300000; 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

 let inactivityTimer;
  
 const resetInactivityTimer = () => {
   if (inactivityTimer) {
     clearTimeout(inactivityTimer);
   }
 
   inactivityTimer = setTimeout(async () => {
   
     setUserIsInactive(true);
     await AsyncStorage.clear();
     navigate('/sign_in');
     
   }, inactivityThreshold);
 };
 
 const handleUserActivity = () => {
   resetInactivityTimer();
 };
 
 useEffect(() => {
   resetInactivityTimer();
 
   const activityEvents = ['mousemove', 'keydown', 'mousedown', 'touchstart'];
   activityEvents.forEach((event) => {
     document.addEventListener(event, handleUserActivity);
   });
 
   return () => {
     activityEvents.forEach((event) => {
       document.removeEventListener(event, handleUserActivity);
     });
 
     if (inactivityTimer) {
       clearTimeout(inactivityTimer);
     }
   };
 }, []);




  return (
    <>
      <Routes>
        <Route path='/'element={<LandingPage/>}/>
        <Route path='/landing_page'element={<LandingPage/>}/>
        <Route path='/sign_up'element={<SignUp/>}/>
        <Route path='/sign_in'element={<SignIn/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/complete_registration'element={<CompleteRegistration/>}/>
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/dashboard_completed'element={<DashboardFinal/>}/>
        <Route path='/loans'element={<Loans/>}/>
        <Route path='/grant'element={<Grant/>}/>
        <Route path='/loans_continue'element={<LoansContinue/>}/>
        <Route path='/grant_continue'element={<GrantContinue/>}/>
        <Route path='/loans_application'element={<LoansApplication/>}/>
        <Route path='/loans_application'element={<LoansApplication/>}/>
        <Route path='/complete_reg_dashboard'element={<CompleteRegDashboard/>}/>
        <Route path='/main_dashboard'element={<MainDashoard/>}/>
        </Routes>
        </>
  );
}

export default App;
