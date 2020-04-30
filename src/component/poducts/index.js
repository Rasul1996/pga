import React from 'react';
import { ProductsBody, ProductsBodyTitle, ProductDetails } from './atoms';
import {BodyContainer} from '../../ui/atoms';
import { CardStyle } from './atoms';
import { ProductsTitle } from './atoms';
import ProductsPhotoOne from '../../media/images/productphoto_1.png';
import ProductsPhotoTwo from '../../media/images/productphoto_2.png';
import ProductsPhotoThree from '../../media/images/productphoto_3.png';
import ProductsPhotoFour from '../../media/images/productphoto_4.png';
import ProductsPhotoFive from '../../media/images/productphoto_5.jpg';
import ProductsPhotoSix from '../../media/images/productphoto_6.png';
import ProductDetailOne from '../../media/images/productdetail_2.png';
import ProductDetailTwo from '../../media/images/productdetail_3.png';
import ProductDetailThree from '../../media/images/productdetail_4.png';

import { Row,Col } from 'antd';



export const Products = () =>{
    return(
        <ProductsBody>
            <BodyContainer>
            <Row>
            
            <Col span={12}>
                <ProductsBodyTitle>
                <h6>Качественная продукция</h6>
                <h1>Продукты</h1>
                </ProductsBodyTitle>
            </Col>
            <Col span={12}>
            
            </Col>
            </Row>
            <Row gutter={[24, 24]}>
            <Col xs={24} lg={8} > 
            <CardStyle hoverable
                cover={<img alt="example" src={ProductsPhotoTwo}/>}>
                <ProductsTitle>Трубы ПЭ для водоснабжения</ProductsTitle>
                <p></p>
                <ProductDetails>
                <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Диаметр (мм)<br/>16-1200мм</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Рабочее давление(МПа) <br/>до 25</p>
                    </Col>
                    </Row>
                    <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailTwo} alt=''/>
                    <p>Материал труб <br/>ПЭ 80, ПЭ 100, ПЭ100+</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailThree} alt=''/>
                    <p>SDR<br/>6; 7.4; 9; 11; 13.6; 17; 17.6; 21; 26;</p>
                    </Col>
                    </Row>
                </ProductDetails>
                </CardStyle>
                
            </Col>
            <Col xs={24} lg={8} >
            <CardStyle hoverable

                cover={<img alt="example" src={ProductsPhotoOne}/>}>
                <ProductsTitle>Трубы ПЭ для газоснабжения</ProductsTitle>
                <p></p>
                <ProductDetails>
                    <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Диаметр (мм)<br/>50-630</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Рабочее давление(МПа) <br/>(PN)- до 12</p>
                    </Col>
                    </Row>
                    <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailTwo} alt=''/>
                    <p>Материал труб <br/>ПЭ 100</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailThree} alt=''/>
                    <p>SDR<br/>9; 11; 13,6; 17,6; 21; 26</p>
                    </Col>
                    </Row>   
                </ProductDetails>
                </CardStyle>
            </Col>
            <Col xs={24} lg={8} >
            <CardStyle hoverable

                cover={<img alt="example" src={ProductsPhotoThree} />}>
                <ProductsTitle>Трубы ПЭ технического назначения</ProductsTitle>
                <p></p>
                <ProductDetails>
                <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Диаметр (мм)<br/>16-1200мм</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Рабочее давление(МПа) <br/> - </p>
                    </Col>
                    </Row>
                    <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailTwo} alt=''/>
                    <p>Материал труб <br/>ПЭ 80</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailThree} alt=''/>
                    <p>SDR<br/>9; 11; 13,6; 17,6; 21; 26; </p>
                    </Col>
                </Row>
                </ProductDetails>
                </CardStyle>
            </Col>
            </Row>
            <Row gutter={[24, 24]}>
            <Col xs={24} lg={8} > 
            <CardStyle hoverable

                cover={<img alt="example" src={ProductsPhotoFour}/>}>
                <ProductsTitle>Литые ПНД фитинги</ProductsTitle>
                <p></p>
                <ProductDetails>
                <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Диаметр (мм)<br/>20-1200мм</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Рабочее давление(МПа) <br/>(PN)- 10,16,25</p>
                    </Col>
                    </Row>
                    <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailTwo} alt=''/>
                    <p>Материал фитингов <br/>ПЭ 80,ПЭ 100</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailThree} alt=''/>
                    <p>SDR<br/> 7.4; 11; 17; </p>
                    </Col>
                    </Row>
                </ProductDetails>
                </CardStyle>
            </Col>
            <Col xs={24} lg={8} >
            <CardStyle hoverable

                cover={<img alt="example" src={ProductsPhotoFive}/>}>
                <ProductsTitle>Электросварные фитинги</ProductsTitle>
                <p></p>
                <ProductDetails>
                <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Диаметр (мм)<br/>20-630мм</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Рабочее давление(МПа) <br/>(PN)- 10,16,25</p>
                    </Col>
                    </Row>
                    <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailTwo} alt=''/>
                    <p>Материал труб <br/>ПЭ 80,ПЭ 100</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailThree} alt=''/>
                    <p>SDR<br/> - </p>
                    </Col>
                    </Row>
                </ProductDetails>
                </CardStyle>
            </Col>
            <Col xs={24} lg={8} >
            <CardStyle hoverable

                cover={<img alt="example" src={ProductsPhotoSix} />}>
                <ProductsTitle>Сварочное оборудование для ПЭ труб</ProductsTitle>
                <p></p>
                <ProductDetails>
                <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Диаметр (мм)<br/>16-1600мм</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailOne} alt=''/>
                    <p>Рабочее давление(МПа) <br/>-</p>
                    </Col>
                    </Row>
                    <Row gutter={[8, 16]}>
                    <Col span={12}>
                    <img src={ProductDetailTwo} alt=''/>
                    <p>Материал <br/>-</p>
                    </Col>
                    <Col span={12}>
                    <img src={ProductDetailThree} alt=''/>
                    <p>SDR<br/>-</p>
                    </Col>
                    </Row>
                </ProductDetails>
                </CardStyle>
            </Col>
            </Row>
            </BodyContainer>
        </ProductsBody>
    )
}