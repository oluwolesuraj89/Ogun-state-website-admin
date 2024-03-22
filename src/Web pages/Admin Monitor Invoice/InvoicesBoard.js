import React, { useState, useEffect, useRef } from 'react';
import MainDashoard from '../Main Dashboard/MainDashoard';
import classes from './InvoicesBoard.module.css'
import { Link } from 'react-router-dom';

export default function InvoicesBoard() {
  return (
    <div>
        <MainDashoard />
        <div className={classes.finishedbodyCont}>
            <div className={`${classes.formSecCont} ${classes.shadow}`}>
                <h3>Invoices</h3>
            </div>    
            <div className={classes.invoices}>
                <div className={classes.invoiceCards}>
                    <span>Invoice #001</span>
                    <h4>Invoice for Administrative fee</h4>
                    <Link to={'/admin_invoice'}>
                        <button className={classes.invoiceOpen}>Open</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>

  )
}
