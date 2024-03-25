import React from 'react'
import FooterLogo from '../../Images/logo white.png'
import classes from '../Footer/Footer.module.css'
import { useNavigate } from 'react-router-dom'
// inport useNavigate

export default function Footer() {

  const navigate = useNavigate()

  const navigateSignin = () =>{
    navigate('/sign_up')
  }
  const navigateLogin = () =>{
    navigate('/sign_in')
  }
  


  return (
    <div className={classes.footerBody}>
      <div className={classes.footerCont}>
        <div className={classes.footerLogo}>
            <img src={FooterLogo} alt='footerLogo' className={classes.img}/>
        </div>
        <div className={classes.footerlist}>
            <h4>Links</h4>
            <p onClick={navigateSignin} className={classes.footerNav}>Register</p>
            <p onClick={navigateLogin} className={classes.footerNav} style={{paddingTop:'10px'}}>Login</p>
        </div>
        <div className={classes.footerlist}>
            <h4>Contact Us</h4>
            <p>Call:   123 456 7890</p>
            <p>Email: <span className={classes.emailText}>  smesupport@ogunstate.gov.ng</span></p>
            <p>Office: No 15, Oke Mosan road</p>
        </div>
      </div>
    </div>
  )
}
