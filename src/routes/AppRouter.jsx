import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import FollowListPage from '../pages/FollowListPage/FollowListPage';
// import ChatPage from '../pages/ChatPage/ChatPage';
import Search from '../components/common/User/Search/Search';
import Follow from '../components/common/User/Follow/Follow';
export default function AppRouter() {
  return (
   <>
    <Search />
    <Follow />
   </> 
);   
}
