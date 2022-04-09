import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Repo} from './pages/Repo'
import {Profile} from './pages/Profile'
import {Header} from './components/Header'
import GlobalStyles from './styles/GlobalStyles'

 function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes >
    <Route path="/" element={<Profile/>}/>
    <Route path="/:username" element={<Profile/>}/> 
    <Route path="/:username/:reponame" element={<Repo/>}/> 

      </Routes>
      <GlobalStyles/>
      </BrowserRouter>
    </div>
  );
}


export default App;
