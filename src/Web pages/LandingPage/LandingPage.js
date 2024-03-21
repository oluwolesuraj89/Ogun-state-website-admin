  import React from "react";
import classes from '../LandingPage/LandingPage.module.css'
import HeaderNav from "../HeaderNav/HeaderNav";
import { Accordion } from "react-bootstrap";
import Sellers from '../../Images/background3.png';
import Footer from "../Footer/Footer";
import { useNavigate, NavLink } from "react-router-dom";


function LandingPage() {
  const navigate = useNavigate();

  const handleNavigateSignup = () => {
    navigate('/sign_up');
  }

  return (
    <div className={classes.body}>
      <HeaderNav />
      <div className={classes.topSpace}></div>
      <div className={classes.container}>
        <div className={classes.section1}>
          <div className={classes.heroContent}>
            <h1 style={{ color: '#000000' }}>Welcome</h1>
            <h1 style={{ color: '#000000' }}>To Ogun State <span>SME Empowerment </span> Portal</h1>
            <p>Ogun state launches its SME empowerment portal for the disbursement
              of its N500 million naira SME empowerment funds. The program will
              empower over 500 small and medium scale businesses in Ogun state.
            </p>
            <button onClick={handleNavigateSignup} className={classes.greenBtn}>Get started</button>
          </div>
        </div>
      </div>
      <div className={classes.container}>
      <div className={`${classes.contentContainer} ${classes.dapoSection}`}>
          <div className={classes.section2}>
            {/* <h1>Hello world </h1> */}
          </div>

        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          <div className={classes.section3}>
            <div className={classes.sellerImg}>
              <img src={Sellers} alt="The marketers" className={classes.img} />
            </div>
            <div className={classes.sellersContent}>
              <h1 className={classes.sellerHeader}>Register <br />to access Ogun State <br />
                SME Empowerment Fund
              </h1>
              <p className={classes.sellerText}>Eligibility criteria for Ogun State SME Loan <br />
                Business must:<br />
                • be located in Ogun State;<br />
                • be in operation for a minimum of 3years;<br />
                • Employ a minimum of 3 people;<br />
                • be owned by someone between the ages of 21- 60 years;<br />
                • be in retail, service and manufacturing sector<br />
              </p>
              <p className={classes.sellerText}>Eligibility criteria for Ogun State SME Grant<br />
                Business must:<br />
                • be located in Ogun State;<br />
                • be in operation for a minimum of 1year;<br />
                • Employ a minimum of 1-3 people;<br />
                • be owned by someone between the ages of 18-60 years;<br />
                • Not have benefitted from OG-Cares operational grant.<br />
              </p>
              {/* <button className={classes.greenBtn1}>Register now</button> */}
            </div>
          </div>

        </div>
      </div>

      <div className={classes.faqsContainer}>
        {/* <div className={classes.faqs}> */}
        <h1 className={classes.faqsHeader}>FAQs</h1>
        <p className={classes.happeningText}>See answers to some frequently asked questions here</p>
        <div className={classes.accordionContainer}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header >What is the Ogun State SME Empowerment Fund?</Accordion.Header>
              <Accordion.Body >
                In order to ameliorate the challenges currently facing
                entrepreneurs across the country, in particular the high cost
                of business operations, the Ogun State Government under
                the leadership of Prince(Dr.) Dapo Abiodun CON has
                approved N2 Billion financial empowerment scheme for
                small and medium businesses operating in the State.
                This financial intervention for SMEs will be through Grants and
                Loans for operational expenses and working capital
                requirments to ease the burden, sustain the business and
                ultimately boost profitability.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={classes.accordionSpace} eventKey="1">
              <Accordion.Header>Who Is Eligible to Apply For Grant?</Accordion.Header>
              <Accordion.Body>
                ELIGIBILITY CRITERIA
                Business must:<br />
                • Be located in Ogun State; <br />
                • Be in operation for a minimum of 1year;<br />
                • Employ a minimum of 1-3;<br />
                • Be owned by someone between the ages
                of 18-60 years;<br />
                • Not have benefitted from OG-Cares operational grant
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={classes.accordionSpace} eventKey="2">
              <Accordion.Header>What Are The Required Document To Apply For Grant?</Accordion.Header>
              <Accordion.Body>
                DOCUMENTATION
                Applicant must provide:<br />
                • State business premises permit/LG trade
                permit;<br />
                • Bank statement for 12months;<br />
                • Bank verification number (BVN);<br />
                • Bank account<br />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={classes.accordionSpace} eventKey="3">
              <Accordion.Header>How much Can I Get When I Apply For Grant?
              </Accordion.Header>
              <Accordion.Body>
                Flat amount of N100,000.00 per business
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={classes.accordionSpace} eventKey="4">
              <Accordion.Header>Who Is Eligible to Apply For Loan?
              </Accordion.Header>
              <Accordion.Body>
                ELIGIBILITY CRITERIA <br />
                Business must:<br />
                • Be located in Ogun State;<br />
                • Be in operation for a minimum of 3years;<br />
                • Employ a minimum of 3;<br />
                • Be owned by someone between the ages
                of 21- 60 years;<br />
                • Be in retail, service and manufacturing
                sector
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={classes.accordionSpace} eventKey="5">
              <Accordion.Header>What Are The Required Document To Apply For Loan?
              </Accordion.Header>
              <Accordion.Body>
                DOCUMENTATION  <br />
                Applicant must provide:<br />
                • CAC certificate of business registration;<br />
                • State business premises permit/LG trade
                permit<br />
                • Evidence of annual turnover for 2years;<br />
                • 2 years Bank statement<br />
                • Ogun State tax clearance/OGRIS Tax
                Identification number for the business
                owner<br />
                • Bank verification number(BVN)<br />
                <br />
                SECURITY <br />
                • Right to set- off on the company & owner’s
                other accounts in any financial institutions.<br />
                • One (1) Third party Guarantor who must
                have verifiable income – working in a
                bank/Managers of Corporate
                Organizations/a senior public servant

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={classes.accordionSpace} eventKey="6">
              <Accordion.Header>How much Can I Get When I Apply For Loan?</Accordion.Header>
              <Accordion.Body>
                Flat amount of N500,000.00 per business
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={classes.accordionSpace} eventKey="7">
              <Accordion.Header>What is the Interest Rate on The Loan?
              </Accordion.Header>
              <Accordion.Body>
                The loan is interest free - 0%
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;