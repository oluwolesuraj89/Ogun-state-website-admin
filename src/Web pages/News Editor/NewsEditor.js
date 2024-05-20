import React, { useState, useEffect } from 'react';
import classes from './NewsEditor.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Spinner, Badge } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan bg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import Ready from '../../Images/nothing.svg'
import Ready1 from '../../Images/review.svg';
import { useRegistration } from '../RegistrationContext';
import { Link, useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

export default function NewsEditor() {
    // const navigate = useNavigate();
    // const [bearer, setBearer] = useState('');
    // const [grantDetail, setGrantDetail] = useState([]);
    // const [invoicePayment, setInvoicePayment] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [paymentLoading, setPaymentLoading] = useState(false);
    // const [isLoan, setIsLoan] = useState(false);
    // const { isGrant, isHome } = useRegistration();

  

    // const readData = async () => {
    //     try {
    //         const details = await AsyncStorage.getItem('userToken');
    //         if (details !== null) {
    //             setBearer(details);
    //         }
    //     } catch (e) {
    //         alert('Failed to fetch the input from storage');
    //     }
    // };

    // useEffect(() => {
    //     readData();
    // }, []);

    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${bearer}`
    // };



   

    // const fetchPayments = async () => {
    //     setPaymentLoading(true);
    //     try {
    //         const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/get-invoices', { headers });
    //         const results = response.data?.data;
    //         setInvoicePayment(results);
    //         // console.log(results, "invoice payment");
    //     } catch (error) {
    //         // if (error.response && error.response.status === 401) {

    //         //     navigate('/sign_in');
    //         // } else 
    //         {
    //             const errorStatus = error.response?.data?.message;
    //             console.log(errorStatus);
    //             setInvoicePayment([]);
    //         }
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     if (bearer) {
    //         fetchGrant();
    //         fetchPayments();

    //     }
    // }, [bearer]);




    // const handleLoanApplication = async () => {
    //     try {
    //         if (isHome === false) {
    //             navigate('/apply_grant');
    //         } else {
    //             navigate('/grant_ineligible');
    //         }
    //     } catch (error) {
    //         console.error('Error checking isComplete status:', error);
    //         // Handle error
    //     }
    // };
  

    // function formatDate(dateString) {
    //     const date = new Date(dateString);
    //     const formattedDate = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} `;
    //     return formattedDate;
    //   }
    
    //   function padZero(num) {
    //     return num < 10 ? `0${num}` : num;
    //   }
  
//  const fetchGrant = async () => {
//         setIsLoading(true);
//         try {
//             const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/application/get-grants', { headers });
//             const resultxxx = response.data?.data;
//             setGrantDetail(resultxxx);
//             // console.log(resultxxx, "men payment");
//         } catch (error) {
//             // if (error.response && error.response.status === 401) {

//             //     navigate('/sign_in');
//             // } else 
//             {
//                 const errorStatus = error.response?.data?.message;
//                 console.log(errorStatus);
//                 setGrantDetail([]);
//             }
//         } finally {
//             setIsLoading(false);
//         }
//     };

    return (
        <div>
        <MainDashoard />

        <div className={classes.finishedbodyCont}>
            <div className={`${classes.formSecCont}`}>
                <h3>Grants</h3>
            </div>

            <div className={classes.mainform}>


    

    <div className={classes.loandgrantcards}>
    <div className={classes.loandethead}>
        <p className={classes.loanText}>Grant Amount: <span className={classes.theamount}> ₦100,000.00</span></p>
       
        <p className={classes.loanText}>Date Approved: <span className={classes.loanText1}></span></p>
       
    </div>

    <div className={classes.loanContainer}>
        <div className={classes.loanResponsive}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>S/N</th>
          <th>TITLE</th>
          <th>DATE POSTED</th>
          <th>AUTHOR</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ogun state commence SME and Grants Scheme to empower 1000 SMEs in Ogun state.</td>
          <td>12th Apr, 2024</td>
          <td>Abiodun Moyo</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Ogun state commence SME and Grants Scheme to empower 1000 SMEs in Ogun state.</td>
          <td>12th Apr, 2024</td>
          <td>Abiodun Moyo</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Ogun state commence SME and Grants Scheme to empower 1000 SMEs in Ogun state.</td>
          <td>12th Apr, 2024</td>
          <td>Abiodun Moyo</td>
          <td>Edit</td>
        </tr>
        
      </tbody>
    </Table>
            {/* <table>
                <thead className={classes.loanTable}>
                    <tr >
                        <th className={classes.tableText}>S/N</th>
                        <th className={classes.tableText}>TITLE</th>
                        <th className={classes.tableText}>DATE POSTED</th>
                        <th className={classes.tableText}>AUTHOR</th>
                        <th className={classes.tableText}>ACTION</th>
                        
                    </tr>
                </thead> */}
{/*                     
                {isLoading ? (
    <p className={classes.fetchText}><Spinner size='sm' style={{ marginRight: 5 }} />Fetching grant application...</p>
) : grantDetail.length > 0 ? (
    <tbody>
        <tr>
            <td>S/N</td>
            <td>Ogun state commence SME and Grants Scheme to empower 1000 SMEs in Ogun state.</td>
            <td>12th Apr, 2024</td>
            <td>Abiodun Moyo</td>
            <td>Edit</td>
        </tr>
        <tr>
            <td>S/N</td>
            <td>Ogun state commence SME and Grants Scheme to empower 1000 SMEs in Ogun state.</td>
            <td>12th Apr, 2024</td>
            <td>Abiodun Moyo</td>
            <td>Edit</td>
        </tr>
        <tr>
            <td>S/N</td>
            <td>Ogun state commence SME and Grants Scheme to empower 1000 SMEs in Ogun state.</td>
            <td>12th Apr, 2024</td>
            <td>Abiodun Moyo</td>
            <td>Edit</td>
        </tr>
        
        {grantDetail.map((item, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.application_number}</td>
                <td>{item.type === 2 ? "Grant Application" : "Loan Application"}</td>
                <td style={{ textAlign: "right" }}>₦{parseFloat(item.amount).toLocaleString('en-US', {
                    minimumIntegerDigits: 1,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</td>
                <td>{formatDate(item.created_at)}</td>
                <td>
                    <Badge bg={item.status === "Pending" ? 'warning' : item.status === "Approved" ? 'success' : 'danger'}>
                        {item.status}
                    </Badge>
                </td>
                <td>
                   
                </td>
            </tr> 
         ))} 
    </tbody>
) : (
    <tbody>
        <tr>
            <td colSpan="7">No grant applications</td>
        </tr>
    </tbody>
)}

            </table> */}

            
        </div>
    </div>
</div> 

</div>

        </div>

    </div>
)
}