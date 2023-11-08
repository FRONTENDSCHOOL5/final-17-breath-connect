import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { useForm } from 'react-hook-form';
import { useFieldController } from '../../hook/useFieldController';

const LoginForm = ({ mutate, message }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: 'breath_connect@test.com',
      password: 'bc12345',
    }
  });

  const emailController = useFieldController('email', control, { required: '이메일을 입력해주세요' });
  const passwordController = useFieldController('password', control, { required: '비밀번호를 입력해주세요' });

  const onSubmit = (data) => {
    mutate(data);
  };

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
        errorMsg={errors.password?.message || message}
        required
        {...passwordController.field}
      />
      <Button
        type="submit"
        size="L"
        text="로그인"
        isDisabled={!emailController.field.value || !passwordController.field.value}
      />
    </form>
  );
};

export default LoginForm;
