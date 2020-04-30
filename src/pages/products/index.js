import React from 'react';
import {ProductStyle, CardStyle, ProductPageTitle,  ProductList, ProductBenefit, ProductsTitle, ProductDetails} from './atoms';
import {Header, HomeFooter} from '../../component';
import {BodyContainer} from '../../ui/atoms';
import {Row, Col} from 'antd';
import { Pagination } from 'antd';
import ProductIcon from '../../media/images/producticon_1.png';
import ProductIconTwo from '../../media/images/producticon_2.png';
import ProductIconThree from '../../media/images/producticon_3.png';
import ProductIconFour from '../../media/images/producticon_4.png';
import ProductsPageOne from '../../media/images/productpage.png';
import ProductsPhotoOne from '../../media/images/productphoto_1.png';
import ProductsPhotoTwo from '../../media/images/productphoto_2.png';
import ProductsPhotoThree from '../../media/images/productphoto_3.png';
import ProductsPhotoFour from '../../media/images/productphoto_4.png';
import ProductsPhotoFive from '../../media/images/productphoto_5.png';
import ProductsPhotoSix from '../../media/images/productphoto_6.png';
import ProductDetailOne from '../../media/images/productdetail_2.png';
import ProductDetailTwo from '../../media/images/productdetail_3.png';
import ProductDetailThree from '../../media/images/productdetail_4.png';


export const ProductPage = () =>{
    return(
        <ProductStyle>
            <Header/>
            <BodyContainer>
                <ProductPageTitle>
                <Row type="flex">
                <Col xs={{span : 24, order: 2}} lg={{span: 14, order: 1}} >
                    <h2> Напорные системы водоснабжения и водоотведения</h2>
                    <p>Вся продукция сертифицирована и поставляется с полным комплектом документов, включающим: паспорт качества, сертификат соответствия, сертификат соответствия требованиям промышленной безопасности.</p>
                    <p>Трубы поставляются с заглушками, предотвращающими попадание инородных тел или влаги внутрь.</p>
                </Col>
                <Col xs={{span : 24, order: 1}} lg={{span: 10, order: 2}} ><img alt='' src={ProductsPageOne}/> </Col>
                </Row>
                </ProductPageTitle>
                <ProductList>
                <Row gutter={[24, 24]}>
                <Col xs={24} lg={8} > 
                <CardStyle hoverable
                    cover={<img alt="example" src={ProductsPhotoOne}/>}>
                    <ProductsTitle>Трубы ПЭ для газоснабжения 50-630мм</ProductsTitle>
                    <p>Трубопроводные системы из полиэтилена применяются для сетей газораспределения, в т. ч.</p>
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
                    <p>SDR<br/>6; 7.4; 9; 11; 13.6; 17; 17.6; 21; 26; 33; 41</p>
                    </Col>
                    </Row>
                    </ProductDetails>
                    </CardStyle>
                </Col>
                <Col xs={24} lg={8} >
                <CardStyle hoverable
                    cover={<img alt="example" src={ProductsPhotoTwo}/>}>
                    <ProductsTitle>Трубы ПЭ для газоснабжения 50-630мм</ProductsTitle>
                    <p>Трубопроводные системы из полиэтилена применяются для сетей газораспределения, в т. ч.</p>
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
                <Col  xs={24} lg={8} >
                <CardStyle hoverable
                    cover={<img alt="example" src={ProductsPhotoThree} />}>
                    <ProductsTitle>Трубы ПЭ для газоснабжения 50-630мм</ProductsTitle>
                    <p>Трубопроводные системы из полиэтилена применяются для сетей газораспределения, в т. ч.</p>
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
                <Col  xs={24} lg={8} > 
                <CardStyle hoverable
                    cover={<img alt="example" src={ProductsPhotoFour}/>}>
                    <ProductsTitle>Трубы ПЭ для газоснабжения 50-630мм</ProductsTitle>
                    <p>Трубопроводные системы из полиэтилена применяются для сетей газораспределения, в т. ч.</p>
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
                <Col  xs={24} lg={8} >
                <CardStyle hoverable
                    cover={<img alt="example" src={ProductsPhotoFive}/>}>
                    <ProductsTitle>Трубы ПЭ для газоснабжения 50-630мм</ProductsTitle>
                    <p>Трубопроводные системы из полиэтилена применяются для сетей газораспределения, в т. ч.</p>
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
                <Col  xs={24} lg={8} >
                <CardStyle hoverable
                    cover={<img alt="example" src={ProductsPhotoSix} />}>
                    <ProductsTitle>Трубы ПЭ для газоснабжения 50-630мм</ProductsTitle>
                    <p>Трубопроводные системы из полиэтилена применяются для сетей газораспределения, в т. ч.</p>
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
                    <p>Материал труб <br/>-</p>
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
                <Pagination defaultCurrent={1} total={30} />
                </ProductList>
            </BodyContainer>
            <ProductBenefit>
                <BodyContainer>
                    <h2>Преимущества</h2>
                    <Row>
                        <Col xs={12} lg={6}>
                        <img className='firstPhoto' src={ProductIcon} alt=''/>
                        <p>Герметичность в течение всего срока эксплуатации не менее 50 лет</p>          
                        </Col>
                        <Col xs={12} lg={6}>
                        <img className='firstPhoto' src={ProductIconTwo} alt=''/>
                        <p>Высокая химическая стойкость, отсутствие коррозии</p>          
                        </Col>
                        <Col xs={12} lg={6}>
                        <img className='firstPhoto' src={ProductIconThree} alt=''/>  
                        <p>Снижение сроков производства работ в 2-2,5 раза по сравнению со стальными трубами</p>        
                        </Col>
                        <Col xs={12} lg={6}>
                        <img className='firstPhoto' src={ProductIconFour} alt=''/> 
                        <p>Низкий вес и гибкость, позволяющая пройти повороты свободным изгибом</p>         
                        </Col>
                    </Row>
                </BodyContainer>
            </ProductBenefit>
            <HomeFooter/>
        </ProductStyle>
    )
}