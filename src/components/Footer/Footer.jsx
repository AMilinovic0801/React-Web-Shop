import '../Footer/footer.css'

function Footer(){

    return(
        <>
            <div className="conainer_footer">
            <div className="left_footer">
                <h2 className="footer_h2">Contact</h2>
                <ul className="list_class">
                    <li className='footer-li'>
                        Ulica Bana Berislavica, Split 2100, Croatia
                    </li>
                    <li className='footer-li'>
                        <a href="tel:+38595555444" className="upper_color_change">+38595555444</a>
                    </li>
                    <li className='footer-li'>
                        <a href="/web-shop/about_us.html" target="_parent"><button>Map & Hours</button></a>
                    </li>
                </ul>
            </div>
            <div className="mid_footer1">
                <h2 className="footer_h2">Quick Access</h2>
                <ul className="list_class">
                    <li className='footer-li'>
                        <a href="/web-shop/index.html" className="underline-animation" target="_parent">Home</a>
                    </li>
                    <li className='footer-li'>
                        <a href="/web-shop/car_inventory.html" className="underline-animation" target="_parent">Inventory</a>
                    </li>
                    <li className='footer-li'>
                        <a href="/web-shop/testemonial.html" className="underline-animation" target="_parent">Testemonials</a>
                    </li>
                    <li className='footer-li'>
                        <a href="/web-shop/about_us.html" className="underline-animation" target="_parent">About Us</a>
                    </li>
                    <li className='footer-li'>
                        <a href="/web-shop/contact_us.html" className="underline-animation" target="_parent">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="mid_footer2">
                <h2 className="footer_h2">Hours</h2>
                <ul className="list_class">
                    <dt>
                        Monday
                    </dt>
                    <dd>
                        0800 - 1700
                    </dd>
                    <dt>
                        Tuesday
                    </dt>
                    <dd>
                        0800 - 1700
                    </dd>
                    <dt>
                        Wednesday
                    </dt>
                    <dd>
                        0800 - 1700
                    </dd>
                    <dt>
                        Thursday
                    </dt>
                    <dd>
                        0800 - 1700
                    </dd>
                    <dt>
                        Friday
                    </dt>
                    <dd>
                        0800 - 1700
                    </dd>
                    <dt>
                        Saturday
                    </dt>
                    <dd>
                        0900 - 1400
                    </dd>
                    <dt>
                        Sunday
                    </dt>
                    <dd>
                        Closed
                    </dd>
                </ul>
            </div>
            <div className="right_footer">
                <h2 className="footer_h2">Socials</h2>
                <a href="https://web.facebook.com/minitrucksjapan/?_rdc=1&_rdr" target="_blank">
                    <img src='https://res.cloudinary.com/dygasiqvo/image/upload/v1710268583/facebook_c6u7xy.svg' className='bi-facebook'/>
                </a>
                <a href="https://www.instagram.com/jpnautoimport/" target="_blank">
                    <img src='https://res.cloudinary.com/dygasiqvo/image/upload/v1710268585/instagram_zk7ism.svg'className='bi-instagram'/>
                </a>
            </div>
        </div>
        </>
    )
}

export {Footer};