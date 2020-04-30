import React from 'react';
import {NewsStyle, NewsStyleTitle, ForText, NewsForText} from './atoms';
import {BodyContainer} from '../../ui/atoms';
import { Row,Col } from 'antd';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import { CardStyle } from './atoms';
import {ButtonUi} from './atoms';
import {NewsTitle} from './atoms';
import NewsPhotoOne from '../../media/images/newsphoto_1.png';
import NewsPhotoTwo from '../../media/images/newsphoto_2.png';
import NewsPhotoThree from '../../media/images/newsphoto_3.png';

export const HomeNews = () =>{
    return(
        <NewsStyle>
            <BodyContainer>
            <NewsForText>
            <Row>
            <Col span={12}>
                <NewsStyleTitle>
                <h6>РАБОТАЕТ С ОТЛИЧНЫМ</h6>
                <h1>Последние новости и блоги</h1>
                </NewsStyleTitle>
            </Col>
            <Col span={12}>
            <Link to='/about'><ButtonUi >смотреть больше</ButtonUi><label><Icon type="arrow-right" /></label></Link>            
            </Col>
            </Row>
            </NewsForText>
            <Row>
            <Col span={8}>
                <CardStyle hoverable
                style={{ width: 362 }}
                cover={<img alt="example" src={NewsPhotoOne} />}>
                <ForText><Link to='/about'>production</Link></ForText>
                <NewsTitle>But I must explain to you how all this mistaken</NewsTitle>
                <p>ноябрь 24, 2019</p>
                </CardStyle>
            </Col>
            <Col span={8}>
                <CardStyle hoverable
                style={{ width: 362 }}
                cover={<img alt="example" src={NewsPhotoTwo} />}>
                    <ForText><Link to='/about'>production</Link></ForText>
                <NewsTitle>But I must explain to you how all this mistaken</NewsTitle>
                <p>ноябрь 24, 2019</p>
                </CardStyle>
            </Col>
            <Col span={8}>
                <CardStyle hoverable
                style={{ width: 362 }}
                cover={<img alt="example" src={NewsPhotoThree} />}>
                    <ForText><Link to='/about'>production</Link></ForText>
                <NewsTitle>But I must explain to you how all this mistaken</NewsTitle>
                <p>ноябрь 24, 2019</p>
                </CardStyle>
            </Col>
            </Row>
            </BodyContainer>
        </NewsStyle>
    )
}