import React from 'react'
import OgunLogo from '../../Images/logo ogun 1.svg'
import classes from './AdministratorInvoice.module.css'
import QRImg from '../../Images/QR-Code.svg'
import Ellipse from '../../Images/Invoic-Ellipse.svg'

export default function AdministratorInvoice() {
  return (
    <div className={classes.adminBody}>
        <button className={classes.printBtn}>Print</button>
        <header className={`${classes.flexCont} ${classes.headerBottomBorder}`}>
            <div className={classes.Logo}>
                <img src={OgunLogo} alt='Ogun Logo' className={classes.img}/>
            </div>
            <div className={classes.headerDetails}>
                <p style={{color:'black'}}>Ogun State Internal Revenue Service</p>
                <small>Parastatal building, Oke Mosan, Abeokuta, Ogun State</small>
                <p style={{color:'black'}}><small>080-705-806-51</small></p>
                <p style={{color:'#38ACFF'}}><small>ogirs@ogunstate.gov.ng</small></p>
            </div>
        </header>

        <div className={`${classes.flexCont} ${classes.section1}`}>
            <div className={classes.bearerDetails}>
                <small>INVOICE TO:</small>
                <p style={{color:'black'}}>MR EMMANUEL OLAOLUWA ORIADE</p>
                <h6><b>S-TIN: 37170954507</b></h6>
            </div>
            <div className={classes.bearerRight}>
                <h2>INVOICE</h2>
                <p>Date of Invoice: 2024-03-14 11:23:32</p>
            </div>
        </div>

        <div className={classes.section2}>
            <div className={classes.paymentCode}>
                <h4>Payment Code: 0171000000060</h4>
            </div>
            <div className={classes.qrCodeImg}>
                <img src={QRImg} alt='QR Code' className={classes.img}/>
            </div>
        </div>

        <div className={classes.section3}>
            <table>
                <tr>
                <th className={classes.color1} style={{color:'white'}}>#</th>
                <th className={classes.color2}>DESCRIPTION</th>
                <th className={classes.color3}>Total Amount Payable</th>
                <th className={classes.color1} style={{color:'white'}}>TOTAL</th>
                </tr>
                <tr>
                    <td className={classes.color1} style={{color:'white'}}>1</td>
                    <td className={classes.color2} style={{color:'#2D995F'}}>Administrator Fee</td>
                    <td className={classes.color3}>N5,000</td>
                    <td className={classes.color1} style={{color:'white'}}>N5,000</td>
                </tr>
            </table>
            <div className={classes.totalSec}>
                <div className={classes.totalSecCont}>
                    <div className={classes.subTotal}>
                        <span>SUBTOTAL</span>
                        <span>N5,000.00</span>
                    </div>
                    <div className={classes.grandTotal}>
                        <span>SUBTOTAL</span>
                        <span>N5,000.00</span>
                    </div>
                </div>
            </div>
        </div>

        <div className={classes.section4}>
            {/* <p></p> */}
            <table>
                <tr>
                    <td colSpan={2} className={classes.centers}>STEPS TO MAKE YOUR PAYMENT</td>
                </tr>
                <tr>
                    <td className={classes.centers}>ONLINE</td>
                    <td className={classes.centers}>BANK BRANCH (for Bank Tellers)</td>
                </tr>
                <tr>
                    <td className={classes.tbcons}>
                        <span>
                            <h5>Card Payment</h5>
                            <div><img src={Ellipse} alt='ellipse'/>Visit pay.ogunstate.gov.ng</div>
                            <div><img src={Ellipse} alt='ellipse'/>Enter the payment code</div>
                            <div><img src={Ellipse} alt='ellipse'/>Input the Captcha and click Get Details</div>
                            <div><img src={Ellipse} alt='ellipse'/>Select Card and click on the gateway to use</div>
                            <div><img src={Ellipse} alt='ellipse'/>Click on “Make Payment” and continue the process    </div>
                        </span>
                    </td>
                    <td className={classes.tbcons}>
                        <span>
                            <h5>Remita</h5>
                            <div><img src={Ellipse} alt='ellipse'/>A Teller login to www.remita.net or Bank application using their login credentials</div>
                            <div><img src={Ellipse} alt='ellipse'/>Go to the Payments menu and select Pay Taxes</div>
                            <div><img src={Ellipse} alt='ellipse'/>Select Ogun State Inland Revenue Service from the dropdown list of Tax Authorities</div>
                            <div><img src={Ellipse} alt='ellipse'/>Select pay with payment code method from the Service Name dropdown</div>
                            <div><img src={Ellipse} alt='ellipse'/>Input the Payment Code and click the SEARCH button,</div>
                            <div><img src={Ellipse} alt='ellipse'/>Continue to complete the transaction processing</div>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className={classes.tbcons}>
                        <span>
                            <h5>Bank Transfer</h5>
                            <div><img src={Ellipse} alt='ellipse'/>Visit pay.ogunstate.gov.ng</div>
                            <div><img src={Ellipse} alt='ellipse'/>Enter the payment code</div>
                            <div><img src={Ellipse} alt='ellipse'/>Input the Captcha and click Get Details</div>
                            <div><img src={Ellipse} alt='ellipse'/>Select Bank Transfer</div>
                            <div><img src={Ellipse} alt='ellipse'/>Click on “Make Payment” and continue the process    </div>
                        </span>
                    </td>
                    <td className={classes.tbcons}>
                    <span>
                        <h5>Express Pay</h5>
                        <div><img src={Ellipse} alt='ellipse'/>Login Into the System</div>
                        <div><img src={Ellipse} alt='ellipse'/>On the Dashboard, Select the State for which transaction is to be performed e.g Ogun State.</div>
                        <div><img src={Ellipse} alt='ellipse'/>On the transaction page, Select the “Pay with Assessment/Bill (Payment Code)” payment method.</div>
                        <div><img src={Ellipse} alt='ellipse'/>Enter the Payment Code into the textbox provided as shown below code and fetch the payer and assessment information</div>
                        <div><img src={Ellipse} alt='ellipse'/>Continue to complete the transaction processing</div>
                    </span>
                    </td>
                </tr>
            </table>
            <div className={classes.footer}>
                <p>Ogun State Internal Revenue Service (OGIRS)</p>
            </div>
        </div>
    </div>
  )
}
