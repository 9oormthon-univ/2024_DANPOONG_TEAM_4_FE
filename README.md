# 2024_DANPOON_TEAM_4_FE

👣 소확행, 소상공인과 확실한 동행 FE

## 🎯 Git Convention

- 🎉 **Start:** Start New Project [:tada]
- ✨ **Feat:** 새로운 기능을 추가 [:sparkles]
- 🐛 **Fix:** 버그 수정 [:bug]
- 🎨 **Design:** CSS 등 사용자 UI 디자인 변경 [:art]
- ♻️ **Refactor:** 코드 리팩토링 [:recycle]
- 🔧 **Settings:** Changing configuration files [:wrench]
- 🗃️ **Comment:** 필요한 주석 추가 및 변경 [:card_file_box]
- ➕ **Dependency/Plugin:** Add a dependency/plugin [:heavy_plus_sign]
- 📝 **Docs:** 문서 수정 [:memo]
- 🔀 **Merge:** Merge branches [:twisted_rightwards_arrows:]
- 🚀 **Deploy:** Deploying stuff [:rocket]
- 🚚 **Rename:** 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 [:truck]
- 🔥 **Remove:** 파일을 삭제하는 작업만 수행한 경우 [:fire]
- ⏪️ **Revert:** 전 버전으로 롤백 [:rewind]

## 🪴 Branch Convention (GitHub Flow)

- `main`: 배포 가능한 브랜치, 항상 배포 가능한 상태를 유지
- `feature/{description}`: 새로운 기능을 개발하는 브랜치
  - 예: `feature/add-login-page`

### Flow

**예시**:

```bash
# 새로운 기능 개발
git checkout -b feature/add-login-page

# 작업 완료 후, main 브랜치로 병합
git checkout main
git pull origin main
git add .
gitmoji -c "~~~"
git merge feature/add-login-page
git push origin main
```

1. `main` 브랜치에서 새로운 브랜치를 생성합니다.
2. 작업을 완료하고, 아래에 설명된 커밋 메시지 규칙에 맞게 커밋합니다.<br />
   (자동화: 커밋 시 `husky`가 자동으로 실행되어 `npx lint-staged`를 통해 코드 스타일을 검사하고 포맷을 적용합니다.)
3. **Pull Request(PR)** 를 생성하고 팀원들의 리뷰를 요청합니다.(이건 넘어가도 될 듯 합니다.)
4. 리뷰가 완료되면 `main` 브랜치로 병합합니다.
5. 병합 후, 필요시 배포 작업을 진행합니다.

<br />

## 🗂 File Convention

`.prettierrc`(다른 필요한 조건 있으시면 말씀해주시고 추가하시면 됩니다.)

```
{
  "singleQuote": true, // 문자열을 작은따옴표로 표시합니다. (예: "Hello" 대신 'Hello')
  "jsxSingleQuote": true, // JSX에서도 작은따옴표를 사용합니다. (예: <div className='example'>)
  "semi": true, // 명령문 끝에 세미콜론을 자동으로 추가합니다.
  "tabWidth": 2, // 탭 너비를 2칸으로 설정합니다. (스페이스 2칸)
  "useTabs": false, // 탭 대신 스페이스를 사용하여 들여쓰기 합니다.
  "trailingComma": "all", // 여러 줄로 된 객체나 배열에서 마지막 항목 뒤에 쉼표를 추가합니다.
  "printWidth": 80, // 코드 한 줄의 최대 너비를 80자로 제한하여 줄 바꿈합니다.
  "endOfLine": "auto", // 시스템의 기본 줄 끝 스타일을 따릅니다. (CRLF 또는 LF)
  "bracketSpacing": true // 객체 리터럴에서 중괄호와 속성 사이에 공백을 추가합니다. (예: { foo: 'bar' } 대신 {foo: 'bar'})
}

```

## 🏗️ Folder Architecture

- **apps** -> provider와 같은 중추적인 앱을 감싸는 프로바이더 모음
- **assets** -> 폰트 및 svg와 같은 정적 에셋 파일 모음
- **components**
  - shared → 공통 컴포넌트
  - [domain] → 기능(도메인)별로 묶기 (예 user, domain1, domain2, …)
- **hooks** → use로 시작하는 리액트 훅 모음
- **layouts** → header, sidebar, footer 같은 레이아웃 모음
- **pages** → 말 그대로 페이지들 모음
- **routers** → 라우팅 담당(추후 관리자페이지 고려하여 두 개로 나눠놓았습니다.)
- **utils** → truncate, dayjs 같은 유용한 기능 파일 모음

`shared, utils -> components, hooks -> pages < layouts -> apps 순서로 레이어를 가질려고 합니다.`

<br />

```
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // path alias 적용
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@app', replacement: '/src/app' },
      { find: '@routers', replacement: '/src/routers' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@shared', replacement: '/src/components/shared' },
    ],
  },
});


```
