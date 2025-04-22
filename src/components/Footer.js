import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaVimeo } from 'react-icons/fa';

const FooterSection = styled.footer`
  padding: 4rem 2rem;
  background: #0a192f;
  border-top: 1px solid #233554;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterLogo = styled(motion.div)`
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const FooterDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: #8892b0;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: #8892b0;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #64ffda;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #8892b0;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #233554;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <div>
            <FooterLogo
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Studio F8
            </FooterLogo>
            <FooterDescription>
              We are a creative studio specializing in video production, motion graphics, 
              and digital content creation. Our mission is to help brands tell their stories 
              through compelling visual experiences.
            </FooterDescription>
            <SocialLinks>
              <SocialLink 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <FaTwitter />
              </SocialLink>
              <SocialLink 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink 
                href="https://youtube.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <FaYoutube />
              </SocialLink>
              <SocialLink 
                href="https://vimeo.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <FaVimeo />
              </SocialLink>
            </SocialLinks>
          </div>
          
          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#about">About Us</a></FooterLink>
              <FooterLink><a href="#services">Services</a></FooterLink>
              <FooterLink><a href="#portfolio">Portfolio</a></FooterLink>
              <FooterLink><a href="#contact">Contact</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Services</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#services">Video Production</a></FooterLink>
              <FooterLink><a href="#services">Motion Graphics</a></FooterLink>
              <FooterLink><a href="#services">Creative Direction</a></FooterLink>
              <FooterLink><a href="#services">Interactive Media</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Contact</ColumnTitle>
            <FooterLinks>
              <FooterLink>123 Creative Avenue</FooterLink>
              <FooterLink>San Francisco, CA 94103</FooterLink>
              <FooterLink>(555) 123-4567</FooterLink>
              <FooterLink>info@studiof8.com</FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Studio F8. All rights reserved.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
