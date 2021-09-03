import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>
            <SocialMedia>
                <SocialLogo to="/">Sushi</SocialLogo>
                <SocialIcon>
                    <SocialIconLink href="https://www.facebook.com/profile.php?id=100010433581661" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="https://github.com/AldCls3322" target="_blank" aria-label="Github" rel="noopener noreferrer">
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="http://linkedin.com/in/aldo-celis-cordova-3933431b7" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcon>
            </SocialMedia>
        </Container>
    )
}

export default Footer

export const Container = styled.footer`
    width: 100vw;

    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-top: 1px solid rgba(255, 255, 255, 0.8);
    
    background-color: #0d0909;
`

export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    max-width: 1100px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px auto 0 auto;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    justify-self: start;
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  
    cursor: pointer;
`

export const SocialIcon = styled.div`
    width: 240px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`
