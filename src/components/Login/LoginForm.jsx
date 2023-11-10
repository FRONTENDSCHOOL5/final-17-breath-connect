import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { useForm } from 'react-hook-form';
import { useFieldController } from '../../hook/useFieldController';
import { MESSAGE } from '../../constants/validation';

const LoginForm = ({ mutate, isError, message }) => {
  const { control, handleSubmit, getValues, formState: { errors } } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: 'breath_connect@test.com',
      password: 'bc12345',
    }
  });

  const emailController = useFieldController('email', control, {
    required: MESSAGE.EMAIL.REQUIRED
  });
  const passwordController = useFieldController('password', control, {
    required: MESSAGE.PASSWORD.REQUIRED
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='이메일'
        id='email'
        type='email'
        placeHolder='이메일 주소를 입력해주세요'
        isError={errors.email?.message}
        errorMsg={errors.email?.message}
        {...emailController.field}
      />
      <Input
        label='비밀번호'
        id='password'
        type='password'
        placeHolder='비밀번호를 입력해주세요'
        isError={errors.password?.message || isError}
        errorMsg={errors.password?.message || isError && message}
        {...passwordController.field}
      />
      <Button
        type='submit'
        size='L'
        text='로그인'
        isDisabled={!getValues('email') || !getValues('password')}
      />
    </form>
  );
};

export default LoginForm;
