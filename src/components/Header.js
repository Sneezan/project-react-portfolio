import styled from 'styled-components';
import React from 'react';
import Cecilia from '../images/profileimg.jpg'
import GitHub from '../images/cat1.png'
import LInkedIn from '../images/link1.png'

const Header = () => {
  return (
    <>
      <Background>
        <IconsContainer>
          <a
            href="https://github.com/Sneezan"
            target="_blank"
            rel="noreferrer">
            <img
              src={GitHub}
              alt="link to Sneezan GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/ceciliafranlund/"
            target="_blank"
            rel="noreferrer">
            <img
              src={LInkedIn}
              alt="link to Cecilias Linked In" />
          </a>
        </IconsContainer>
        <Name>Software Engineer</Name>
        <Title>Cecilia Öhrn</Title>
      </Background>
      <a
        href="https://www.linkedin.com/in/ceciliafranlund/"
        target="_blank"
        rel="noreferrer">
        <ProfileImage src={Cecilia} alt="cecilia" link />
      </a>
    </>
  );
};
export default Header;

const Background = styled.header`
  background-color: #375bff;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1.5rem;
  position: absolute;
  top: 2.5rem;
  right: 4.5rem;
  z-index: 2;
  & img {
    height: auto;
    width: 55px;
    &:hover{
  transition: ease-out .3s;
  scale: 1.2;
}}
  @media (max-width: 1200px) {
    right: 3rem;
  }
  @media (max-width: 650px) {
    right: 2rem;
  }
`;

const Title = styled.h1`
    position: absolute;
    width: 480px;
    top: 35%;
    left: 10%;
    color: var(--warmWhite);
    font-size: 3rem;
    font-family: roboto;
    text-shadow: 0px 0px 1px white;

  @media (min-width: 900px) {
    font-size: 4.9rem;
    line-height: 3.9rem;
    left: 20%;
  } 
  
  @media (min-width: 2000px) {
    left: 27%;
  }

`;

const Name = styled.h3`
    font-weight: 700;
    position: absolute;
    top: 33%;
    left: 10%;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--warmWhite);
    text-shadow: 0px 0px 2px black;
    @media (min-width: 900px) {
    font-size: 1.5rem;
    line-height: 0;
    left: 20%;
  }    
  @media (min-width: 2000px) {
    left: 27%;
  }
`;

const ProfileImage = styled.img`
    position: absolute;
    width: 180px;
    margin: 50px;
    right: -20px;
    top: 230px;
    border-radius: 50%;
    border: 5px solid var(--mudSlide);

    @media (min-width: 770px) {
      right: 20px;
      &:hover {
      filter: blur(2px);
      border: 5px solid rgb(102, 255, 0);
    }
  }
  @media (min-width: 900px) {
      right: 10%;
      width: 230px;
  } 
   @media (min-width: 1200px) {
      right: 15%;
  }
  @media (min-width: 1600px) {
      right: 20%;
  }
 `;
