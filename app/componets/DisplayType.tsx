'use client'
import useIsMobile from "../api/useIsMobile";

import DesktopLandingPage from "../pages/desktop-landing-page";
import MobileLandingPage from "../pages/mobile-landing-page";

export default function DisplayType (){

    const isMobile = useIsMobile()

    return(
        <div>
            {!isMobile && <DesktopLandingPage/> }
            {isMobile && <MobileLandingPage/>}
        </div>
    )

}


