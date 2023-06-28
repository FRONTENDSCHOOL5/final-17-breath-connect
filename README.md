# <span id="top">🌬 들숨날숨 🌬</span>
![image](https://github.com/FRONTENDSCHOOL5/final-17-breath-connect/assets/80268199/2f93b8f1-59d7-4f90-8b6a-8bdf67682de3)


## 소개 및 개요

- 배포 URL : [🔗 들숨날숨](www.test.com)

- Test ID / PW : / 

<summary>목차</summary>

1. [서비스 소개](#app)
2. [팀 소개](#team)
3. [기술 및 개발 환경](#dev)
4. [프로젝트 구조](#tree)
5. [역할분담](#roles)
6. [개발일정](#schedule)
7. [컨벤션](#convention)
8. [협업 문화](#culture)
9. [이슈 관리](#issues)
10. [버그 관리](#bug)
</details>

<br/>


## <span id="app">서비스 소개</span>
### 함께 달리는 즐거움을 나눌 수 있는 공간, 들숨날숨 🌬
* 함께 달리는 즐거움을 나눌 수 있는 공간 🏃‍♀️🏃‍♂️<br>

* '들숨날숨'은 **함께 달리는 즐거움을 나눌 수 있는 SNS 플랫폼**입니다. 
* '들숨날숨'은 같은 동네 혹은 서로 다른 동네에서 새로운 사람들과 함께 달리거나 소식을 공유할 수 있습니다.
* 자유롭게 뛰는 날짜와 장소만 게시한다면 누구든지 함께 달릴 수 있습니다!
* 내가 달린 기록과 사람들을 이웃들에게 공유할 수 있습니다!

<br/>

## <span id="team">팀 소개</span>
### 위니드팀을 소개합니다!
> "`우리는` 개발자로 성장이 `필요하다`"라는 의미로<br/>
> 위니브라는 회사의 도움을 얻고 <br/>
> `함께` 프로젝트를 진행하면서 서로가 `필요한` 부분을 채워주기 위해 <br/>
> 다음과 같은 팀명을 짓게 되었습니다.

<br/>



|                                    **🐿 김용덕**                                    |                                    **💜 박연주**                                    |                                 **🌿 백수연**                                 |                                    **🐕 이양래**                                    |
| :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/yongdeok97" height=180 width=180> | <img src="https://avatars.githubusercontent.com/parkyeonjux" height=180 width=180> | <img src="https://avatars.githubusercontent.com/sypaik-dev" height=180 width=180> | <img src="https://avatars.githubusercontent.com/withLeche" height=180 width=180> |
| <a href="https://github.com/yongdeok97"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a><br/> | <a href="https://github.com/parkyeonjux"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a><br/> |           <a href="https://github.com/sypaik-dev"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a><br/> | <a href="https://github.com/withLeche"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a><br/> |
|<code>개발 리더</code> | <code>커뮤니케이션 리더</code> | <code>디자인 리더</code> | <code>팀 리더</code> |

#### <p align="right"><a href="#top">TOP👆🏼</a></p>


## <span id="dev">기술 및 개발 환경</span>
### 개발 환경
| 구분       | 설명                                                                                                                                                            |
|:----------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FrontEnd   |<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-CC6699?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-E33332?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> |
| BackEnd    | 제공된 API 사용                                                                                                                                                  |
| 협업 도구  |<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Trello-3776AB?style=for-the-badge&logo=Trello&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white"> |

<br/>

## <span id="tree">프로젝트 구조</span>
- public/favicon/ : 파비콘
- src/assets/ : 전역에서 사용하는 폰트, 스프라이트 이미지, 로고 이미지
- src/atoms/ : 전역 상태 관리를 위한 아톰 (UserAtom, LoginAtom) 
- src/components/ : 공통 컴포넌트와 Map 컴포트
- src/pages/ : 서비스에 사용되는 각 페이지
- src/routes/ : 페이지 라우팅
- src/styles/ : 전역 스타일 (layout, globalstyle, theme)
- src/utils/ : 유효성 검사를 위한  

```
🌬️ 들숨날숨
🌱public
 ┣ 🌿favicon.ico
 ┗ 🌿index.html
🌱src
 ┣ 🌿assets
 ┃ ┣ 🪴fonts
 ┃ ┣ 🪴images
 ┃ ┗ 🪴sprite
 ┣ 🌿atoms
 ┣ 🌿components
 ┃ ┣ 🪴common
 ┃ ┃ ┣ 🌳Alert
 ┃ ┃ ┣ 🌳Button
 ┃ ┃ ┣ 🌳Comment
 ┃ ┃ ┣ 🌳Input
 ┃ ┃ ┣ 🌳Loading
 ┃ ┃ ┣ 🌳Modal
 ┃ ┃ ┗ 🌳User
 ┃ ┃ ┃ ┣ 🌳Follow
 ┃ ┃ ┃ ┗ 🌳Search
 ┃ ┣ 🪴Footer
 ┃ ┣ 🪴Header
 ┃ ┗ 🪴Map
 ┣ 🌿hooks
 ┣ 🌿pages
 ┃ ┣ 🪴ChatPage
 ┃ ┣ 🪴FeedPage
 ┃ ┣ 🪴FollowListPage
 ┃ ┣ 🪴LoginPage
 ┃ ┣ 🪴NotFoundPage
 ┃ ┣ 🪴PostPage
 ┃ ┣ 🪴ProfilePage
 ┃ ┃ ┣ 🌳ProfileEdit
 ┃ ┣ 🪴ProfileSettingPage
 ┃ ┣ 🪴SearchPage
 ┃ ┣ 🪴SignupPage
 ┃ ┣ 🪴SnsLoginPage
 ┃ ┣ 🪴SplashPage
 ┃ ┗ 🪴UploadPage
 ┣ 🌿routes
 ┣ 🌿styles
 ┣ 🌿utils
 ┣ 📜App.js
 ┗ 📜index.js
```

#### <p align="right"><a href="#top">TOP👆🏼</a></p>

## <span id="roles">5. 역할 분담</span>
### 김용덕
- UI
  - 마이 프로필 페이지
  - 사용자 프로필 페이지
  - 홈 피드 페이지
  - 지도 상세 페이지
- 공통 컴포넌트
  - Button
  - Header
  - Footer
  - Map
- 기능 구현
  - 홈피드, 무한스크롤, 사용자, 마이 프로필, 지도 api를 이용한 path 그리기

### 박연주
- UI
  - 팔로잉 목록 페이지
  - 팔로워 목록 페이지
  - 채팅 페이지
  - 404 페이지
- 공통 컴포넌트
  - Follow
  - Search
- 기능 구현
  - 팔로우, 팔로잉 리스트, 채팅 리스트, 채팅 룸

### 백수연
- UI
  - Splash 페이지
  - 회원가입 페이지
  - 로그인 페이지
  - 프로필 수정 페이지
- 공통 컴포넌트
  - Input
  - Loading
- 기능 구현
  - 로그인, 회원가입, 프로필 설정, 프로필 수정, 참여하기, 참여하기 취소, 댓글 작성

### 이양래
- UI
  - 검색 페이지
  - 게시물 작성 페이지
  - 게시물 상세 페이지
- 공통 컴포넌트
  - Comment
  - Modal
  - Alert
- 기능 구현
  - 유저 검색, 게시물 업로드, 댓글 삭제, 이미지 유효성

## <span id="schedule">개발 일정</span>
🔥 2023.06.12 ~ 2023.06.27 <br />
![image](https://github.com/FRONTENDSCHOOL5/final-17-breath-connect/assets/80268199/22268f6b-cff5-4f61-8643-d0cad77ef7a6)


## <span id="convention">컨벤션</span>
### 깃 컨벤션

| Emoji | Code                          | 기능     | Description              |
| ----- | ----------------------------- | -------- | ------------------------ |
| ✨    | `:sparkles:`                  | Feat     | 새 기능                  |
| ♻️    | `:recycle:`                   | Refactor | 코드 리팩토링            |
| 📦    | `:wrench:`                    | Chore    | 리소스 수정/삭제         |
| 🐛    | `:bug:`                       | Fix      | 버그 수정                |
| 📝    | `:memo:`                      | Docs     | 문서 추가/수정           |
| 🎨    | `:lipstick:`                  | Style    | UI/스타일 파일 추가/수정 |
| 🎉    | `:tada:`                      | Init     | 프로젝트 시작 / Init     |
| ✅    | `:white_check_mark:`          | Test     | 테스트 추가/수정         |
| ⏪    | `:rewind:`                    | Rewind   | 변경 사항 되돌리기       |
| 🔀    | `:twisted_rightwards_arrows:` | Merge    | 브랜치 합병              |
| 🗃     | `:card_file_box:`             | DB       | 데이터베이스 관련 수정   |
| 💡    | `:bulb:`                      | Comment  | 주석 추가/수정           |
| 🚀    | `:rocket:`                    | Deploy   | 배포                     |

### 코드 컨벤션
- 작은 따옴표 사용 ``` '' ``` 사용
- 전체를 묶는 스타일 컴포넌트 명은 끝에 container 사용
- 이미지를 가져오는 컴포넌트 명은 파스칼 표기법 사용
- 일치 연산자 사용

<br/>

## <span id="culture">협업 문화</span>

### 💪 팀워크 강화
#### - Daily Scrum
* 일시: 평일 오전 9시 (15분 내외)
* 장소: [회의실] 프로젝트 17조 디스코드 (카메라On)
* 내용: 회고 및 작업 계획
* 대화방식: 정보 전달이 아닌 대화 주제가 가져오는 효과나 해결책에 토론


#### <p align="right"><a href="#top">TOP👆🏼</a></p>
<br/>


## <span id="issues">핵심 코드</span>

### API 모듈 Axios
``` 
import axios from 'axios';

const URL = 'https://api.mandarin.weniv.co.kr/';

/* 기본 인스턴스 */
export const instance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* 이미지 인스턴스 */
export const imgInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

/* auth 인스턴스 */
export const authInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

/* content 업로드 */
export const postContentUpload = async (token, post) => {
  const response = await authInstance.post(`/post/`, post, {
    headers: {
      Authorization: `B다


