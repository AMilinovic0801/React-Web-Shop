import { Link, useLocation } from "react-router-dom";
import "../PageInventory/car_inventory.css";
import "../AppWraper/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import WOW from "wow.js";
import "wow.js/css/libs/animate.css";
import { useEffect } from "react";
import "mutationobserver-shim";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { useState } from "react";

function PageInventory() {
  useEffect(() => {
    const wow = new WOW({
      live: true,
    });
    wow.init();
  }, []);

  const { carShop } = useContext(AppContext);
  const { partShop } = useContext(AppContext);
  const [isParts, setIsParts] = useState(false);
  const [render, setRender] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIndex, setFilterIndex] = useState([]);
  const location = useLocation();
  /* console.log(location.pathname); */

  console.log(render);

  useEffect(() => {
    setIsParts(location.pathname === "/parts");
  }, [location]);

  useEffect(() => {
    const inventory = isParts ? partShop.inventoryName : carShop.inventoryName;

    //trazi item koji je user upisa preko item name-a
    const filteredInventory = inventory.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //ovaj dio mi mapira index od itema (u novi array) koji je user trazio kako bi se ispravno rendera item
    const filteredOriginalIndex = Array.from(
      { length: inventory.length },
      (_, index) => index
    ).filter((_, index) => inventory[index].toLowerCase().includes(searchTerm));

    //rezultati se spremaju u svoje Stateov-e
    setRender(filteredInventory);
    setFilterIndex(filteredOriginalIndex);

    /* console.log("index =====>", filterIndex); */
  }, [isParts, partShop.inventoryName, carShop.inventoryName, searchTerm]);

  //dohvaca user input
  function userSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="inventory-container">
      <header id="nav"></header>
      <section className="nav_bar">
        <div className="search">
          <label htmlFor="search_bar">Search:</label>
          <input
            type="text"
            id="search_bar"
            name="search_bar"
            className="search_bar"
            placeholder="Search"
            onInput={(e) => userSearch(e)}
          />
        </div>
        <div className="filter">
          <label htmlFor="filter_bar">Sort:</label>
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
        <h2 className="h2_car">
          {isParts === true ? partShop.title : carShop.title}
        </h2>
        <p>{isParts === true ? partShop.description : carShop.description}</p>
      </section>
      <section className="car_selection">
        <Container>
          <Row xs={1} md={3} className="g-4">
            {render.map((name, index) => (
              <Col key={index}>
                <div className="item wow slideInLeft">
                  {/* filterIndex[index] mi mapira search iteme preko novog arraya koji sadrzi originalne indexe itema preko kojih se sve rendera */}
                  <Link to={`${location.pathname}/${filterIndex[index]}`}>
                    <img
                      src={
                        isParts === true
                          ? partShop.inventoryPictures[filterIndex[index]]
                          : carShop.inventoryPictures[filterIndex[index]]
                      }
                      alt="Car"
                      title="Car"
                      className="img-items"
                    />
                  </Link>
                  <Link to={`${location.pathname}/${filterIndex[index]}`}>
                    <p className="underline-animation">
                      {name}
                      <br />
                      {isParts === true
                        ? partShop.price[filterIndex[index]]
                        : ""}
                    </p>
                  </Link>
                  <Link to={`${location.pathname}/${filterIndex[index]}`}>
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

export { PageInventory };
