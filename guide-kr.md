# react-pwa-guide-kit

React PWA Guide Kit 는 React 와 Webpack 을 사용하여 PWA(프로그레시브웹앱) 을 만드는 방법을 소개한다. 기본적인 앱 구조에서 퍼포먼스 튜닝 그리고 프로덕션 레디 버전의 앱을 만드는 방법까지 커버하고 있으며 유투브 영상[1]과 깃허브의 프로젝트[2]를 참고한다. 더 자세한 목차는 아래를 참고한다.

1. create-react-app, 기본 React 앱을 구현하는 방법

- yarn 을 통해서 프로젝트를 초기화 한 후, webpack 과 babel 로 프로젝트 빌드/테스트를 구성법
- material-ui 를 사용해서 App Shell Architechture 를 구현법
- 설치형 웹앱을 위한  Web Manifest 를 추가하는 방법을 알아법
- Webpack 플러그인을 사용해서 Service Worker 를 추가하는 방법
- React Routing (react-route-dom, v4) 를 사용해서 앱의 라우팅을 구성법

2. Firebase hosting, database 그리고 notification, PWA  앱에서 Firebase 사용하는 방법

- Firebase 앱을 초기화화고 hosting 으로 deploy 하는 방법
- Freibase realtime database 에서 데이터를 가져오고 추가하는 방법
- FCM (Firebase Cloud Messaging) 을 사용하여 푸쉬메세지를 받는 방법

3. React 앱 성능 개선

PRPL 패턴을 사용해서 초기 중요 페이지의 다운로드, 실행 속도를 최적화하고 이후 필요한 파일을 프리캐쉬하는 방법과 단일 파일의 메가 번들 파일 사이즈 줄이는 방법을 알아본다

- 메인 디펜던시인 vendor 파일을 분리해서 패럴다운로드를 구현하는 방법
- Route-based Code-splitting 와 Lazy importing 하는 방법
- Livecode-importing(Tree shaking, dead-code elimination) 을 위한 Webpack 설정 방법
- 차일드 뷰 컴포넌트에서 공통적으로 사용하는 common 파일을 분리하는 방법
- 초기 라우팅에 사용되는 크리티컬 리소스를 바로 패치할 수 있는 preload 방법과 이후 사용이 예상되는 파일을 미리 패치할 수 있도록 도와주는 prefetch 방법
- 어플리케이션 레벨에서 사용되는 초기 구동 시간 줄이는 방법
- Lighthouse 를 이용해서 어플리케이션을 검사하는 방법

4. 프로덕션 레디 버전을 위한 빌드

- Source Map 을 추가해서 에러시에 디버깅 하는 방법
- Chunkhash 를 사용해서 프로덕션에서 버전을 유지 관리하는 방법과 또한 manifest 를 이용하여 불필요한 업데이트를 막는 방법
- webpack.optimize.UglifyJsPlugin / LoaderOptionsPlugin / DefinePlugin 을 수동을 사용하는 방법

# License

MIT @ CodeBusiking

[2]: https://github.com/codebusking/react-pwa-guide-kit
