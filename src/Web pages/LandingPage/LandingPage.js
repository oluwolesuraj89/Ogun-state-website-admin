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
              <p className={classes.sellerText}>In order to ameliorate the challenges currently facing
                entrepreneurs across the country, in particular the high cost
                of business operations, the Ogun State Government under
                the leadership of Prince (Dr.) Dapo Abiodun CON has
                approved N2 Billion financial empowerment scheme for
                small and medium businesses operating in the State.
              </p>
              <p className={classes.sellerText}>This financial intervention for SMEs will be through Grants and
                Loans for operational expenses and working capital
                requirments to ease the burden, sustain the business and
                ultimately boost profitability.
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