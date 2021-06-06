import React from 'react';
import styled from 'styled-components';
import { projects } from '../../../../projetosDaGalera';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

const WrapperProfile = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

const ContentProfile = styled.div`
  display: flex;
  align-items: center;  
  width: 50%;

`;

const Rep = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;

  img {
    width: 20px;
    height: 21px;
  }
   
  a {
    text-decoration: none
  }

  span {
    color: #FB7B6B;
    margin-left: 5px;
    font-weight: 500;
  }
`;

export default function Profile() {
  return (
    <>
      {projects.map((project, index) => (
        <Box
          marginTop="10px"
          key={project.id}
        >
          <WrapperProfile>
            <ContentProfile>
              <img src={`${project.linkRepo}.png`} alt="Nicolas Cage" />
              <Box
                display="block"
                marginLeft="20px"
                marginTop="10px"
                marginBottom="10px"
              >
                <Text
                  variant="paragraph1"
                  tag="span"
                  color="main.color"
                  display="block"
                  fontWeight="500"
                >
                  {project.name}
                </Text>
                <Text
                  variant="paragraph1"
                  tag="span"
                  color="tertiary.light"
                  display="block"
                  style={{
                    height: '20px',
                  }}
                >
                  {project.name}
                </Text>
              </Box>
            </ContentProfile>
            <Rep>
              <Text
                as="a"
                target="_blank"
                href={project.linkRepo}
              >
                <img src="/images/github.svg" alt="Mascote Github" />
                <span>Github</span>
              </Text>
            </Rep>
          </WrapperProfile>
          {index === 0 && (
          <Box
            marginTop="50px"
            marginBottom="10px"
          >
            <Text
              variant="paragraph1"
              color="tertiary.light"
            >
              Projetos da galera
            </Text>
          </Box>
          )}
        </Box>
      ))}
    </>
  );
}
