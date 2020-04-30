import styled from 'styled-components';
import {Button} from 'antd';

export const FooterFormStyle = styled.div`

@media (min-width: 374.98px){ {
  padding: 30px 15px;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
  position: relative;
  bottom: 70px;
  background-color: #fff;
  img{
    display:none;
  }
  .ant-col-xs-24{
    fkex-wrap:wrap;
  }
  button{
    width:100%;
  }

}
@media (min-width: 1199.98px){
padding:45px 60px;
box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
position: relative;
bottom: 70px;
background-color:#fff;
Input{
    padding: 10px;
    outline: none;
    width: 100%;
    border-radius: 0px;
    background: #FAFAFB;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #222B45;
    transition: .3s;
    height: initial;
    &::placeholder{
      color: #8F9BB3;
    }
    
}
.ant-col-lg-12{
    display:flex;
}

img{
    margin-right:20px;
    display:block;
}
button{
  width:60%;
}
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