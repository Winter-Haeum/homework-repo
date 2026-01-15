# 공개 API 응답 분석 과제

<br>

## 1. 공개 API URL 직접 접속

사용한 API

```
https://jsonplaceholder.typicode.com/posts/1
```

브라우저 주소창에 위 URL을 입력하면 JSON 데이터가 그대로 출력된다.

<br>

### JSON 데이터

```json
{
  "id": 1,
  "title": "...",
  "body": "...",
  "userId": 1
}
```

### 구조 분석

- 전체 타입 : Object(객체)
- 형식 : key-value(키-값) 쌍으로 구성됨

| 필드명 | 의미 |
|--------|------|
| id | 게시글 고유 번호 |
| title | 게시글 제목 |
| body | 게시글 내용 |
| userId | 작성자 고유 번호 |

<br>

## 3. Request vs Response 차이

### Request

- 의미: 클라이언트(브라우저)가 서버에 데이터를 요청하는 것을 말한다.

- 기본 예시:
  - Method: GET
  - URL: /posts/1

### Response 

- 의미: 서버가 요청을 처리한 뒤 결과를 돌려주는 것을 말한다.

- 기본 예시:
  - Status Code: 200
  - Body: JSON 데이터

<br>

### 실제 동작 흐름 예시 (이번 과제 기준)

🔹 사용자가 브라우저에서 아래 주소에 접속한다.

https://jsonplaceholder.typicode.com/posts/1


→ “1번 게시글 데이터를 주세요” (**Request**)

- Method : GET
- URL: /posts/1  

🔹 서버가 요청을 처리한 뒤 데이터를 돌려준다.

→ 게시글 JSON 데이터 반환 (**Response**)

- Status Code : 200 
- Body : JSON 데이터

<br>

## 4. API 필요 이유 및 보안 주의사항

### API가 필요한 이유

- 서버에 저장된 데이터를 화면에서 사용하기 위해서이다.
- 게시글, 사용자 정보 등 동적 데이터를 처리하기 위해이다.

### 보안 주의사항

- API Key는 비밀번호이므로 코드에 직접 작성하지 않는다.
- GitHub에 API Key가 포함된 코드를 업로드하지 않는다.

