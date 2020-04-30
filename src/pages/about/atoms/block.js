import styled from 'styled-components';


export const AboutDescription = styled.div`
`;
export const AboutHeader =styled.div`
img{
    width:100%;
    opacity:0.4;
    position: relative;
    bottom: 64px;
}
`;

export const AboutTextLine = styled.div`
    color: #061331;
    font-size: 18px;
    line-height: 22px;
`;
export const AboutPicture = styled.div`
padding:120px 0 30px 0;
@media(min-width:374.98px){
    .aboutimg{
        width:100%;
    }
}

`;
export const AboutBorder = styled.div`
border-left: 5px solid #FFA206;
    padding-left: 14px;
    margin-top:5px;
`;

export const Staff = styled.div`
padding:120px 0;
text-align:center;

@media(min-width:374.98px){
    img{
        width:100%;
    }
}
`;
export const StaffTitle =styled.div`
margin-bottom:80px;
span{
    color:#717171;
    text-transform:uppercase;
    font-size:14px;
}
h2{
    font-size:36px;
    line-height: 1;
}
hr{
    width: 100px;
    height: 5px;
    background-color: #FFA206;
    border: 0;
}
`;
export const AboutIcon = styled.div`
padding:60px 0 0 0;
.ant-col-lg-12{
    display:flex;
}
img {
    padding-right:15px;
}
`;





