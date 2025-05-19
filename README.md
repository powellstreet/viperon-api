# Viperon API

<img src="./docs/images/viperon_profile.png" alt="Viperon Profile" width="300" />

당신의 고민을 듣고 현명한 조언을 돌려주는 Viperon 의 API 서버입니다.

## Getting Started

이 프로젝트를 로컬에서 실행하려면, 다음 스텝을 따라주세요.

### 1. Clone the repository

레포지토리를 로컬에 클론하세요.

```bash
git clone https://github.com/powellstreet/viperon-api
```

### 2. Install Dependencies

프로젝트 디렉토리로 이동한 뒤

```
cd viperon-api
```

의존성을 설치하세요.

```bash
$ yarn install
```

### 3. 환경변수 설정

프로젝트 최상단에 `.env` 파일을 생성하고 필요한 환경변수 값을 세팅하세요.

### 4. 애플리케이션 실행

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## API Documentation

API 문서는 `Swagger` 를 통해서 확인하실 수 있습니다. 서버가 켜진 후, 다음 엔드포인트를 통해서 API 문서에 접근할 수 있습니다.

```bash
http://localhost:3000/api
```
