import React from 'react';
import {Header, AboutInfo, Products, HomePartners, HomeFooter, HomeContact} from '../../component';
import {CarouselUi} from '../../component';






export const HomePage = () => {
    return (
            
            <div>
                <Header/>
                <CarouselUi/>
                <AboutInfo/>
                <Products/>
                <HomeContact/>
                <HomePartners/>
                <HomeFooter/>
            
            </div>    
            
    )
};