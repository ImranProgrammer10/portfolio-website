import React from 'react';
import { pdfjs } from 'react-pdf';

import styled from 'styled-components';
import resume from '../img/about.jpg';
import PrimaryButton from './PrimaryButton';
  pdfjs.GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>Full-<span>Stack Web Developer</span></h4>
                <p className="paragraph">
              I am a dedicated hard working team player  with experience and excellent knowledge on cutting edge up-to-date web development technologies React JS, Node JS, Express JS, Mongo DB seeking a web developer role in your company.I am willing to utilize my 1+ years of experience as MERN Stack web developer and excellent creative skills for your company achieve its goals
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Imran Hossain</p>
                        <p>: 20</p>
                        <p>: Bangladeshi </p>
                        <p>: English,Bangla </p>
                        <p>: Mirpur-12,Dhaka</p>
                        <p>: Freelance</p>
                    </div>
                </div>
             
                
                <a
     className="button"
     href="https://drive.google.com/file/d/1adv6pzRZHKe4Q06NCNMdaSSt2MlOZxiP/view?usp=share_link"
     download = "https://drive.google.com/file/d/1adv6pzRZHKe4Q06NCNMdaSSt2MlOZxiP/view?usp=share_link"
     
     >
          <PrimaryButton title={`Download CV`}></PrimaryButton>
      
  
  </a>
               
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
