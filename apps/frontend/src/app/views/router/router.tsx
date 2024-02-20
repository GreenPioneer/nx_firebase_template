import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AccountPage } from '../account/AccountsPage';
import { BlogsPage } from '../blogs/BlogsPage';
import { Home } from '../home/home';
import {About} from '../about/about';
import {Login} from '../login/Login';
import { Navigate } from "react-router-dom";
import IndividualBlogPage from '../blogs/IndividualBlogPage';
import AdminPage from '../admin/AdminPage';
import { ForgotPassword } from '../forgotPassword/ForgotPassword';
import {SignUp} from "../signup/SignUp"
import { Dashboard } from '../dashboard/Dashboard';
import { NamePage } from "../namePage/NamePage"

export default function Router() {

    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/blogs' element={<BlogsPage/>} />
        <Route path='/blogs/blog/:id' element={<IndividualBlogPage />} />
        <Route path='/account' element={<AccountPage/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/namepage" element={<NamePage />}/>
      </Routes>
    );
}