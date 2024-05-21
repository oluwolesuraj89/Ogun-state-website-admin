import React, { useState, useEffect, useRef } from 'react';
import classes from './CreateNews.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Spinner, Badge, Button } from 'react-bootstrap';
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
import placeHolder from "../../assets/imagePlaceHolder.jpg"
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import './CustomQuillToolbar.css';

export default function CreateNews() {
    const navigate = useNavigate();
    const [editorHtml, setEditorHtml] = useState('');
    const [inputText, setInputText] = useState('');
    const [imageSrc, setImageSrc] = useState(placeHolder);
    const fileInputRef = useRef(null);

  // const [bearer, setBearer] = useState('');
    // const [grantDetail, setGrantDetail] = useState([]);
    // const [invoicePayment, setInvoicePayment] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [paymentLoading, setPaymentLoading] = useState(false);
    // const [isLoan, setIsLoan] = useState(false);
    // const { isGrant, isHome } = useRegistration();

  const handleEditorChange = (content, delta, source, editor) => {
    setEditorHtml(content);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
    
  const applyInputText = () => {
    // You can add logic to format the text input as needed
    setEditorHtml(editorHtml + inputText);
    setInputText('');
  };

  const modules = {
    toolbar: [
    //   [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    //   [{'list': 'ordered'}, {'list': 'bullet'}, 
    //    {'indent': '-1'}, {'indent': '+1'}],
      [ 'image'],
    //   ['clean']                                        
    ],
  };

    const openNews = () =>{
        navigate('/subnew')
    }

    const handleEditClick = () => {
        fileInputRef.current.click();
      };

      const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImageSrc(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          alert('Only *.png, *.jpg and *.jpeg image files are accepted.');
          setImageSrc(placeHolder)
        }
      };

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
            <div className={classes.topPadding}>
                <div className={`${classes.formSecCont}`}>
                    <div className={classes.formSectionHeader}>
                        <h3>News Editor</h3>
                    </div>
                    <div className={classes.formSectionHeader}>
                        <small>Welcome </small>
                        <h3 style={{color:'#2D995F'}}>user</h3>
                    </div>
                </div>
            </div>
            
        <div className={classes.mainform}>

    <div className={classes.loandgrantcards}>
    <div className={classes.loandethead}>
        <div className={classes.formLabel}>
            <h4>New</h4>
            <p className={classes.loanText}>Home - Apps - eCommerce - Catalog</p>
        </div>
        <div className={classes.formIntBtn}>
            <Button variant="light" className={classes.btn1}> Add Member</Button>
            <Button variant="success" className={classes.btn2}>New Campaign</Button>
        </div>
    </div>

    <div className={classes.loanContainer}>
        <div className={classes.loanResponsive}>
            <div className={classes.banner}>
                <h5>Banner</h5>
                <div className={classes.imgSec}>
                    <div className={classes.imgCont}>
                        <span onClick={handleEditClick}><i class='bx bx-edit'></i></span>
                        <div className={classes.mainImgCont}>
                            <img src={imageSrc} alt='img' />
                        </div>
                    </div>
                    <p>Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</p>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        accept="image/png, image/jpeg, image/jpg"
                    />
                </div>
            </div>    
            <div className={classes.mainForm}>
                <h5>General</h5>
                <Form className={classes.form}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Code<span className={classes.span}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="New code"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category<span className={classes.span}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="News Category"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Status<span className={classes.span}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="News Status"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Registration name<span className={classes.span}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="Registration Name"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Short description<span className={classes.span}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="News description"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Long description</Form.Label>
                        <ReactQuill 
                            value={editorHtml}
                            onChange={handleEditorChange}
                            modules={modules}
                            className={classes.editor}
                            placeholder='Start writing your text here '
                        />
                    </Form.Group>
                </Form>

                <div>
                    {/* <ReactQuill 
                        value={editorHtml}
                        onChange={handleEditorChange}
                        modules={modules}
                    /> */}
                    {/* <input 
                        type="text"
                        value={inputText}
                        onChange={handleInputChange}
                        placeholder="Enter text to format"
                    /> */}
                    {/* <button onClick={applyInputText}>Apply Text</button> */}
                </div>
            </div>
        </div>
        <div className={`${classes.formIntBtn} ${classes.formIntBtn2}`}>
            <Button variant="light" className={classes.btn1}> Cancel</Button>
            <Button variant="success" className={classes.btn2}>Save Change</Button>
        </div>
        <div className={classes.footerCont}>
            <div>
                <small>2024© <Link to={'#'}> Ogun State</Link></small>
            </div>
            <div>
                <small className={classes.small}>
                    <Link to={'#'}>About</Link>
                    <Link to={'#'}>Support</Link>
                    <Link to={'#'}>Purchase</Link>
                </small>
            </div>
        </div>
    </div>
</div> 

</div>

        </div>

    </div>
)
}