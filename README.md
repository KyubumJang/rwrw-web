# 끄적끄적 Web
React.js / TypeScript

## How to run
### env 설정
to be continued

### App 실행
* local, dev
```shell
yarn start
```
* production
to be continued

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
    )
  }
  // Good Case
  function GoodCase(): JSX.Element {
    return (
      <Wrapper>
        <SomeOtherWrapper></SomeOtherWrapper>
      </Wrapper>
    )
  }
  ```