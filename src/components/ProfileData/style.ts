import styled, { css } from 'styled-components'
import {RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailAddLine, RiLinksLine } from 'react-icons/ri'




export const Container = styled.div`
display: flex ;
list-style: none;
`;

export const Flex = styled.div``;

export const Avatar = styled.img`
  position: relative;
  border-radius: 50%;
  max-width: 10rem;
  max-height: 10rem;
  margin:0.5rem;
  border: 0.5px black solid;

`;

export const Row = styled.div``;

export const iconCSS = css`
  width:1rem ;
  height: 1rem;
   fill: var(--icon);
  flex-shrink: 0 ;
`;

export const Column = styled.div`
  display:  flex;
  flex-direction:column ;
`;

export const PeopleIcon = styled(RiGroupLine)`
${iconCSS}`;

export const CompanyIcon = styled(RiBuilding4Line)`
${iconCSS}`;

export const LocationIcon = styled(RiMapPin2Line)`
${iconCSS}`;

export const EmailIcon = styled(RiMailAddLine)`
${iconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
${iconCSS}
`;


