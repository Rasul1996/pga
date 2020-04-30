import styled from 'styled-components';
import {Button, Card} from 'antd';

export const NewsStyle = styled.div`
padding:120px 0;


`;
export const NewsContainer = styled.div`
width:1200px;
margin:0 auto;


`;
export const NewsStyleTitle = styled.div`
border-left: 5px solid #FFA206;
padding-left: 14px;

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
img{
    height: 230px;
}
.ant-card-bordered{
    border:none;
}
`;
export const NewsTitle = styled.div`
    font-weight: bold;
    padding-bottom: 16px;
    font-size: 20px;

`;

export const NewsForText = styled.div`
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
export const ForText = styled.div`
position:absolute;
top:42%;
a{
    padding: 5px 10px;
    background-color: #FFA206;
    color: #FFF;
    text-transform: uppercase;
}
`;
