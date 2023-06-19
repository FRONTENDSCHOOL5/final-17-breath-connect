import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashPage from '../pages/SplashPage/SplashPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import ProfileSettingPage from '../pages/ProfileSettingPage/ProfileSettingPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PostPage from '../pages/PostPage/PostPage';
import UploadPage from '../pages/UploadPage/UploadPage';
import UploadMap from '../pages/UploadPage/UploadMap';
import SearchPage from '../pages/SearchPage/SearchPage';
import ChatListPage from '../pages/ChatPage/ChatListPage';
import ChatRoomPage from '../pages/ChatPage/ChatRoomPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import FollowListPage from '../pages/FollowListPage/FollowListPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/profile" element={<ProfileSettingPage />} />
        <Route path="/home" element={<FeedPage />} />
        <Route path="/profile/:account" element={<ProfilePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/upload" element={<UploadPage />} />
        <Route path="/post/upload/map" element={<UploadMap />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/chat" element={<ChatListPage />} />
        <Route path="/chat/:account" element={<ChatRoomPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/follow" element={<FollowListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

