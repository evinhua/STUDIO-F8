import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaVideo, FaPhotoVideo, FaPencilRuler, FaLaptopCode, FaMicrophone, FaLightbulb } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 8rem 2rem;
  background: #112240;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
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

const SectionSubtitle = styled(motion.p)`
  color: #8892b0;
  font-size: 1.2rem;
  margin-bottom: 4rem;
  max-width: 600px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border: 1px solid #233554;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: #64ffda;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
`;

const Services = () => {
  const services = [
    {
      icon: <FaVideo />,
      title: 'Video Production',
      description: 'Full-service video production from concept to final delivery. We handle everything from pre-production planning to post-production editing.'
    },
    {
      icon: <FaPhotoVideo />,
      title: 'Motion Graphics',
      description: 'Eye-catching motion graphics and animations that bring your brand to life and effectively communicate your message.'
    },
    {
      icon: <FaPencilRuler />,
      title: 'Creative Direction',
      description: 'Strategic creative guidance to ensure your visual content aligns with your brand identity and business objectives.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Interactive Media',
      description: 'Engaging interactive experiences that combine video, animation, and user interaction for immersive storytelling.'
    },
    {
      icon: <FaMicrophone />,
      title: 'Audio Production',
      description: 'Professional sound design, music composition, and voice-over services to enhance your visual content.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Concept Development',
      description: 'Innovative concept development and storyboarding to transform your ideas into compelling visual narratives.'
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We offer a comprehensive range of creative services to help your brand stand out in today's competitive market.
        </SectionSubtitle>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
