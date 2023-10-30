import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { useForm, useController } from 'react-hook-form';

const LoginForm = ({ handleLogin, message }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: 'breath_connect@test.com',
      password: 'bc12345',
    }
  });

  const emailController = useController({
    name: 'email',
    control,
    rules: { required: '이메일을 입력해주세요' }
  });

  const passwordController = useController({
    name: 'password',
    control,
    rules: { required: '비밀번호를 입력해주세요' }
  });

  const onSubmit = (user) => {
    handleLogin(user);
  };

  const isValid = () => {
    return emailController.field.value !== '' && passwordController.field.value !== '';
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="이메일"
        type="email"
        placeHolder="이메일 주소를 입력해주세요"
        errorMsg={errors.email?.message}
        required
        {...emailController.field}
      />
      <Input
        label="비밀번호"
        type="password"
        placeHolder="비밀번호를 입력해주세요"
        errorMsg={message}
        required
        {...passwordController.field}
          />
      <Button
        type="submit"
        size="L"
        text="로그인"
        isDisabled={!isValid()}
      />
    </form>
  );
};

export default LoginForm;
