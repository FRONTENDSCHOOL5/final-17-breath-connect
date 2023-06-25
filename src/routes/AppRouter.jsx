import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashPage from '../pages/SplashPage/SplashPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import ProfileSettingPage from '../pages/ProfileSettingPage/ProfileSettingPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import PostDetailPage from '../pages/PostPage/PostDetailPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ProfileEditPage from '../pages/ProfilePage/ProfileEdit/ProfileEditPage';
import FollowerListPage from '../pages/FollowListPage/FollowerListPage';
import FollowingListPage from '../pages/FollowListPage/FollowingListPage';
import UploadPage from '../pages/UploadPage/UploadPage';
import UploadMap from '../pages/UploadPage/UploadMap';
import SearchPage from '../pages/SearchPage/SearchPage';
import ChatListPage from '../pages/ChatPage/ChatListPage';
import ChatRoomPage from '../pages/ChatPage/ChatRoomPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/profile" element={<ProfileSettingPage />} />
        <Route path="/home" element={<FeedPage />} />
        {/* Post */}
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/post/upload" element={<UploadPage />} />
        <Route path="/post/upload/map" element={<UploadMap />} />
        {/* Profile */}
         <Route path="/profile/:id" element={<ProfilePage />} />
         <Route path='/profile/:id/editProfile' element={<ProfileEditPage />} />
        <Route path="/profile/:id/follower" element={<FollowerListPage />} />
        <Route path="/profile/:id/follow" element={<FollowingListPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/chat" element={<ChatListPage />} />
        <Route path="/chat/:id" element={<ChatRoomPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

