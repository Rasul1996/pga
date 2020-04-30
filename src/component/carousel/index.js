import React from 'react';
import { CarouselStyle, DescriptionCarousel,CarouselSection , ButtonUi, QualityCharts, QualityBody, QualityHeader} from './atoms';
import Photo from '../../media/images/polimer_g_a.jpg';
import {Row, Col} from 'antd';

import CarouselIcon from '../../media/images/carouselicon_1.png';


export const CarouselUi = () => {
    return (
      <CarouselSection>
      <CarouselStyle>
        <div>
          <h3><img src={Photo} alt=''/></h3>
        </div>
        
      </CarouselStyle>
      <DescriptionCarousel>
        <h5>МЫ ОЧЕНЬ ИННОВАЦИОННЫЕ</h5>
        <p><strong>POLIMER GROUP ASIA</strong> является ведущим поставщиком, производителем полимерных труб!</p>
        <ButtonUi>подробнее </ButtonUi>
        </DescriptionCarousel>
        <QualityCharts>
        <Row>
        <Col md={7} lg={7}>
        <QualityBody> 
        <QualityHeader>
         <img src={CarouselIcon} alt='' /> <strong>Более 10 лет профессионального опыта</strong>
         </QualityHeader>
          </QualityBody>
        </Col>
        <Col md={7} lg={7}>
        <QualityBody> 
          <QualityHeader>
         <img src={CarouselIcon} alt='' /> <strong>Сотни успешных проектов</strong>
         </QualityHeader> 
        </QualityBody>
        </Col>
        <Col md={7} lg={7}>
        <QualityBody> 
        <QualityHeader>
         <img src={CarouselIcon} alt='' /> <strong>Огромное количество благодарных клиентов</strong>
         </QualityHeader>
        </QualityBody>
        </Col>
        </Row>
        </QualityCharts>
      </CarouselSection>
    )  
}
