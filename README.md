# 🌬들숨날숨 🌬
### <a href='https://github.com/FRONTENDSCHOOL5/WeNeed'>들숨날숨 바로가기 🏃🏻‍♂️🏃🏻‍♀️</a>
<details>
<summary>목차</summary>

1. [서비스 소개](#intro)
2. [프로젝트 기간](#period)
3. [멤버](#members)
4. [개발 환경](#dev)
5. [프로젝트 구조](#tree)
6. [컨벤션](#convention)
7. [협업 문화](#culture)
8. [이슈 관리](#issues)
9. [버그 관리](#bug)
10. [](#issues)
</details>

<br/>

## <span id="intro">1. 서비스 소개</span>
<img src="https://github.com/withLeche/sample/assets/106927728/9cf31c8d-8d7f-4e4c-b150-88619713e976"><br>
> 함께 달리는 즐거움을 나눌 수 있는 공간<br>
> 들숨날숨 from 멋사

- 같은 동네 혹은 서로 다른 동네에서 새로운 사람들과 함께 달리거나 소식을 공유하세요.<br>
- 자유롭게 뛰는 날짜와 장소만 게시한다면 누구든지 함께 달릴 수 있습니다!<br>
- 내가 달린 기록과 사람들을 이웃들에게 공유할 수 있습니다!

<br/>

## <span id="period">2. 프로젝트 개발 기간</span>

2023.06.12 ~ 2023.06.27

<br/>

## <span id="members">3. 멤버</span>
<img src="https://github.com/withLeche/sample/assets/106927728/6be14e7d-a3f9-4486-80c3-4be9ab3786aa">

### 위니드 WeNeed
> "`우리는` 개발자로 성장이 `필요하다`"라는 의미로<br/>
> 위니브라는 회사의 도움을 얻고 <br/>
> `함께` 프로젝트를 진행하면서 서로가 `필요한` 부분을 채워주기 위해 <br/>
> 다음과 같은 팀명을 짓게 되었습니다.

|                                    **🐿 김용덕**                                    |                                    **💜 박연주**                                    |                                 **🌿 백수연**                                 |                                    **🐕 이양래**                                    |
| :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/yongdeok97" height=180 width=180> | <img src="https://avatars.githubusercontent.com/parkyeonjux" height=180 width=180> | <img src="https://avatars.githubusercontent.com/sypaik-dev" height=180 width=180> | <img src="https://avatars.githubusercontent.com/withLeche" height=180 width=180> |
| <a href="https://github.com/yongdeok97"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a><br/> | <a href="https://github.com/parkyeonjux"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a><br/> |           <a href="https://github.com/sypaik-dev"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a><br/> | <a href="https://github.com/withLeche"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a><br/> |
|<code>개발 리더</code> | <code>커뮤니케이션 리더</code> | <code>디자인 리더</code> | <code>팀 리더</code> |

#### <p align="right"><a href="#top">TOP👆🏼</a></p>
<br/>

## <span id="dev">4. 개발 환경</span>
<table>
      <thead align="center">
        <tr>
          <th colspan="2" style="text-align:center;"><span style="font-size:16px;">프론트엔드</span></th>
          <th style="text-align:center;"><span style="font-size:16px">백엔드</span></th>
          <th colspan="2" style="text-align:center;"><span style="font-size:16px;">디자인</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center" style="text-align:center;">
            <a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579667701/noticon/basd2y5bygpkqjiixuqy.png" alt="React" height="50" /></a>
            <br>
            <code>React</code>
          </td>
          <td align="center" style="text-align:center; margin: 0 auto;">
            <a href="https://styled-components.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/styled-components.png" alt="Styled Components" height="50" /></a>
            <br>
            <code>styled-components</code>
          </td>
          <td align="center" style="text-align:center;">부트캠프에서 제공된<br>API 사용</td>
          </td>
          <td align="center" style="text-align:center; margin: 0 auto;">
            <a href="https://www.figma.com/" target="_blank"><img style="margin: 10px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640982247/noticon/tpvr26zp02angin4t0jv.png" alt="Styled Components" height="50" /></a>
            <br>
            <code>Figma</code>
          </td>
        </tr>
      </tbody>
</table>
<br/>

## <span id="tree">5. 프로젝트 구조</span>
- assets/ :
- atoms/ :
- components/ :
- hooks/ :
- pages/ :
- routes/ :
- styles/ :
- utils/ :
```
src
├── assets
│    ├── images
│    ├── sprite
├── atoms
├── components
│    ├── common
│    ├── Footer
│    ├── Header
│    ├── Map
├── hooks
├── pages
│    ├── ChatPage
│    ├── FeedPage
│    ├── FollowListPage
│    ├── LoginPage
│    ├── NotFoundPage
│    ├── PostPage
│    ├── ProfilePage
│    ├── ProfileSettingPage
│    ├── SearchPage
│    ├── SignupPage
│    ├── SnsLoginPage
│    ├── SplashPage
│    ├── UploadPage
├── routes
├── styles
├── utils
├── App.js
└── index.js
```
#### <p align="right"><a href="#top">TOP👆🏼</a></p>
<br/>

## <span id="convention">6. 컨벤션</span>
### 커밋
    1. 커밋 유형 지정
        - 커밋 유형은 영어로 작성, 첫 글자를 대문자
        - 커밋 유형
        - 🎨 Style : 코드의 구조 / 형태 개선
        - 🔥 Fire : 코드 / 파일 삭제
        - 🐛 Fix : 버그 수정
        - ✨ Feat : 새로운 기능 추가
        - 📝 Docs : 문서 추가 / 수정
        - ♻️ Refactor : 리팩토링
        - ✅ Test : 테스트 추가 / 수정
        - 🔨 Build : 개발 스크립트 추가 / 수정
        - 🎉 Init : 프로젝트 시작

    2. 커밋 메시지는 "유형: 제목 (#이슈번호)"로 구성

        git commit -m "Feat: 로그인 기능 구현 (#13)"

### 코드

<br/>

## <span id="culture">7. 협업 문화</span>

### 💪 팀워크 강화
#### - Daily Scrum

### 📌 업무 공유

### 🎯 목표 관리
#### <p align="right"><a href="#top">TOP👆🏼</a></p>
<br/>

## <span id="issues">8. 이슈 관리</span>

### 🪄 이슈 관리 프로세스
#### - 작업 전
#### - 이슈 해결 후 
<br/>

### 🕵 이슈 진행 상황 관리

<br/>

### 📆 작업 진행 상황 관리

<br/>

## <span id="bug">9. 버그 관리</span>
<br/>

### 🐛 버그 관리

#### - 버그 관리 프로세스


