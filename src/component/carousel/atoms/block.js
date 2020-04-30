import styled from 'styled-components';
import {Carousel, Button } from 'antd';


export const CarouselStyle = styled(Carousel)`


@media (min-width: 374.98px){ {
text-align: center;
background: #364d79;
overflow: hidden;
}

@media (min-width: 1199.98px) {
  text-align: center;
  height: 750px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

h3{
  color: #fff;
}
img {
  width:100%;
  opacity: 0.4;
}
`;
export const DescriptionCarousel = styled.div`
@media (min-width: 374.98px){
  width:70%;
  position: absolute;
  top: 125px;
  left: 35px;
  margin:0 auto;
  color:#fff;

  p{
    font-size:14px;
  }
  h5{
    color: #FFA206;
  }
}
@media (min-width: 1199.98px) {
  width:70%;
  position: absolute;
  top: 250px;
  left: 132px;
  margin:0 auto;
  color:#fff;
  p{
    font-size:40px;
  }
  h5{
    color: #FFA206;
  }
}

`;
export const CarouselSection = styled.div`
.ant-carousel .slick-dots{
  position: absolute;
    display: block;
    width: 100%;
    height: 15px;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
}
.ant-carousel .slick-dots-bottom {
  bottom: 100px;
}
.ant-carousel .slick-dots li button{
  display: block;
    width: 16px;
    height: 15px;
    padding: 0;
    color: transparent;
    font-size: 0;
    background: #FFA206;
    border: 0;
    border-radius: 1px;
    outline: none;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
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
 
`;
export const QualityCharts = styled.div`

@media (min-width: 374.98px){
  display:none;
}

@media (min-width: 1199.98px) {
  display:block;
  position: absolute;
  top: 710px;
  left: 100px;
  .ant-col-lg-7 {
    margin-right:30px;
  }
}

`;

export const QualityBody = styled.div`
background-color:#fff;
color:#000;
border:1px solid #fff;
box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
padding:15px;

a{
  text-transform:uppercase;
  color:#FFA206;
  &:hover{
    .anticon{
      
      animation-duration: 2s;
      animation-name:slidein;
    }
  }

}
@keyframes slidein {
  from {
    padding-left:8px;
  }
  to {padding-left:2px;}
}
p{
  white-space: nowrap; /* Отменяем перенос текста */
    overflow: hidden; /* Обрезаем содержимое */
    text-overflow: ellipsis;
    color:#717171; 
    
}

`;
export const QualityHeader = styled.div`
display:flex;

strong{
  font-size: 17px;
  padding-left: 15px;
}
`;
