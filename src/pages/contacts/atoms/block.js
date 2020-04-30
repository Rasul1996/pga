import styled from 'styled-components';

export const ContactStyle = styled.div`
`;

export const ContactTitle = styled.div`
border-left: 5px solid #FFA206;
padding-left: 14px;
text-transform:uppercase;
h2{
    font-size:35px;
    line-height:1;

}
`;

export const ContactSubTitle = styled.div`
width: 65%;
font-size: 17px;
margin-bottom:50px;
`;
export const BlockForPhoto = styled.div`
@media (min-width: 374.98px){ {
    img{
        display:none;
    }
}

@media (min-width: 1199.98px){
    img{
        width:100%;
        display:block;
    }
`;
export const ContactHeader =styled.div`
padding:120px 0 70px 0;
`;
export const FormBlock = styled.div`
img{
    width:100%;
}
input{
    border: 0;
    border-bottom: 1px solid #BCBCBC;
    border-radius: 0;
    margin-bottom:10px;
    font-size:17px;
}
margin-bottom: 50px;
`;

export const ContactInfo = styled.div`
font-size:17px;
h2{
    margin-bottom:25px;
}
label{
    padding-right:15px;
}

`;
export const AboutSocials = styled.div`
a{
    padding-right:15px;
}
text-align:left;
`;

export const ContactHeaderTitle = styled.div``;
