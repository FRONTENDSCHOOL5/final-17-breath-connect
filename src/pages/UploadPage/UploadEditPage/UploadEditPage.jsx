import React from 'react';
import { useLocation } from 'react-router-dom';
import UploadPage from '../UploadPage';

export default function UploadEditPage() {
  const location = useLocation();
  const data = location.state?.data;
  return <UploadPage editData={data} />;
}
