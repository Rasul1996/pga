import React from 'react';
import { AboutStyle, AboutInfoLeft, AboutInfoRight, Description } from './atoms';
import {BodyContainer} from '../../ui/atoms';
import { Row,  Col} from 'antd';

import AboutLeftPhoto from '../../media/images/aboutleft.png';
import AboutLeftPhotoTwo from '../../media/images/aboutleftphoto.png';
import AboutPhotoOne from '../../media/images/medal.png';
import AboutPhotoTwo from '../../media/images/power.png';
import AboutPhotoThree from '../../media/images/person.png';



export const AboutInfo = () => {
    return (
        <AboutStyle>
            <BodyContainer>
            <Row>
                <AboutInfoLeft>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <img className='firstPhoto' src={AboutLeftPhoto} alt=''/>
                <img className='secondPhoto' src={AboutLeftPhotoTwo} alt=''/>
                </Col>
                </AboutInfoLeft>  
                <AboutInfoRight>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Description>
                        <h1>POLIMER GROUP ASIA</h1>
                        <p>ООО «Polimer Group Asia» является ведущим поставщиком, <br/>производителем полимерных труб.</p>
                        <p>ООО «Polimer Group Asia» - это также производственно-монтажная группа,
                            которая производит напорные и безнапорные полимерные трубы как канализационные,
                            обсадные, для транспортировки питьевой воды, газа и агрессивных жидкостей,
                            используемых в жилищно-коммунальном хозяйстве, горнодобывающей,
                            целлюлозно-бумажной и металлургической промышленности.</p>
                        <p>Для производства продукции мирового качества мы запустили
производственные линии для производства полиэтиленовых труб диаметром и фиттингов различных ассортиментах</p>
                        </Description>
                        
                        <Col xs={24} lg={8}>
                        <img src={AboutPhotoOne} alt='images'/><span>Проверенные профессионалы своего дела</span>
                        </Col>
                        <Col xs={24} lg={8}>
                        <img src={AboutPhotoTwo} alt='images'/><span>Жесткий контроль производства</span>
                        </Col>
                        <Col xs={24} lg={8}>
                        <img src={AboutPhotoThree} alt='images'/><span>Гарантия качества</span>
                        </Col>
                    </Col>
                </AboutInfoRight> 
            </Row>
            
            </BodyContainer>
        </AboutStyle>

    )
}