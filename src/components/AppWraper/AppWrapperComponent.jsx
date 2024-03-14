import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import {MainComponent} from "../MainComponent/MainComponent.jsx"
import { Footer } from "../Footer/Footer.jsx";


function AppWrapperComponent(){

    return(

        <div className="main-wrapper" style={{width: '100%'}}>
            <Header/>
            <MainComponent/>
            <Footer/>
        </div>
    )
}

export {AppWrapperComponent};