import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

const LoginForm = ({ handleLogin, initData, setInitData, message }) => {

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInitData({
      ...initData,
      [name]: value,
    });
  };

  const handleActivate = () => {
    return initData.email !== '' && initData.password !== '';
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        label="이메일"
        id="email"
        type="email"
        name="email"
        value={initData.email}
        onChange={handleInput}
        placeholder="이메일 주소를 입력해주세요"
        required
      />
      <Input
        label="비밀번호"
        id="password"
        type="password"
        name="password"
        value={initData.password}
        onChange={handleInput}
        placeholder="비밀번호를 입력해주세요"
        required
        errorMsg={message}
      />
      <Button
        type='submit'
        size={'L'}
        text={'로그인'}
        isDisabled={!handleActivate()}
      />
    </form>
  );
};

export default LoginForm;
