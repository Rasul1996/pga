import React from 'react';
import {FooterFormStyle, ButtonUi} from './atoms';
import {Row, Col} from 'antd';
import {Input} from 'antd';
import FooterIcon from '../../media/images/footericon.png';

export const FooterForm = () =>{
    return(
           <FooterFormStyle> 
               
                <Row >
                <Col xs={24} lg={12} >
                <img alt="example" src={FooterIcon}/><h3>Подписывайтесь на нашу <br/>новостную рассылку!</h3>
                </Col>
                <Col xs={24} lg={12}>
                    <Input placeholder="Ваша электронная почта…"/><ButtonUi>ПОДПИСЫВАТЬСЯ</ButtonUi>
                </Col>
                </Row>
              
           </FooterFormStyle>
    )
}