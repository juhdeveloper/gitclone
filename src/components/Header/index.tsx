import React from 'react'

import {Container, GithubLogo, SearchForm} from './style'

export function Header(){
  return(
        <Container>
        <GithubLogo/>
        <SearchForm>
          <input placeholder='Insert User or Repository'/>
        </SearchForm>
        </Container>
  )
}