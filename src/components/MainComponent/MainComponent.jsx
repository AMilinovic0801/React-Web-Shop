import { Outlet } from "react-router-dom";


function MainComponent(){

    return(
        <>
            <div className="page-content-container">
                <Outlet/>
            </div>
        </>
        
    )
}

export {MainComponent};