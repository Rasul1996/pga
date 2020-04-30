import React from 'react';
import {PartnerStyle, PartnerStyleStitle} from './atoms';
import {BodyContainer} from '../../ui/atoms';

import {ResponsiveUi} from './carousel';

    
export const HomePartners = () =>{
    return(
        <PartnerStyle>
            <BodyContainer>
                <PartnerStyleStitle >
                <h6>сотрудничество</h6>
                <h1>Наши партнеры</h1>
                </PartnerStyleStitle>
                <ResponsiveUi/>
            </BodyContainer>
        </PartnerStyle>
    )
}

