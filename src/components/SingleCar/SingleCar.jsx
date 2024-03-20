import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../SingleCar/single_car.css'
import { Link, useParams } from 'react-router-dom';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer, CDBSelect } from 'cdbreact';
import { AppContext } from '../../AppContext/AppContext';
import { useContext } from 'react';
function SingleCar(){
    const  urlParams =  useParams();
    const URLCarID = urlParams.id;

    const { singleCarData } = useContext(AppContext);
    const {userCountry} = useContext(AppContext);

    const carArray = singleCarData.cars;
/*     console.log('context ====>', singleCarData);
    console.log('singleCar ====>', carArray[URLCarID].title); */

    const img = carArray[URLCarID].images;
    const carDesc = carArray[URLCarID].details;

    //ovo je za galeriju slika 
    let images = img.map((name, index) => ({
        original: name, 
        thumbnail: name,
    }));

    //ovo je za formu lista za izabrat drzave
    const option = userCountry.map(country => ({
        text: country,
        value: country.toLowerCase().replace(/\s+/g, '')
    }));

    //ispod su validacije za email i telefon
    const [emailCheck, setEmailCheck] = useState(true);

    function checkEmail(event){
        let emailPattern = /^[\w]+[\w.+-]*@[\w-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
       setEmailCheck(emailPattern.test(event.target.value));
       /* console.log(emailCheck); */
    }
    const [phoneCheck, setPhoneCheck] = useState(true);

    function checkPhone(event){
        let phonePattern = /^\+(?:[0-9] ?){11,14}[0-9]$/;
       setPhoneCheck(phonePattern.test(event.target.value));
       /* console.log(phoneCheck); */
    }  
      return (
        <div className='singleCar-body'>
            <section className="explaine">
                <Link to='/cars'><div className='back-arrow'>🢀</div></Link>
                <h2 id="h2-title">{carArray[URLCarID].title}</h2>
                <h3>Key facts</h3>
                <p id="text-car">{carArray[URLCarID].key_facts}</p>
                <div className="car-desc">
                    <ul style={{width: '50%'}}>
                        <li className='lits-details'>Chassis Number: {carDesc.Chassis_number} <hr /></li>
                        <li className='lits-details'>Fuel type: {carDesc.Fuel} <hr /></li>
                        <li className='lits-details'>Mileage: {carDesc.Mileage} <hr /></li>
                        <li className='lits-details'>Transmission: {carDesc.Transmission} <hr /></li>
                        <li className='lits-details'>Year: {carDesc.Year}</li>
                    </ul>
                </div>
            </section>
            <div className="carImg-container">
                <ImageGallery items={images} />
            </div>
            <div className='carForm-container'>
                <CDBContainer className='carForm-container'>
                    <CDBCard style={{ width: '30rem', borderRadius: 25}}>
                        <CDBCardBody className="mx-4">
                        <div className="text-center mt-4 mb-2">
                            <p className="h4 m-4"> Contact us for more information</p>
                        </div>
                        <CDBInput material hint="Name" type="text" placeholder='Full Name' required/>
                        <CDBInput material hint="E-mail" type="email" placeholder='Email' onChange={(e) => checkEmail(e)} required/>
                        <p style={{color: 'red', display: emailCheck === true ? 'none' : 'block'}}>Please input correct email address!</p>
                        <CDBInput material hint="Phone-Number" type="phone" placeholder='Phone Number/Start with Country code' onChange={(e) => checkPhone(e)} required/>
                        <p style={{color: 'red', display: phoneCheck === true ? 'none' : 'block'}}>Please input correct Phone number!</p>
                        <CDBSelect options={option} selected="Please select your Country" className='m-4 select-country'/>
                        <p className="text-center m-0">Subject</p>
                        <CDBInput hint="Message" type="textarea" />
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <CDBInput material type="Checkbox" checked/>
                            <p className="m-0">Subcribe to the newsletter</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <CDBInput material type="Checkbox" required/>
                            <p className="m-0">I consent to privacy policy agreement</p>
                        </div>                       
                        <CDBBtn color="success" style={{ width: '40%' }} className="btn-block mt-5 mx-auto" >
                            Send
                        </CDBBtn>
                        </CDBCardBody>
                    </CDBCard>
                </CDBContainer>
            </div>
        </div>
      );
    };

export {SingleCar};