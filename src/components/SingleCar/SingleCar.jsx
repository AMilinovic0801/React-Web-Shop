import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../SingleCar/single_car.css";
import { Link, useParams } from "react-router-dom";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBIcon,
  CDBBtn,
  CDBLink,
  CDBContainer,
  CDBSelect,
} from "cdbreact";
import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
function SingleCar() {
  const urlParams = useParams();
  const URLCarID = urlParams.id;

  const { singleCarData } = useContext(AppContext);
  const { userCountry } = useContext(AppContext);
  /* console.log('userCountry ===>', userCountry); */

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <div className="singleCar-body">
      <section className="explaine">
        <Link to="/cars">
          <div className="back-arrow">🢀</div>
        </Link>
        <h2 id="h2-title">{carArray[URLCarID].title}</h2>
        <h3>Key facts</h3>
        <p id="text-car">{carArray[URLCarID].key_facts}</p>
        <div className="car-desc">
          <ul style={{ width: "50%" }}>
            <li className="lits-details">
              Chassis Number: {carDesc.Chassis_number} <hr />
            </li>
            <li className="lits-details">
              Fuel type: {carDesc.Fuel} <hr />
            </li>
            <li className="lits-details">
              Mileage: {carDesc.Mileage} km
              <hr />
            </li>
            <li className="lits-details">
              Transmission: {carDesc.Transmission} <hr />
            </li>
            <li className="lits-details">Year: {carDesc.Year}</li>
          </ul>
        </div>
      </section>
      <div className="carImg-container">
        <ImageGallery items={images} />
      </div>
      <form
        className="carForm-container"
        onSubmit={handleSubmit((data) => console.log("form data =====>", data))}
      >
        <CDBContainer className="carForm-container">
          <CDBCard style={{ width: "30rem", borderRadius: 25 }}>
            <CDBCardBody className="mx-4">
              <div className="text-center mt-4 mb-2">
                <p className="h4 m-4"> Contact us for more information</p>
              </div>
              <div className="input-personal">
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("Fname", {
                    required: "Please enter Full name!",
                    pattern: {
                      value: /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/,
                      message: "Please enter a valid Full name!",
                    },
                  })}
                  className="userInfo"
                />
                <p style={{ color: "red" }}>{errors.Fname?.message}</p>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("Email", {
                    required: "Please enter your email!",
                    pattern: {
                      value:
                        /^[\w]+[\w.+-]*@[\w-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
                      message: "Please enter a valid Email!",
                    },
                  })}
                  className="userInfo"
                />
                <p style={{ color: "red" }}>{errors.Email?.message}</p>
                <input
                  hint="Phone-Number"
                  type="phone"
                  placeholder="Phone Number/Start with Country code"
                  {...register("phoneNumber", {
                    required: "Please enter your phone number!",
                    pattern: {
                      value: /^\+(?:[0-9] ?){11,14}[0-9]$/,
                      message: "Please enter a valid Phone number!",
                    },
                  })}
                  className="userInfo"
                />
                <p style={{ color: "red" }}>{errors.phoneNumber?.message}</p>
              </div>
              <select className="m-4 select-country" {...register("country")}>
                {userCountry.map((country, index) => (
                  /*  console.log('eachone =====>',country); */
                  <option value={country}>{country}</option>
                ))}
                ;
              </select>
              <p className="text-center m-0">Subject</p>
              <textarea rows={"10"} cols={"50"} {...register("userMessage")} />
              <div className="d-flex justify-content-center align-items-center mt-4">
                <input type="Checkbox" {...register("newsletter")} />
                <p className="m-0">Subcribe to the newsletter</p>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <input type="Checkbox" {...register("agreedPolicy")} required />
                <p className="m-0">I consent to privacy policy agreement</p>
              </div>
              <CDBBtn
                style={{ width: "40%" }}
                className="btn-block mt-5 mx-auto button-form"
                type="submit"
              >
                Send
              </CDBBtn>
            </CDBCardBody>
          </CDBCard>
        </CDBContainer>
      </form>
    </div>
  );
}

export { SingleCar };
