# 각 파일 설명


## singup.js

**명령어**
```bash
npm run signup [아이디] [비밀번호]
```


만약 `npm run signup abcd fdfe4353` 를 쓸 경우 아래와 같은 코드가 실행

1. "abcd" 라는 아이디의 속성을 갖고 있는 객체가 `people.json` 에 있는지 검색.
2. 없을 경우 `{ id : "abcd", pw : "fdfe4353", memo : "" }`인 객체를 `people.json`에 추가
3. 있을 경우 "이미 존재하는 사용자입니다." `throw`

테스트 코드는 `npm run signup:test [아이디] [비밀번호]`를 한 뒤에 `dist` 폴더의 `people.json` 확인 바람.



## memo.js

**명령어**
```bash
npm run memo [아이디] [비밀번호] [메모]
```


만약 `npm run memo abcd fdfe4353 fjfjdifd` 를 쓸 경우 아래와 같은 코드가 실행

1. "abcd" 라는 아이디의 속성을 갖고 있는 객체가 `people.json` 에 있는지 검색.
1. 없을 경우 "해당 사용자는 등록되어있지 않습니다." 를 `throw`
1. 있다면 `pw` 속성이 "fdfe4353"과 일치하는지 체크
1. `pw` 속성이 서로 다르다면 "비밀번호가 다릅니다." 를 `throw`
1. 만약 위의 알고리즘이 모두 맞다면 찾은 객체의 `memo` 속성을 "fjfjdifd"로 바꾸고 파일 저장 

테스트 코드는 `npm run memo:test [아이디] [비밀번호] [메모]`를 한 뒤에 `dist` 폴더의 `people.json` 확인 바람.



## login.js

**명령어**
```bash
npm run login [아이디] [비밀번호]
```


만약 `npm run login abcd fdfe4353` 를 쓸 경우 아래와 같은 코드가 실행

1. "abcd" 라는 아이디의 속성을 갖고 있는 객체가 `people.json` 에 있는지 검색.
1. 없을 경우 "해당 사용자는 등록되어있지 않습니다." 를 `throw`
1. 있다면 `pw` 속성이 "fdfe4353"과 일치하는지 체크
1. `pw` 속성이 서로 다르다면 "비밀번호가 다릅니다." 를 `throw`
1. 만약 위의 알고리즘이 모두 맞다면 다음과 같이 출력 `"abcd"님의 메모 : [메모]`

테스트 코드는 `npm run login:test [아이디] [비밀번호]`를 한 뒤에 출력창 확인 바람.



## 추가팁

- JSDOC을 적극 활용할 것
- `@typedef`로 정의된 `iPeople`을 활용할 것