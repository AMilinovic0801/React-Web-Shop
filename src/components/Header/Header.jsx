import '../Header/header.css'
import { Link } from 'react-router-dom';

function Header(){

    return(
        <div className="nav-container">
            <div className="header_container">
                <div className="upper_header">
                    <ul>
                        <li>
                            <a href="tel:+38595555444" className="upper_color_change" target="_parent">+38595555444</a>
                        </li>
                        <li>
                            <a href="/web-shop/about_us.html" className="upper_color_change" target="_parent">Open Hours</a>
                        </li>
                        <li>
                            Mon-Fri: 0800-1700
                        </li>
                        <li>
                            Sat: 0900-1400
                        </li>
                        <li>
                            Sun: Closed
                        </li>
                        <li>
                            <a href="/web-shop/about_us.html" className="upper_color_change" target="_parent">Address</a>
                        </li>
                        <li>
                            Ulica Bana Berislavica, Split 2100, Croatia
                        </li>
                    </ul>
                </div>
                <div id="hamburger">MENU</div>
                <div className="lower_header" id="nav-menu">
                        <ul>
                            <li>
                                <Link to='/home'><img className="logo_jpn" src="https://res.cloudinary.com/dygasiqvo/image/upload/v1710268587/red_japan_lgyjjc.png" alt="logo" title="JPN Auto Import Services"/></Link>
                            </li>
                            <li>
                                <Link to='/home'  className="underline-animation">Home</Link>
                            </li>
                            <li>
                                <Link to='/cars'  className="underline-animation">Inventory</Link>
                            </li>
                            <li>
                                <Link to='/parts'  className="underline-animation">Parts & Accessories</Link>
                            </li>
                            <li>
                                <a href="/web-shop/about_us.html" className="underline-animation" target="_parent">About Us</a>
                            </li>
                            <li>
                                <a href="/web-shop/faq.html" className="underline-animation" target="_parent">FAQ</a>
                            </li>
                            <li>
                                <a href="/web-shop/contact_us.html" className="underline-animation" target="_parent">Contact us</a>
                            </li>
                            <li>
                                <a href="/web-shop/contact_us.html" title="Schedule a test drive" className="upper_color_change" target="_parent">
                                    <img className="key_jpn" src="https://res.cloudinary.com/dygasiqvo/image/upload/v1710268585/jpnautoimport-key-icon_dkp6qm.png" alt="Schedule a test drive"/>
                                    <figcaption>Schedule a  <br/> test drive!</figcaption>
                                </a>
                            </li>
                            <li>
                                <a href="/web-shop/cart.html" title="Your order" className="underline-animation" target="_parent">
                                    <img className="shop_cart" src="https://res.cloudinary.com/dygasiqvo/image/upload/v1710268582/cart4_ark3cm.svg" alt="Your order"/>
            
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export {Header};