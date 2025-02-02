import React from 'react';
import styled from 'styled-components'
import { Overlay, OverlayText, ProjectBox, ProjectDescription, ProjectGrid, ProjectTitle, ProjectWrap, TagContainer, TitleContainer, Tag, Link } from 'components/Project';
import data from '../assets/top-projects.json'

const ProjectCard = () => {
  return (
    <ProjectGrid>
      {data.map((item) => (
        <Center>
          <ProjectWrap>
            <ProjectBox key={item.title}>
              <Link
                href={item.netlify}
                alt="project landingpage"
                target="_blank"
                rel="noopener noreferrer">
                <Overlay> <OverlayText>{item.overlay}</OverlayText></Overlay>
                <ProjectBackground src={item.image} alt="project poster" />
              </Link>
            </ProjectBox>
            <TitleContainer>
              <Link
                href={item.github}
                alt="project landingpage"
                target="_blank"
                rel="noopener noreferrer">
                <ProjectTitle>{item.title}</ProjectTitle>
                <ProjectDescription>{item.description}</ProjectDescription>
              </Link>
            </TitleContainer>
            <TagContainer>
              {item.tools.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagContainer>
          </ProjectWrap>
        </Center>
      ))}
    </ProjectGrid>
  )
};
export default ProjectCard;

const ProjectBackground = styled.img`
  width: 100%;
  height: 200px; 
  background: #002F33;
  display: flex;
  position: relative;
  border-radius: 20px;
  margin: 0 auto;
  top: -50%;
  @media (min-width: 900px) {
    width: 367px;
    height: 220px;
  }
`;

const Center = styled.div`
display: grid;
margin: 0 auto;
`;