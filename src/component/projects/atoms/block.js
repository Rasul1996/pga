import styled from 'styled-components';
import {Button} from 'antd';

export const ProjectStyle = styled.div`
padding:90px 0;
img{
    margin-bottom:30px;
    cursor:pointer;
}
`;

export const ProjectContainer = styled.div`


`;
export const ProjectStyleTitle = styled.div`
border-left: 5px solid #FFA206;
padding-left: 14px;
h6{
    text-transform:uppercase;
}
`;
export const ChangeProjects = styled.div`


`;

export const ButtonUi = styled(Button)`
text-transform:uppercase;
border:none;
border-radius:0;
&:hover{
    background-color:#FFA206;
    border:none;
    border-radius:0;
    
}
`;