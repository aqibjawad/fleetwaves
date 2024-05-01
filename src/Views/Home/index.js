import React from "react";

import HomeBanner from "./Home.Banner";

import WhatWeDo from "./WhatWeDo.Home";


import OurMission from "./Home.Mission";

// import CustomizeSection from "./Home.Specilities";

import HomeStartToday from "./Home.StartToday";
import HomePapers from "./Home.Papers";
import HomeTruckDispatch from "./Home.TruckDispatch";
import HomeService from "./Home.Service";
import HomeGoal from "./Home.Goals";

const Home =()=>{
    return(
        <div> 
            <HomeBanner />

            <WhatWeDo />
            
            <OurMission />

            {/* <CustomizeSection /> */}

            <HomeStartToday />
            <HomePapers />
            <HomeTruckDispatch />   
            <HomeService />
            <HomeGoal />
        </div>
    )
}

export default Home