# HOW TO SETUP

### 실행 전 전 유의사항

`server/.example.env` 파일을 복사하여 `.env` 파일로 이름을 변경한 뒤,

```env
DATABASE_URL=<DB_URL>
CF_ID=<CF_ID>
CF_TOKEN=<CF_TOKEN>
```

각 환경변수를 세팅해준 후 밑의 프로세스를 실행하도록 한다.

또한 브랜드, 카테고리, 옵션같은 경우는 데이터베이스에 미리 세팅되어 있으며, 수정할 수 없음.

### Source Code

1. [레포](git@github.com:northfacegawd/product-crud.git) 를 클론한다.

```shell
$ git clone git@github.com:northfacegawd/product-crud.git
```

2. 디펜던시를 설치한다.

```shell
$ yarn
```

3. 로컬에 프로젝트를 실행한다.

```shell
$ yarn start
```

4. (선택) 스토리북 실행

```shell
$ yarn start storybook
```
