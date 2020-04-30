import styled from 'styled-components';
import {Button, Card} from 'antd';

export const ProductsBody = styled.div`
background-color:#FAFAFA;
padding:60px 0;
.ant-row{
    margin-bottom:25px;
}

label{
  background: #FFA206;
  border:1px solid #d9d9d9;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.75px;
  color: #ffffff;
  padding: 12px 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: initial;
  width:35px;
  position:relative;
  bottom: 42px;
  left: 170px;
}

a{
    position: absolute;
    right: 12px;
    width:212px;
}

`; 
export const ProductsBodyTitle = styled.div`
    border-left: 5px solid #FFA206;
    padding-left: 14px;
    h6{
        text-transform:uppercase;
    }
`;

export const ButtonUi = styled(Button)`
background: #FFA206;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.75px;
  color: #ffffff;
  padding: 12px 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: initial;
&:hover{
    color: #ffffff;
    background-color:#FFA206;
    border-color: #d9d9d9;
}
`;


export const CardStyle = styled(Card)`
@media (min-width: 374.98px){ 
    
}

@media (min-width: 991.98px) {
    .ant-card-cover{
        
        height:237px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .ant-card-body {
        padding: 20px;
        zoom: 1;
        max-height: 220px;
    }
}

@media (min-width: 1199.98px){
    .ant-card-cover{
        width:360px;
        height:237px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .ant-card-bordered{
        border:none;
    }
    
    .ant-card-body {
        padding: 24px;
        zoom: 1;
        max-height: 296px;
    }
    width:362px;
}




`;
export const Meta = styled(Card)`
`;
export const ProductsTitle = styled.div`
border-bottom:1px solid #BCBCBC;
padding-bottom:15px;
`;

export const ProductDetails = styled.div`
img{
    padding: 7px;
    border: 1px solid #061331;
    margin-right:10px;
    margin-bottom:10px;
    width:41px;
    height:41px;
}
p{
    font-size:10px;
    font-weight:bold;
}
.ant-col-12{
    display: flex;
}

   

`;