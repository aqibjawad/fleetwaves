import React from "react";

import DesktopHeader from "../Components/Header/DekstopHeader";
import DesktopFooter from "../Components/Footer/Desktop.Footer";

import MobileHeader from "../Components/Header/MobileHeader";

const WebsiteLayout = ({ children }) => {
    return (
        <React.Fragment>

            {window.innerWidth > 480 ? (
                <DesktopHeader />
            ) : (
                <MobileHeader  className='align-self-center' />
            )}

            <div className="main-body">
                {children}
            </div>
            
            <DesktopFooter />

        </React.Fragment>
    )
}

export default WebsiteLayout