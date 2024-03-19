import { Link, useLocation } from "react-router-dom";
import '../PageInventory/car_inventory.css'
import '../AppWraper/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import WOW from 'wow.js'
import 'wow.js/css/libs/animate.css';
import { useEffect } from 'react';
import 'mutationobserver-shim';
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { useParams } from "react-router-dom";
import { useState } from "react";

function PageInventory(){
    useEffect(() => {
        const wow = new WOW({
            live: true
        });
        wow.init();
    }, []);

    const {newParam} = useParams()

    console.log(newParam)

    const { carShop } = useContext(AppContext);
    const { partShop } = useContext(AppContext);
    const [isParts, setIsParts] = useState(false);
    const location = useLocation()
    console.log(location.pathname);

    useEffect(() => {
        setIsParts(location.pathname === '/parts');
    }, [location]);
    

    return (
        <div className="inventory-container">
            <header id="nav"></header>
        <section className="nav_bar">
            <div className="search">
                <label htmlFor="search_bar">
                    Search:
                </label>
                <input type="text" id="search_bar" name="search_bar" className="search_bar" placeholder="keyword e.g. white nissan"/>
            </div>
            <div className="filter">
                <label htmlFor="filter_bar">
                    Sort:
                </label>
                <select id="filter" name="filter" className="filter">
                    <option value="">None</option>
                    <option value="highest_age">Age (Newer)</option>
                    <option value="lowest_age">Age (Older)</option>
                    <option value="highest_mileage">Higher Mileage</option>
                    <option value="lowest_mileage">Lowest Milage</option>
                </select>
            </div>
        </section>
        <section className="explaine">
            <h2 className="h2_car">{isParts === true ? partShop.title : carShop.title }</h2>
            <p>               
                {isParts === true ? partShop.description : carShop.description }
            </p>
        </section>
        <section className="car_selection">
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {(isParts === true ? partShop.inventoryName : carShop.inventoryName) .map((name, index) => (
                        <Col key={index}>
                            <div className="item wow slideInLeft">
                                <Link to={`${location.pathname}/${index}`}>
                                    <img src={isParts === true ? partShop.inventoryPictures[index] : carShop.inventoryPictures[index]} alt="Car" title="Car" className="img-items"/>
                                </Link>
                                <Link to={`${location.pathname}/${index}`}>
                                    <p className="underline-animation">{name}<br/>{isParts === true ? partShop.price[index] : ''}</p>
                                </Link>
                                <Link to={`${location.pathname}/${index}`}>
                                    <button className="effect">{partShop.button}</button>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    </div>
    );
}

export {PageInventory};