import styled from 'styled-components';
import {Card} from 'antd';

export const ProductStyle = styled.div`
`;
export const ProductList = styled.div`
.ant-pagination-item-active {
    font-weight: 500;
    background: #FFA206;
    border-color: #FFA206;
}
padding:0 0 50px 0;
.ant-pagination{
    text-align:center;
    margin-top:60px;
}


`;
export const ProductsTitle = styled.div`

`;

export const ProductPageTitle = styled.div`


@media(min-width: 374.98px){
    img{
        width:100%;
        padding-bottom:20px;
    }
    padding:61px 0 60px 0;
}
@media(min-width:1199.98px){
    img{
        width:100%;
    }

padding:120px 0 120px 0;
h2{
font-size:35px;
}
p{
font-size:17px;
padding-right:60px;   
}
.ant-col-lg-10{
padding-top: 30px;
text-align: end;
}

}
`;

export const CardStyle = styled(Card)`
@media (min-width: 374.98px){ 
    
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
 
}
`;



export const ProductDetails = styled.div`
img{
    padding: 7px;
    border: 1px solid #061331;
    margin-right:10px;
    margin-bottom:10px;
    widht:41px;
    height:41px;
    
}
p{
    font-size:10px;
    font-weight:bold;
    min-width: 75px;
}

.ant-col-12{
    display: flex;
}
`;
export const ProductBenefit = styled.div`
padding:50px 0 100px;
background-color: #FAFAFA;
h2{
    font-size:35px;
    margin-bottom:50px;
}
p{
    padding-right:50px;
}

@media(min-width:374.98px){
    .ant-col-xs-12{
        min-height:240px;
    }
}
@media(min-width:1199.98px){

}
`;