import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PATH } from './paths';

import TopBar from '../Components/Layout/TopBar';
import NavBar from '../Components/Layout/NavBar';

import HomePage from '../Pages/Home/HomePage';
import IntroPage from '../Pages/Intro/IntroPage';
import DocsPage from '../Pages/Docs/DocsPage';
import ContactPage from '../Pages/Contact/ContactPage';
import ErrorPage from '../Pages/Error/ErrorPage';


export const renderRouter = () => {
 
  return (
    <BrowserRouter>
    <TopBar />
      <NavBar />
      <Routes>
        <Route path={PATH.home} element={<HomePage />} />
        <Route path={PATH.intro.root} element={<IntroPage />} />
        <Route path={PATH.docs.root} element={<DocsPage />} />
        <Route path={PATH.contact.root} element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};


