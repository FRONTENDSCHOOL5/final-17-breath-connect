
import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { useForm } from 'react-hook-form';
import { useFieldController } from '../../hook/useFieldController';
import regexPattern from '../../constants/regexPattern';

const SignupForm = ({ onSuccess, mutate, isError, message }) => {

  const { control, getValues, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const emailRegex = regexPattern.email;
  const passwordRegex = regexPattern.password;

  const emailController = useFieldController('email', control, {
      required: '이메일을 입력해주세요',
      pattern: {
        value: emailRegex,
        message: '이메일의 형식이 올바르지 않습니다 😥'
    },
      onBlur: () => {
      validation();
    }
  });
  
  const passwordController = useFieldController('password', control, {
    required: '비밀번호를 입력해주세요',
    pattern: {
      value: passwordRegex,
      message: '영문+숫자+특수기호 조합으로 6자리 이상 입력해주세요'
    },
  });

  const validation = () => {
    const emailFieldState = emailController.fieldState;
    const emailError = emailFieldState.error;

    console.log(emailError, '이메일 에러임');

    if (!errors.email?.message && !emailError) {
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
        isError={isError}
        errorMsg={errors.email?.message || isError && message}
        successMsg={!isError && message}
        {...emailController.field}
      />
      <Input
        label='비밀번호'
        id='password'
        type='password'
        placeHolder='비밀번호를 입력해주세요'
        errorMsg={errors.password?.message}
        {...passwordController.field}
      />
      <Button
        type='submit'
        size='L'
        text='회원가입'
        isDisabled={!getValues('email') || !getValues('password') || !isValid}
      />
    </form>
  );
};

export default SignupForm;
