import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #64ffda;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  margin-left: 2rem;
  color: #ccd6f6;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  
  &:hover {
    color: #64ffda;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(10, 25, 47, 0.95);
    z-index: 99;
    padding: 2rem;
  }
`;

const MobileNavLink = styled(motion.a)`
  margin: 1rem 0;
  color: #ccd6f6;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  
  &:hover {
    color: #64ffda;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' : 'none',
        }}
      >
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Studio F8
        </Logo>
        
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
        >
          <MobileNavLink 
            href="#about"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
          >
            About
          </MobileNavLink>
          <MobileNavLink 
            href="#services"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
          >
            Services
          </MobileNavLink>
          <MobileNavLink 
            href="#portfolio"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
          >
            Portfolio
          </MobileNavLink>
          <MobileNavLink 
            href="#contact"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </MobileNavLink>
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar;
