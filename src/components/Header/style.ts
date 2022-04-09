import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
display: flex ;
align-items: center ;
padding: 0.7rem 1rem ;
background-color: var(--header);
`;
export const GithubLogo = styled(FaGithub)`
fill: var(--logo);
flex-shrink:0 ;
width: 2rem ;
height: 2rem ;
`;

export const SearchForm = styled.form`
 padding-left:1rem;
 width: 100%;

 input{
   background: var(--search);
   outline:0;
   color: var(--primary);
   border-radius: 0.25rem ;
   padding: 0.4rem 0.8rem;
   width: 100%;

   &:focus{
   width:20rem ;

  }
  transition: width .2s ease-out, color .2s ease-out;
 }

`;