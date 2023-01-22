# 상품CRUD

## 개요

상품을 등록, 수정, 삭제, 가져올 수 있는 토이 프로젝트 입니다.

## 개발

### 개발 항목

- Storybook을 사용하여 CDD를 함.
- 클라이언트, 서버 둘 다 풀스택으로 개발.
- 상품 목록 페이지로 이동하여 상품 리스트를 확인할 수 있음.
- 상품을 클릭하면 모달이 뜨며, 모달에서 해당 상품의 정보를 변경 또는 삭제할 수 있음.
- 상품 등록 페이지로 이동하여 상품 업로드를 진행할 수 있음. 옵션, 브랜드, 카테고리는 서버에서 데이터를 받아오며, 이미지를 업로드 할 수 있음.
- 데이터의 변경, 또는 삭제가 일어날 시 최신 데이터를 유지하기 위해, 상품 리스트 api가 다시 호출됨.

### 기술 스택

| 속성                | 값                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| 클라이언트          | [React](https://reactjs.org/)                                                                     |
| 서버                | [NestJS](https://nestjs.com/)                                                                     |
| ORM                 | [Prisma](https://www.prisma.io/)                                                                  |
| DB                  | [Postgresql](https://www.postgresql.org/)                                                         |
| CloudService        | [Cloudflare](https://www.cloudflare.com/ko-kr/)                                                   |
| 패키지 매니저       | [Yarn](https://yarnpkg.com/)                                                                      |
| 언어                | [Typescript](https://www.typescriptlang.org/)                                                     |
| 상태관리 라이브러리 | [React Query](https://www.npmjs.com/package/react-query)                                          |
| 비동기 통신         | [Axios](https://axios-http.com/docs/intro)                                                        |
| 스타일              | [Semantic UI](https://react.semantic-ui.com/),[Styled Components](https://styled-components.com/) |
| 코드 퀄리티         | [eslint](https://eslint.org/), [prettier](https://prettier.io/)                                   |
| 코드 관리           | [git](https://git-scm.com/) & [github](https://www.github.com/)                                   |
| 테스팅              | [Storybook](https://storybook.js.org/)                                                            |

### 환경 세팅 및 실행

[해당 문서](./INSTALLATION.md) 를 참고한다.

### 컨벤션

[해당 문서](./CONVENTION.md) 를 참고한다.

## 담당자

<table>
    <tr>
      <td align="center">
        <a href="https://github.com/northfacegawd">
            <img
                src="https://avatars.githubusercontent.com/northfacegawd"
            width="200px;"
            />
            <br />
            <sub><b>이용준</b></sub>
        </a>
        <br />
        </td>
    </tr>
</table>
