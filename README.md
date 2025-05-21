# Viperon MCP Server

<img src="./docs/images/viperon_profile.png" alt="Viperon Profile" width="300" />

당신의 고민을 듣고 현명한 조언을 돌려주는 Viperon MCP 서버입니다. MCP 프로토콜을 기반으로 요청을 보내면, 메시지에 맞는 감정 태그, 명언, 그리고 상담 메시지를 반환합니다.

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

## MCP API 사용법 (JSON-RPC 2.0)

모든 호출은 POST http://localhost:3000/jsonrpc

- 헤더: Content-Type: application/json
- 바디: 아래와 같이 JSON-RPC 2.0 포맷을 사용

예시 요청/응답

### 감정 태그 추출 요청(context.analyze)

```bash
{
  "jsonrpc": "2.0",
  "method": "context.analyze",
  "params": { "userMessage": "집에 오는 길에 고양이를 만나서 인사했어" },
  "id": 1
}
```

### 감정 태그 추출 응답

```bash
{
  "jsonrpc": "2.0",
  "result": { "emotionTag": "행복" },
  "id": 1
}
```
