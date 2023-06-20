import React, { useState } from 'react';
import styled from 'styled-components';
import GlovalSprite from '../../../assets/sprite/GlovalSprite';


const CommentSection = () => {
  const [comment, setComment] = useState('');
  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <WrapComment>
      <UploadProfileInput name="" id="upload-profile" />
      <UploadProfileLabel for="upload-profile">
        <GlovalSprite id={'img-btn'} size={36} />
      </UploadProfileLabel>
      <CommentForm>
        <CommentInput value={comment} onChange={handleInputChange} />
        <SendButton className={comment ? 'active' : ''} isActive={comment}>전송</SendButton>
      </CommentForm>
    </WrapComment>
  );
};

export default CommentSection;

const WrapComment = styled.section`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  height: 6.1rem; 
  background-color: ${({ theme }) => theme.colors.whiteText};
  padding: 1rem;
  width: 100%;
  align-items: center;
  border-top: ${({ theme }) => `0.1rem solid ${theme.colors.borderColor}`};
`;

const UploadProfileInput = styled.input.attrs({ type: 'file', className: 'txt-hide' })`
  margin-left: 1.6rem;
  width: 4.2rem;
  height: 4.2rem;
  display: none;
`;

const UploadProfileLabel = styled.label`
  width: 4.2rem;
  height: 4.2rem;
  padding: 0.5rem;
`;
  
const CommentForm = styled.form.attrs({ className: 'form-comment' })`
  display: flex;
  width: inherit;
  align-items: center;
  justify-content: space-between;
`;

const CommentInput = styled.input.attrs({ type: 'text', placeholder: '메시지 입력하기', cols: '40', rows: '5', className: 'input-comment' })`
  background-color: ${({ theme }) => theme.colors.whiteText};
  margin-left: 1.8rem;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  font-size: ${({theme}) => theme.fontSize.medium};
  `;

const SendButton = styled.button.attrs({ className: 'btn-send' })`
  width: 4rem;
  font-size: 1.4rem;
  color: ${({ isActive }) => (isActive ? '#6521d3' : '#C4C4C4')};
`;