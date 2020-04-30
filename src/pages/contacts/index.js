import React from 'react';
import {ContactStyle, ContactTitle, ContactSubTitle, ContactHeader, FormBlock,BlockForPhoto, ContactInfo, AboutSocials} from './atoms';
import {Header, HomeFooter} from '../../component';
import {Row, Col} from 'antd';
import { Input } from 'antd';
import {Link} from 'react-router-dom';
import {BodyContainer} from '../../ui/atoms';
import {ButtonUi} from '../../ui/atoms';
import ContactPhoto from '../../media/images/contactphoto.png';
import LocationIcon from '../../media/icons/location.png';
import PhoneIcon from '../../media/icons/phone.png';
import MessageIcon from '../../media/icons/message.png';
import WebIcon from '../../media/icons/web.png';
import {FacebookSvgc} from '../../media/socialnetworks/facebookc';
import {TwitterSvgc} from '../../media/socialnetworks/twitterc';
import {TelegramSvgc} from '../../media/socialnetworks/telegramc';
import {YoutubeSvgc} from '../../media/socialnetworks/youtubec';

export const ContactPage = () => {
    return(
        <ContactStyle>
        <Header/>
        <ContactHeader>
        <BodyContainer>
        <Row>
        <Col xs={24} lg={15}>
            <ContactTitle>
            <span>Связаться</span>
            <h2>Форма обратной связи</h2>
            </ContactTitle>
            <ContactSubTitle>
            <p>Мы команда профессиональных и опытных специалистов.
                Мы предлагаем широкий ассортимент полимерных труб.</p>
            </ContactSubTitle>
            <FormBlock>
                <form action="">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Input placeholder="Ваше имя" type='text'/>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Input placeholder="Номер телефона" type='number'/>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Input placeholder="Эл. адрес" type='email'/>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Input placeholder="Ваш город" type='text'/>
                        </Col>
                    </Row>
                    <Input placeholder="Сообщения" type='text' rows='5' cols='5'/>
                    <Row >
                    <Col xs={24} lg={12}>
                        <Link>
                        <ButtonUi >Отправить</ButtonUi>
                        </Link> 
                    </Col>
                    </Row>
                </form>
            </FormBlock>
            <ContactInfo>
            <h2>Контактная информация</h2>
            <Row gutter={[8, 8]}>
                <Col  xs={24} lg={12}>
                <p><label><img src={LocationIcon} alt=''/></label>улица Зиёлилар, 4Г Ташкент, Узбекистан</p>
                <p><label><img src={PhoneIcon} alt=''/></label>+998 (71) 262-51-09 <br/>+998 (71) 269-02-03</p>
                </Col>
                <Col xs={24} lg={12}>
                <p><label><img src={MessageIcon} alt=''/></label>Info@pga.uz</p>
                <p><label><img src={WebIcon} alt=''/></label>www.Pga.uz</p>
                </Col>
            </Row>
            <AboutSocials>
                <Link to='' ><FacebookSvgc/></Link>
                <Link to=''><TwitterSvgc/></Link>
                <Link to=''><TelegramSvgc/></Link>
                <Link to=''><YoutubeSvgc/></Link>
            </AboutSocials>
        </ContactInfo>
        </Col>
        <Col span={9}>
        <BlockForPhoto>
         <img src={ContactPhoto} alt=''/>
        </BlockForPhoto>
        </Col>
        </Row> 
        </BodyContainer>
        </ContactHeader>
        <HomeFooter/>
        </ContactStyle>
    )
};
