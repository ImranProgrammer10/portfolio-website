import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryButton from '../Components/PrimaryButton';
import Particle from './Particle';
 
 
 
 
 
 

function HomePage() {
   
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Imran Hossain</span></h1>
                <p style={{"fontSize":"70px"}}>
                    Full Stack Web Developer
                </p>
                <Link to="/contact">
                <PrimaryButton     sx={{ m: 3 }} title={'Get In Touch'} ></PrimaryButton>

                </Link>
               
                <div className="icons">
                    <a target="_blank" href="https://www.facebook.com/imran.mulla.18294?mibextid=ZbWKwL" className="icon i-facebook" rel="noreferrer">
                        <FacebookIcon />
                    </a>
                    <a target="_blank" href="https://github.com/ImranProgrammer10" className="icon i-github" rel="noreferrer">
                        <GithubIcon />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/imran-hossain-936595216" className="icon i-youtube" rel="noreferrer">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
       

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
