import React from 'react';
import {ProjectStyle, ProjectStyleTitle, ChangeProjects} from './atoms';
import {BodyContainer} from '../../ui/atoms';
import { Row,Col } from 'antd';
import {ButtonUi} from './atoms';
import ProjectPhotoOne from '../../media/images/projectsphoto_1.png';
import ProjectPhotoTwo from '../../media/images/projectsphoto_2.png';
import ProjectPhotoThree from '../../media/images/projectsphoto_3.png';
import ProjectPhotoFour from '../../media/images/projectsphoto_4.png';
import ProjectPhotoFive from '../../media/images/projectsphoto_5.png';
import ProjectPhotoSix from '../../media/images/projectsphoto_6.png';


export const Projects = () => {
    return(
        <ProjectStyle>
            <BodyContainer>
            <Row type="flex" justify="center">
            <Col span={12}>
                <ProjectStyleTitle>
                <h6>недавно завершено</h6>
                <h1>Наши последние проекты</h1>
                </ProjectStyleTitle>
            </Col>
            <Col span={12}>
            <ChangeProjects>
            <Col span={6}>
            <ButtonUi >все проекты</ButtonUi>             
            </Col>
            <Col span={6}>
            <ButtonUi >производство</ButtonUi>             
            </Col>
            <Col span={6}>
            <ButtonUi >Полимерная Галерея</ButtonUi>             
            </Col>
            </ChangeProjects>
            </Col>
            </Row>
            <Row type="flex" justify="center">
            <Col span={8}>
            <img className='firstPhoto' src={ProjectPhotoOne} alt=''/>          
            </Col>
            <Col span={8}>
            <img className='firstPhoto' src={ProjectPhotoTwo} alt=''/>          
            </Col>
            <Col span={8}>
            <img className='firstPhoto' src={ProjectPhotoThree} alt=''/>          
            </Col>
            <Col span={8}>
            <img className='firstPhoto' src={ProjectPhotoFour} alt=''/>          
            </Col>
            <Col span={8}>
            <img className='firstPhoto' src={ProjectPhotoFive} alt=''/>          
            </Col>
            <Col span={8}>
            <img className='firstPhoto' src={ProjectPhotoSix} alt=''/>          
            </Col>
            </Row>
            </BodyContainer>
        </ProjectStyle>

    )

}