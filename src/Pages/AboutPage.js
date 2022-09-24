import React from 'react'
import styled from 'styled-components';
import { MainLayout } from './../styles/Layouts';
import Title from './../Components/Title';
import ImageSection from './../Components/ImageSection';
import ReviewsSetion from './../Components/ReviewsSetion';
import ServicesSection from './../Components/ServicesSection';
 

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSetion />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage