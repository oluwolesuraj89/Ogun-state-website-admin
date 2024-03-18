import React from 'react'
import classes from '../../Web pages/Registration/PersonalDetail.module.css'
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'

export default function PersonalDetails() {
  return (
    <div className={classes.regBody}>
      <div className={classes.regContainer}>
        <div className={classes.sideNav}>
            <div className={classes.logoCont}>
                <img src={RegLogo} alt='Logo'/>
            </div>
            <div className={classes.regMenu}>
            <Link to={'/#'}><p className={classes.active}>Complete Registration</p></Link>
            <Link to={'/#'}><p>Loans</p></Link>
            <Link to={'/#'}><p>Grants</p></Link>
            <Link to={'/#'}><p>Invoices</p></Link>
            <Link to={'/#'}><p>Logout</p></Link>
            </div>
        </div>
        <div className={classes.formSection}>
            <h1>Welcome Oriade</h1>
            <p>Apply for grants or loans from the Ogun state govt</p>
            <div className={classes.formSecCont}>
                <h3>Complete Registration</h3>
            </div>
            <div className={classes.mainform}></div>
        </div>
        
      </div>
    </div>
  )
}
