import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const PortfolioSection = styled.section`
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

const FilterContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled(motion.button)`
  background: transparent;
  border: 1px solid #64ffda;
  color: #64ffda;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
  
  &.active {
    background: rgba(100, 255, 218, 0.2);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 250px;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
  
  ${ProjectCard}:hover ${ProjectImage} {
    transform: scale(1.1);
  }
`;

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ProjectCategory = styled.p`
  color: #64ffda;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const PlayButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.2);
  border: 2px solid #64ffda;
  color: #64ffda;
  font-size: 1.5rem;
`;

const VideoModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 1000px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: #ccd6f6;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'Brand Campaign',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ' // Placeholder YouTube ID
    },
    {
      id: 2,
      title: 'Product Launch',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ' // Placeholder YouTube ID
    },
    {
      id: 3,
      title: 'Corporate Overview',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ' // Placeholder YouTube ID
    },
    {
      id: 4,
      title: 'Motion Graphics Reel',
      category: 'animation',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ' // Placeholder YouTube ID
    },
    {
      id: 5,
      title: 'Documentary Short',
      category: 'documentary',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ' // Placeholder YouTube ID
    },
    {
      id: 6,
      title: 'Event Highlights',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ' // Placeholder YouTube ID
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const openVideo = (videoId) => {
    setSelectedVideo(videoId);
    document.body.style.overflow = 'hidden';
  };
  
  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <PortfolioSection id="portfolio">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Portfolio
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore our latest projects and see how we bring creative visions to life.
        </SectionSubtitle>
        
        <FilterContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FilterButton 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </FilterButton>
          <FilterButton 
            className={filter === 'commercial' ? 'active' : ''}
            onClick={() => setFilter('commercial')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commercial
          </FilterButton>
          <FilterButton 
            className={filter === 'corporate' ? 'active' : ''}
            onClick={() => setFilter('corporate')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Corporate
          </FilterButton>
          <FilterButton 
            className={filter === 'animation' ? 'active' : ''}
            onClick={() => setFilter('animation')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Animation
          </FilterButton>
          <FilterButton 
            className={filter === 'documentary' ? 'active' : ''}
            onClick={() => setFilter('documentary')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Documentary
          </FilterButton>
        </FilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => openVideo(project.videoId)}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectOverlay>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectCategory>{project.category}</ProjectCategory>
                <PlayButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaPlay />
                </PlayButton>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
      
      {selectedVideo && (
        <VideoModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <VideoContainer>
            <CloseButton onClick={closeVideo}>×</CloseButton>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        </VideoModal>
      )}
    </PortfolioSection>
  );
};

export default Portfolio;
