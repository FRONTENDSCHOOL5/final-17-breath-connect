import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { useForm } from 'react-hook-form';
import { useFieldController } from '../../hook/useFieldController';
import { PATTERN, MESSAGE } from '../../constants/validation';

const SignupForm = ({ onSuccess, mutate, isError, message }) => {

  const { control, getValues, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    }
  });


  const emailController = useFieldController('email', control, {
      required: MESSAGE.EMAIL.REQUIRED,
      pattern: {
        value: PATTERN.EMAIL,
        message: MESSAGE.EMAIL.PATTERN
    },
      onBlur: () => {
      validation();
    }
  });
  
  const passwordController = useFieldController('password', control, {
    required: MESSAGE.PASSWORD.REQUIRED,
    pattern: {
      value: PATTERN.PASSWORD,
      message: MESSAGE.PASSWORD.PATTERN
    },
  });

  const validation = () => {
    if (!errors.email?.message && emailController.field.value) {
      mutate(emailController.field.value);
    }
  }

  const onSubmit = (data) => {
    if (!errors.email && !errors.password && !isError) {
      onSuccess(data);
   }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='이메일'
        id='email'
        type='email'
        placeHolder='이메일 주소를 입력해주세요'
        isError={errors.email?.message || isError}
        errorMsg={errors.email?.message || isError && message}
        successMsg={!isError && message}
        {...emailController.field}
      />
      <Input
        label='비밀번호'
        id='password'
        type='password'
        placeHolder='비밀번호를 입력해주세요'
        isError={errors.password?.message}
        errorMsg={errors.password?.message}
        {...passwordController.field}
      />
      <Button
        type='submit'
        size='L'
        text='회원가입'
        isDisabled={!getValues('email') || !getValues('password')}
      />
    </form>
  );
};

export default SignupForm;
