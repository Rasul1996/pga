import React from 'react';
import {Link} from 'react-router-dom'
import {FooterStyle, FooterTitle, SocialStyle} from './atoms';
import {BodyContainer} from '../../ui/atoms';
import {FooterForm} from '../footerform';
import {Row, Col} from 'antd';
import {LogoSvg} from '../../media';
import {FacebookSvg} from '../../media/socialnetworks/facebook';
import {TwitterSvg} from '../../media/socialnetworks/twitter';
import {TelegramSvg} from '../../media/socialnetworks/telegram';
import {YoutubeSvg} from '../../media/socialnetworks/youtube';


export const HomeFooter = () =>{
    return(
        <FooterStyle>
            <BodyContainer>
            <FooterForm/>
                <Row>
                    <Col xs={24} lg={6} >
                        <FooterTitle>
                            <LogoSvg/>
                            <p>Copyright © 2020 Polimer Group Asia.<br/> Все права защищены.</p>
                            <SocialStyle>
                                <Link to=''><FacebookSvg/></Link>
                                <Link to=''><TwitterSvg/></Link>
                                <Link to=''><TelegramSvg/></Link>
                                <Link to=''><YoutubeSvg/></Link>
                            </SocialStyle>
                        </FooterTitle>
                    </Col>
                    <Col xs={12} lg={4}>
                        <ul><h2>Главный</h2>
                            <li>О компании</li>
                            <li>Товары</li>
                            <li>Контакты</li>
                            <li>Наши партнеры</li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                    <ul><h2>Товары</h2> 
                            <li>ТОП продукты</li>
                            <li>Все товары</li>
                            <li><Link to='/blog'>Последние новости</Link></li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                    <ul><h2>О нас</h2>
                            <li>О компании</li>
                            <li>Последние новости</li>
                            <li>Наши партнеры</li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                    <ul><h2>Связаться с нами</h2>
                            <li>Наши контакты</li>
                            <li>Главный офис</li>
                            <li>Где можно купить</li>
                        </ul>
                    </Col>
                </Row>
            </BodyContainer>
        </FooterStyle>
    )
}
