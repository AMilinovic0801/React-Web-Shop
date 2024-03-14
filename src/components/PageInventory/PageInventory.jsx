import { Link } from "react-router-dom";
import '../PageInventory/car_inventory.css'
import '../AppWraper/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function PageInventory({title, description, inventoryName, inventoryPictures, price, button}){

    console.log(title);

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
            <h2 className="h2_car">{title}</h2>
            <p>               
                {description}
            </p>
        </section>
        <section className="car_selection">
            <Container>
                <Row xs={1} md={3} className="g-4"> {/* Create a grid with 3 columns htmlFor medium devices and 1 column htmlFor extra small devices */}
                    {inventoryName.map((name, index) => (
                        <Col key={index}>
                            <div className="item wow slideInLeft">
                                <Link to={`/${price !== undefined ? 'parts' : 'cars'}/${index}`}>
                                    <img src={inventoryPictures[index]} alt="Car" title="Car" className="img-items"/>
                                </Link>
                                <Link to={`/${price !== undefined ? 'parts' : 'cars'}/${index}`}>
                                    <p className="underline-animation">{name}<br/>{price !== undefined ? price[index] : ''}</p>
                                </Link>
                                <Link to={`/${price !== undefined ? 'parts' : 'cars'}/${index}`}>
                                    <button className="effect">{button}</button>
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