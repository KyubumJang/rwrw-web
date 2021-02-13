# 끄적끄적 Web

React.js / TypeScript

## How to run

### env 설정

to be continued

### App 실행

- local, dev

```shell
yarn start
```

- production
  to be continued

## Basic rules

### package install

`yarn` 을 사용하여 install 하기 때문에 `npm install` 을 사용하는것을 **금지**한다

## Code Convention

### Dir 구조

```text
- src
|- components
|  # 도메인이나 역할 분류에 따라 디렉토리 생성
|  # 디렉토리는 lower Camel Case, 컴포넌트는 Upper Camel Case
|  # 컴포넌트명은 도메인명을 항상 포함한다
|- constants
|  # 공통 readonly 상수
|- pages
|  # route 구조에 따라 생성
|  # 하위 컴포넌트 이름은 Page라는 접미어를 붙인다
|- utils
|  # 각종 유틸 로직 (mappers, types 등등)'
|- styles
|  # style 관련된 내용(컴포넌트, 함수 포함)
|- App.tsx
|  # App.tsx는 Context provider로서만 사용하도록 한다. 로직이 되는 코드는 작성하지 않는다.
```

### 컴포넌트 내부 Wrapper 사용규칙

- Container

  - 컴포넌트 내부에서 Wrapper를 사용한다.

  ```tsx
  // Bad Case
  function BadCase(): JSX.Element {
    return (
      <div>
        <Wrapper></Wrapper>
      </div>
    );
  }
  // Good Case
  function GoodCase(): JSX.Element {
    return (
      <Wrapper>
        <SomeOtherWrapper></SomeOtherWrapper>
      </Wrapper>
    );
  }
  ```

  ### size 단위 규칙

  - 모든 size 단위는 rem만 사용한다.
    root(`GlobalStyle.ts`)에 `font-size: 10px`을 지정하여, 소수점 한자리를 당겨서 사용한다.
    가령, `width: 24px` 인 경우 다음과 같이 사용한다.

  ```css
  .circle {
    width: 2.4rem;
  }
  ```
