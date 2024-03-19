import '../AppWraper/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SinglePart/single_part.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../AppContext/AppContext';

function SinglePart(){

    const { partShop } = useContext(AppContext);
    const { singlePartData } = useContext(AppContext);
    const items = singlePartData.items

    const  urlParams =  useParams();
    const URLPartID = urlParams.id;

    return(
        <div className="single-container">
            <div className="banner">
                <Link to='/parts' className='parts_button'>🢀</Link>
                <h2>{items[URLPartID].name}</h2>
        </div>
        <div className="col-lg-6 wow fadeInUp infinite mb-5 single-imgContainer"><img src={partShop.inventoryPictures[URLPartID]} className='single-picture' alt={items[URLPartID].name}/></div><div className="content_container">
                <ul id="part_list">
                    <li>Item name: {items[URLPartID].name}</li>
                    <li>Item price: {items[URLPartID].price} €</li>
                    <li>Item description: {items[URLPartID].description}</li>
                    <li>Shipping time to Europe: {items[URLPartID].shipping_time}</li>
                </ul>
            </div><div className="container d-flex justify-content-center mb-4">
                <button type="button" className="single-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Buy Now!
                </button>
            </div>
        </div>
    )
}

export {SinglePart};