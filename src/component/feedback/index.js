import React from 'react';
import {FeedbackStyle, FeedbackIcon, FeedbackLeft, FeedbackRight, FeedbackRightTitle, FeedbackLeftTitle,UserName, FeedbackIconRight} from './atoms';
import {BodyContainer } from '../../ui/atoms';
import {Row, Col} from 'antd';
import FeedbackPhotoOne from '../../media/images/feedback_1.png';
import FeedbackPhotoTwo from '../../media/images/feedback_2.png';
import FeedbackIconOne from '../../media/images/feedbackicon_1.png';
import FeedbackIconTwo from '../../media/images/feedbackicon_2.png';
import FeedbackIconThree from '../../media/images/feedbackicon_3.png';
import FeedbackIconFour from '../../media/images/feedbackicon_4.png';
import FeedbackIconFive from '../../media/images/feedbackicon_5.png';
import FeedbackIconSix from '../../media/images/feedbackicon_6.png';

export const HomeFeedback = () =>{
    return(
        <FeedbackStyle>
            <BodyContainer>
                <Row>
                    <Col span={14}>
                    <FeedbackLeft>
                    <FeedbackLeftTitle>
                    <h5>КАЧЕСТВО продукции</h5>
                    <h1>Показатели качества</h1>
                    </FeedbackLeftTitle>
                    <p>Для производства продукции мирового качества мы запустили интегрированные
                         производственные линии для производства полиэтиленовых и полипропиленовых 
                         труб диаметром от 16 до 800 мм в различных ассортиментах.
                    </p>
                    <FeedbackIcon>
                    <figure><img alt="example" src={FeedbackIconOne}/>
                    24/7 часов контроль над процессом</figure>
                    <figure><img alt="example" src={FeedbackIconTwo}/>
                    24/7 контроль качество</figure><br/>
                    <figure> <img alt="example" src={FeedbackIconThree}/>
                    Обнаружение Плохое качество продукции</figure>
                    </FeedbackIcon>
                    </FeedbackLeft>
                    </Col>
                    <Col span={10}>
                        <img alt="example" src={FeedbackPhotoOne}/>
                    </Col>
                    <Col span={10}>
                    <img alt="example" src={FeedbackPhotoTwo}/>
                    </Col>
                    <Col span={14}>
                    <FeedbackRight>
                    <FeedbackRightTitle>
                    <h5>ОТЗЫВ</h5>
                    <h1>Что говорят наши клиенты</h1>
                    </FeedbackRightTitle>
                    <UserName>Towney Liakos<p>Нью-Йорк</p></UserName>
                    <p>Потрясающий сервис! Внимание к деталям, очень полезное с точки зрения
                        предоставления нам наших предпочтительных требований к монтажу телевизора
                        и проводке Отличная работа и очень приятная! Настоятельно рекомендую.
                        Нанимать снова в любое время. Большое спасибо!
                    </p>
                    <FeedbackIconRight>
                    <Col span={8}>
                    <img alt="example" src={FeedbackIconFour}/><span>50+ <br/> Цель Сосредоточена</span>
                    </Col>
                    <Col span={8}>
                        <img alt="example" src={FeedbackIconFive}/><span>200+<br/> Счастливые клиенты</span>
                    </Col>
                    <Col span={8}>
                    <img alt="example" src={FeedbackIconSix}/><span>100+<br/> Завершенные проекты</span>
                    </Col>
                    </FeedbackIconRight>
                    </FeedbackRight>
                    </Col>  
                </Row>
                </BodyContainer>
        </FeedbackStyle>
    )
}