import '../HomePageComponent/home_page.css'
import '../AppWraper/style.css'
import { PageInventory } from '../PageInventory/PageInventory';
import { Link } from 'react-router-dom';

function HomePage(){

    return(

        <div className="homePage-container">
            <main>
                <section className="container1">
                    <div className="main_content">
                        <video autoPlay loop muted>
                            <source src="https://res.cloudinary.com/dygasiqvo/video/upload/v1710268605/Ferrari_F40_Liberty_Walk___One_of_One_online-video-cutter.com_whexrk.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="video_overlay">
                            <div className="important_text">
                                <img src="https://res.cloudinary.com/dygasiqvo/image/upload/v1710268577/98915dc9-dbe2-43d4-b792-34f891a0af22-removebg-preview_qu1hkg.png" alt="logo" title="JDM cars" style={{width: 170}} className='logo-video'/>
                                <h1>JDM Import</h1>
                                <h2 style={{marginBottom: 0}}>Meant to Cause a Sceen.</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="homePage-select">
                    <section className="container2 wow fadeInDown infinite">
                        <div className="main_content2">
                            <p> Step it up with original JDM parts!</p>
                            <Link to='/parts'><button className='main-button'>Shop Now!</button></Link>
                        </div>
                        <div className="left_content">
                            <img src="https://res.cloudinary.com/dygasiqvo/image/upload/v1710268588/rim1_rjveeq.webp" alt="Rim" title="Rim CE28SL" className='main-img'/>
                        </div>
                    </section>
                    <section className="container3 wow fadeInDown infinite">
                        <div className="main_content3">
                            <img src="https://res.cloudinary.com/dygasiqvo/image/upload/v1710268583/content_right2_cysxel.avif" alt="Fairlady Z" title="Browse cars" className='main-img'/>
                        </div>
                        <div className="left_content2">
                            <p>Order you next dream car from Japan!</p>
                            <Link to='/cars'><button className='main-button'>Shop Now!</button></Link>
                        </div>
                    </section>
                    <section className="container4 wow fadeInDown infinite" style={{maxHeight: '80%'}}>
                        <div className="main_content4">
                            <p> Read up on the latest!</p>
                            <a href="../web-shop/blog.html"><button className='main-button'>JDM Blog</button></a>
                        </div>
                        <div className="left_content3">
                            <img src="https://res.cloudinary.com/dygasiqvo/image/upload/v1710268583/empy_road_pwfoyy.webp" alt="Road" title="Read about new things" className='main-img'/>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export {HomePage};