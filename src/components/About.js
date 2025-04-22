import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: #0a192f;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 3px;
    background: #64ffda;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div``;

const AboutParagraph = styled(motion.p)`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const AboutImage = styled(motion.div)`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid #64ffda;
    border-radius: 4px;
    z-index: 0;
  }
  
  img {
    position: relative;
    z-index: 1;
    border-radius: 4px;
    width: 100%;
    height: auto;
    filter: grayscale(100%) contrast(1.2);
    transition: all 0.3s ease;
    
    &:hover {
      filter: none;
    }
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 3rem;
  color: #64ffda;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: #8892b0;
  font-size: 1rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Studio F8
        </SectionTitle>
        
        <AboutContent>
          <AboutText>
            <AboutParagraph
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Founded in 2018, Studio F8 has quickly established itself as a leading creative 
              studio specializing in high-quality video production and motion graphics. Our team 
              of talented professionals combines technical expertise with artistic vision to 
              deliver exceptional results for our clients.
            </AboutParagraph>
            
            <AboutParagraph
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Studio F8, we believe that great storytelling is at the heart of effective 
              communication. Whether we're creating a corporate video, a commercial, or a digital 
              campaign, our focus is always on crafting compelling narratives that resonate with 
              audiences and achieve our clients' objectives.
            </AboutParagraph>
            
            <AboutParagraph
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Our state-of-the-art equipment and cutting-edge techniques allow us to push the 
              boundaries of what's possible in video production. From concept development to 
              final delivery, we maintain the highest standards of quality and creativity 
              throughout the entire production process.
            </AboutParagraph>
            
            <Stats>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <StatNumber>200+</StatNumber>
                <StatLabel>Projects Completed</StatLabel>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <StatNumber>50+</StatNumber>
                <StatLabel>Happy Clients</StatLabel>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <StatNumber>15</StatNumber>
                <StatLabel>Industry Awards</StatLabel>
              </StatItem>
            </Stats>
          </AboutText>
          
          <AboutImage
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Studio F8 Team" />
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
