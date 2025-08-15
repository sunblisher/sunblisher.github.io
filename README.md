# Hyosun Sunrise Portfolio

## 개발 서버 실행

### 로컬 개발
```bash
npm run dev
```

### 네트워크 접근 허용 (다른 컴퓨터에서 접근 가능)
```bash
npm run dev-network
```

## 네트워크 접근 방법

1. **서버 실행**: `npm run dev-network` 명령어로 서버를 실행합니다.

2. **IP 주소 확인**: 
   - Windows: `ipconfig` 명령어로 IP 주소 확인
   - Mac/Linux: `ifconfig` 또는 `ip addr` 명령어로 IP 주소 확인

3. **다른 컴퓨터에서 접근**:
   - 같은 네트워크 내의 다른 컴퓨터에서 브라우저를 열고
   - `http://[당신의IP주소]:8080` 으로 접근
   - 예: `http://192.168.1.100:8080`

## 주의사항

- 방화벽에서 8080 포트가 열려있는지 확인하세요
- 공용 네트워크에서는 보안에 주의하세요
- 개발 목적으로만 사용하세요

## 설치

```bash
npm install
```