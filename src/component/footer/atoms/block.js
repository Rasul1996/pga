import styled from 'styled-components';

export const FooterStyle = styled.div`

background-color:#061331;
padding: 0px 0 60px;


@media (min-width: 374.98px){
    h2{
        color:#ffffff;
        font-size:15px;
    }
    ul{
        padding-left:20px;
        color:#ffffff;
        font-size:13px;
    }
    li{
        list-style:none;
        line-height:26px;
        font-size:14px;
    }
}
@media (min-width: 1199.98px){
    h2{
        color:#ffffff;
    }
    ul{
        padding-left:25px;
        color:#ffffff;
        font-size:13px;
    }
    li{
        list-style:none;
        line-height:26px;
        font-size:14px;
    }
}
`;

export const FooterTitle = styled.div`
@media (min-width: 374.98px){ {
    border-bottom:0.5px solid #FFFFFF;
    color:#ffffff;
    padding-bottom:15px;
}

@media (min-width: 1199.98px){
    border-right:0.5px solid #FFFFFF;
    border-bottom:0;
    color:#ffffff;
}



`;
export const SocialStyle = styled.div`
display:flex;
justify-content:space-between;
padding-right:70px;
`;