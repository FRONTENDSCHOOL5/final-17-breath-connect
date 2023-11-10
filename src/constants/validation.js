export const PATTERN = {
  EMAIL: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zAZ0-9-.]+$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/,
  USERNAME: /^[a-zA-Z0-9]{2,10}$/,
  ACCOUNTNAME: /^[a-zA-Z0-9._]+$/
};

export const MESSAGE = {
  EMAIL: {
    REQUIRED: '이메일을 입력해주세요',
    PATTERN: '이메일의 형식이 올바르지 않습니다 😥'
  },
  PASSWORD: {
    REQUIRED: '비밀번호를 입력해주세요',
    PATTERN: '영문 + 숫자 + 특수기호 조합으로 6자리 이상 입력해주세요'
  },
  USERNAME: {
    REQUIRED: '사용자 이름을 입력해주세요',
    PATTERN: '영문 2 ~ 10자 이내로 입력해주세요'
  },
  ACCOUNTNAME: {
    REQUIRED: '계정 ID를 입력해주세요',
    PATTERN: '영문, 숫자, 특수문자 ., _ 만 입력해주세요'
  }
}
