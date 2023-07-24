import React, { useState } from 'react';
import GlovalSprite from '../../../assets/sprite/GlovalSprite';
import {
  Section,
  Upload,
  Label,
  Form,
  Input,
  Button,
} from './ChatCommentStyle';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <Section>
      <Upload name="" id="upload-profile" />
      <Label for="upload-profile">
        <GlovalSprite id={'img-btn'} size={36} />
      </Label>
      <Form>
        <Input value={comment} onChange={handleInputChange} />
        <Button className={comment ? 'active' : ''} isActive={comment}>
          전송
        </Button>
      </Form>
    </Section>
  );
};

export default CommentSection;
