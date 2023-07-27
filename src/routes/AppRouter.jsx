import React from 'react';

import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../atoms/StylesAtom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { darkColors } from "../styles/Theme";

import SplashPage from '../pages/SplashPage/SplashPage';
import LoginPage from '../pages/LoginPage/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/EmailJoinPage/EmailJoinPage';
import ProfileSettingPage from '../pages/SignupPage/ProfileSettingPage/ProfileSettingPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import PostDetailPage from '../pages/PostPage/PostDetailPage/PostDetailPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ProfileEditPage from '../pages/ProfilePage/ProfileEditPage/ProfileEditPage';
import FollowerListPage from '../pages/FollowListPage/FollowerListPage/FollowerListPage';
import FollowingListPage from '../pages/FollowListPage/FollowingListPage/FollowingListPage';
import UploadPage from '../pages/UploadPage/UploadPage';
import UploadMap from '../pages/UploadPage/UploadMap';
import SearchPage from '../pages/SearchPage/SearchPage';
import ChatListPage from '../pages/ChatPage/ChatListPage/ChatListPage';
import ChatRoomPage from '../pages/ChatPage/ChatRoomPage/ChatRoomPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRouter = () => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const selectedTheme = isDarkMode ? { colors: darkColors } : {};
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage theme={selectedTheme} />} />
        <Route path="/login" element={<LoginPage theme={selectedTheme} />} />
        <Route path="/signup" element={<SignupPage theme={selectedTheme} />} />
        <Route path="/signup/profile" element={<ProfileSettingPage theme={selectedTheme} />} />
        <Route path="/home" element={<FeedPage theme={selectedTheme} />} />
        {/* Post */}
        <Route path="/post" element={<PostPage theme={selectedTheme} />} />
        <Route path="/post/:id" element={<PostDetailPage theme={selectedTheme} />} />
        <Route path="/post/upload" element={<UploadPage theme={selectedTheme} />} />
        <Route path="/post/upload/map" element={<UploadMap theme={selectedTheme} />} />
        {/* Profile */}
         <Route path="/profile/:id" element={<ProfilePage theme={selectedTheme} />} />
         <Route path='/profile/:id/editProfile' element={<ProfileEditPage theme={selectedTheme} />} />
        <Route path="/profile/:id/follower" element={<FollowerListPage theme={selectedTheme} />} />
        <Route path="/profile/:id/follow" element={<FollowingListPage theme={selectedTheme} />} />
        <Route path="/search" element={<SearchPage theme={selectedTheme} />} />
        <Route path="/chat" element={<ChatListPage theme={selectedTheme} />} />
        <Route path="/chat/:id" element={<ChatRoomPage theme={selectedTheme} />} />
        <Route path="*" element={<NotFoundPage theme={selectedTheme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

