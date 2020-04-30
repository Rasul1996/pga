import styled from 'styled-components';

export const AboutStyle = styled.div`
background-color:#FFFFFF;

@media (min-width: 374.98px){
    padding:50px 0 50px 0;
}

@media (min-width: 1199.98px) {
    padding:200px 0 150px 0;

}

`;
export const AboutContainer = styled.div`
width:1200px;
margin :0 auto;


`;

export const AboutInfoLeft = styled.div`


@media (min-width: 374.98px){
    .firstPhoto{
        width:100%;
    }
    .secondPhoto{
        width:50%;
        position: absolute;
        right: 0px;
        top: 195px;
    }
    
  }
  
  @media (min-width: 1199.98px) {
    .firstPhoto{
        width: 411px;
    }
    .secondPhoto{
        width: 300px;
        position: absolute;
        right: 110px;
        top: 245px;
    }

}
`;

export const AboutInfoRight = styled.div`
@media (min-width: 374.98px){
    .ant-col-lg-8{
        display: inline-flex;
        margin-bottom:5px;
        
        span{
            padding-left:15px;
        }
    }
}

@media (min-width: 1199.98px) {
    p{
        font-size:17px;
    }
    .ant-col-lg-8{
        display: inline-flex;
        
        span{
            padding-left:15px;
        }
    }
    img{
        width:48px;
        height:48px;
    }
}

`;
export const Description = styled.div`
@media (min-width: 374.98px){
    padding-top: 55px;
    h1{
        border-left: 5px solid #FFA206;
        padding-left: 14px;
        font-size:22px;
    }  
}
  @media (min-width: 1199.98px) {
    padding-top: 0;
    h1{
        border-left: 5px solid #FFA206;
        padding-left: 14px;
        font-size:30px;
        
    } 
}

`;
export const ForText = styled.div`
    margin-bottom: 20px;
    padding: 8px 18px;
    border: 1px solid #FFA206;
    width: 111px;
`;
