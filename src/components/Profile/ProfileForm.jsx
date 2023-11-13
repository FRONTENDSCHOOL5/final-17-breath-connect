import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { useFieldController } from '../../hook/useFieldController';
import { useForm } from 'react-hook-form';
import { PATTERN, MESSAGE } from '../../constants/validation';

const ProfileForm = ({ accountname, isError, message, handleInputImage, userEmail, userPassword, signup }) => {

  const { control, getValues, setValue, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    defaultValues: {
      username: '',
      accountname: '',
      intro: '',
    }
  })

  const usernameController = useFieldController('username', control, {
    required: MESSAGE.USERNAME.REQUIRED,
    pattern: {
      value: PATTERN.USERNAME,
      message: MESSAGE.USERNAME.PATTERN
    }
  });

  const accountnameController = useFieldController('accountname', control, {
    required: MESSAGE.ACCOUNTNAME.REQUIRED,
    pattern: {
      value: PATTERN.ACCOUNTNAME,
      message: MESSAGE.ACCOUNTNAME.PATTERN
    },
    onBlur: () => {
      validation();
    }
  });

  const validation = () => {
    accountname(accountnameController.field.value);
  }

  const introController = useFieldController('intro', control, {});

    const handleImage = (e) => {
    const file = e.target.files[0];
    setValue('image', file);
    handleInputImage(file);
    };
  
  const onSubmit = (data) => {
    if(!errors.username?.message && !errors.accountname?.message && !message)
    signup(data, userEmail, userPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
        <Input
          label='사용자 이름'
          id='username'
          type='text'
          placeHolder='2~10자 이내여야 합니다.'
          isError={errors.username?.message}
          errorMsg={errors.username?.message}
          {...usernameController.field}
        />
        <Input
          label='계정 ID'
          id='accountname'
          type='text'
          placeHolder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          isError={errors.accountname?.message || isError}
          errorMsg={errors.accountname?.message || isError && message}
          successMsg={!isError && message}
          {...accountnameController.field}
        />
          <Input
          label='소개'
          placeHolder='자신에 대해 소개해 주세요!'
          id='intro'
          type='text'
          {...introController.field}
          />
      <Button type='submit' size={'L'} text={'들숨날숨 시작하기'} isDisabled = {!getValues('username') || !getValues('accountname')} />
    </form>
  )
}

export default ProfileForm;
