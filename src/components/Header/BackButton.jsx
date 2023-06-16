import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlovalSprite from '../../assets/sprite/GlovalSprite';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack}>
      <GlovalSprite id={'icon-arrow-left'} color={'white'} />
    </button>
  );
};
export default BackButton;
