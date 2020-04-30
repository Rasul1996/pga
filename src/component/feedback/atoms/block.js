import styled from 'styled-components';

export const FeedbackStyle = styled.div`

`;
export const FeedbackContainer = styled.div`


`;

export const FeedbackIcon = styled.div`
display: flex;
flex-wrap: wrap;
img{
    margin-right:15px;

}
figure{
    margin-right:30px;
} 

`;
export const UserName = styled.div`
font-size:24px;
color:#FFA206;

p{
    color:#fff;
    font-size:12px;
}
`;

export const FeedbackLeft = styled.div`
    background-color: #FFA206;
    padding: 60px 0;
    position: absolute;
    color: #ffffff;
    top: 200px;
    width: calc(100% + ((100vw - 1200px) / 1));
    margin-left: calc((-103vw + 1200px) / 2);
    padding-left: calc((10vw +1200px)/ 2);
p{
    padding-right: 180px;
    font-weight: bold;
}
h5{
    color:#ffffff;
}
h1{
    color:#ffffff;
}
.ant-col-10{
    display:flex;
    justify-content:flex-end;
}
}

`;
export const FeedbackLeftTitle = styled.div`
border-left: 5px solid #ffffff;
padding-left: 14px;
`;

export const FeedbackRight = styled.div`
background-color:#061331;
padding: 60px 0;
color: #ffffff;
width: calc(100% + ((105vw - 1200px) / 2));
margin-left: calc((-92vw + 1200px) / 2);
padding-left: calc((10vw +1200px)/ 2);
p{
padding-right: 180px;
}
h5{
color:#ffffff;
}
h1{
color:#ffffff;
}

`;
export const FeedbackRightTitle = styled.div`
border-left: 5px solid #ffffff;
padding-left: 14px;
`;
export const FeedbackIconRight = styled.div`
min-height:48px;
.ant-col-8{
    display: inline-flex;
    
    span{
        padding-left:15px;
    }
`;