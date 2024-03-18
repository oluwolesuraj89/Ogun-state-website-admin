import React from 'react'
import FooterLogo from '../../Images/logo white.png'
import classes from '../Footer/Footer.module.css'

export default function Footer() {
  return (
    <div className={classes.footerBody}>
      <div className={classes.footerCont}>
        <div className={classes.footerLogo}>
            <img src={FooterLogo} alt='footerLogo' className={classes.img}/>
        </div>
        <div className={classes.footerlist}>
            <h4>Quick Links</h4>
            <p >News</p>
            <p>Blog</p>
            <p>About</p>
            <p>Register</p>
        </div>
        <div className={classes.footerlist}>
            <h4>Contact Us</h4>
            <p>Call: 123 456 7890</p>
            <p>Email: smeogunstate@gov.ng</p>
            <p>Office: No 15, Oke Mosan road</p>
        </div>
      </div>
    </div>
  )
}
