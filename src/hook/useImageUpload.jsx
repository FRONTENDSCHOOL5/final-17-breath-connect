import { useState } from 'react';
import { useMutation } from 'react-query';
import { postUploadProfile } from '../api/auth';
import imageCompression from 'browser-image-compression';

const useImageUpload = () => {
  const [previewImage, setPreviewImage] = useState('');
  const [image, setImage] = useState('');

  const uploadImage = useMutation('uploadImage', postUploadProfile, {
    onSuccess: (res) => {
      console.log(res);
      setImage(process.env.REACT_APP_API_URL + res.filename);
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const allowedExtensions = ['jpg', 'gif', 'png', 'jpeg', 'bmp', 'tif', 'heic'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        };

        const compressedImage = await imageCompression(file, options);
        const compressedFile = new File([compressedImage], compressedImage.name, {
          type: compressedImage.type,
        });

        const imgData = new FormData();
        imgData.append('image', compressedFile);
        await uploadImage.mutate(imgData);

        const reader = new FileReader();
        reader.readAsDataURL(compressedFile);
        reader.onload = () => {
          setPreviewImage(reader.result);
        };
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('유효하지 않은 파일 형식입니다.');
    }
  };

  return { image, previewImage, handleImage };
};

export default useImageUpload;