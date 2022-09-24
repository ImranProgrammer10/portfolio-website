import React from 'react';
import { MainLayout } from './../styles/Layouts';
import Skills from './../Components/Skills';
import Resume from './../Components/Resume';
 

function ResumePage() {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
