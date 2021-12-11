import React from 'react';
import {Route, Routes} from 'react-router-dom';

import MainNavigation from '../components/layout/MainNavigation';

import ProjectsPage  from './Projects';
import CompaniesPage from './Companies';
import ProjectPage from './Project';
import PermitPage from './Permit';
import PublicationsPage from './Publications';
import InstallationsPage from './Installations';
import RicPage from './Ric';
import { NotFound } from './NotFoundError';


export default () => {
    
    return (
        <>
            <MainNavigation/>
            <Routes>
                <Route path='/' element={<div>Home</div>} />
                <Route path='/Home' element={<div>Home</div>} />
                <Route path='/Projects' element={<ProjectsPage />} />
                <Route path='/Companies' element={<CompaniesPage />}/>
                <Route path='/Projects/:id'element={<ProjectPage/>}/>
                <Route path='/Permits/:id'element={<PermitPage/>}/>
                <Route path ="/Publications" element={<PublicationsPage/>}/>
                <Route path ="/Installations" element={<InstallationsPage/>}/>
                <Route path ="/RegisterInstallationsClassees" element={<RicPage/>}/>
                <Route path ="*" element={<NotFound/>}/>
            </Routes> 
            
        </>
    )
}