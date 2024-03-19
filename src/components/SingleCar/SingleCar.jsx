import React from 'react';
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
    const carArray = singleCarData.cars;
/*     console.log('context ====>', singleCarData);
    console.log('singleCar ====>', carArray[URLCarID].title); */

    const img = carArray[URLCarID].images;
    const carDesc = carArray[URLCarID].details;


    let images = img.map((name, index) => ({
        original: name, 
        thumbnail: name,
    }));
      return (
        <div className='singleCar-body'>
            <section class="explaine">
                <Link to='/cars'><div className='back-arrow'>🢀</div></Link>
                <h2 id="h2-title">{carArray[URLCarID].title}</h2>
                <h3>Key facts</h3>
                <p id="text-car">{carArray[URLCarID].key_facts}</p>
                <ul>
                    <li className='lits-details'>Chassis Number: {carDesc.Chassis_number}</li>
                    <li className='lits-details'>Fuel type: {carDesc.Fuel}</li>
                    <li className='lits-details'>Mileage: {carDesc.Mileage}</li>
                    <li className='lits-details'>Transmission: {carDesc.Transmission}</li>
                    <li className='lits-details'>Year: {carDesc.Year}</li>
                </ul>
            </section>
            <div className="carImg-container">
                <ImageGallery items={images} />
            </div>
            <div className='carForm-container'>
                <CDBContainer className='carForm-container'>
                    <CDBCard style={{ width: '30rem', borderRadius: 25}}>
                        <CDBCardBody className="mx-4">
                        <div className="text-center mt-4 mb-2">
                            <p className="h4"> Contact us </p>
                        </div>
                        <CDBInput material hint="Name" type="text" placeholder='Full Name'/>
                        <CDBInput material hint="E-mail" type="email" placeholder='Email'/>
                        <CDBInput material hint="Phone-Number" type="phone" placeholder='Phone Number'/>
                        <p className="text-center m-0">Subject</p>
                        <CDBInput hint="Message" type="textarea" />
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <CDBInput material type="Checkbox" />
                            <p className="m-0">Subcribe to the newsletter</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <CDBInput material type="Checkbox" />
                            <p className="m-0">I consent to privacy policy agreement</p>
                        </div>                       
                        <CDBBtn color="success" style={{ width: '40%' }} className="btn-block mt-5 mx-auto">
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