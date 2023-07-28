import React from 'react';
import UploadPage from '../UploadPage';
import { useLocation } from 'react-router-dom';

export default function UploadEditPage() {
  const location = useLocation();
  const data = location.state?.data;

  return <UploadPage editData={data} />;
}
