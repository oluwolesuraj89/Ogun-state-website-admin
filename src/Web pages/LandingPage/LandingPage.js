import React from "react";
import classes from '../LandingPage/LandingPage.module.css'
import HeaderNav from "../HeaderNav/HeaderNav";
import { Accordion } from "react-bootstrap";
import Sellers from '../../Images/background3.png';
import Footer from "../Footer/Footer";
import { useNavigate, NavLink} from "react-router-dom";


function LandingPage() {
  const navigate = useNavigate();

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
            <button className={classes.greenBtn}>Get started</button>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.contentContainer}>
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
              <button className={classes.greenBtn}>Register now</button>
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
              <Accordion.Header>What is the Ogun State SME Empowerment Fund?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={classes.accordionSpace} eventKey="1">
              <Accordion.Header>Who is eligible to apply for the loan?</Accordion.Header>
              <Accordion.Body>
                Both Individuals and businesses located in Ogun state are eligible for the loan
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={classes.accordionSpace} eventKey="2">
              <Accordion.Header>How much can I get when I apply for the loan?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
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