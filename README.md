![AB](https://github.com/team-offonoff/web/assets/26860466/e15ec030-9a0c-4544-a539-0e59b0b8e5ac)

세상 모든 질문에 A/B로 답하다.

# **Requirements**

1. Which browsers need to be supported? 🌐
    - Chrome 57^
    - Safari 10.1^
    - Chrome for Android 116^
    - Safari on iOS 10.3^
2. Which devices need to be supported? 📱💻
    - mobile, tablets, desktop
3. Language support? 🌎
    - ko-KR only
4. Dark theme? 🌙
    - No
5. Server-side rendering? 🚀
    - CSR only
6. Tests? 🧪
    - No Testing
7. Accessibility? ♿
    - Partial support

---

# Framework

<aside>
📌 **Vite + React.js**

</aside>

## why?

Esbuild를 기반으로 만들어진 프론트엔드 빌드툴

- 번들링을 생략하여 개발 서버를 빠르게 구동시킨다
- 리로딩과 캐싱이 빠르다
- native ESM을 사용하여 앱에 대한 변경사항이 빠르게 반영된다

[Vite](https://ko.vitejs.dev/guide/why.html)

---

# Structure

- /src
    - /components
        - /RoundButton
            - `RoundButton.tsx`
            - `RoundButton.styles.tsx`
            - `RoundButton.stories.ts`
        - /BottomSheet
    - /hooks
        - `useModal.ts`
        - `useIntersectionObserver.ts`
    - /pages
        - `home.tsx`
        - `login.tsx`
    - /apis
        - `useUser.ts`
    - /store
    - /utils
    - /types
        - `user.ts`
    

---

# Libraries

## State Management

### Server State Management

React-Query

### Client State Management

zustand(currently not using)

## Styling Approach

styled-components

- pros
    - good for component based project
    - maintenance
    - code consistency
- cons
    - bundle size
    - increase of unnecessary codes

### documentation

storybook

## Routing

react-router

## Utils

react-hookz

@toss/slash

## Deploy

S3 + CloundFront

## CI/CD

github actions

---

# **Git Branching Strategies**

<aside>
📌 Simplified Github Flow

</aside>

- main → prod branch
- dev → prod ready branch
- feat/* → for feature develop branch

## working process

1. create issue (fix, feature, build whatever)
2. create feature branch from develop branch (ex. feat/#31, fix/#26)
3. do some magic
4. open pull request of your branch
5. ready for code review
6. ta-da

---

# Roles

@Jeon Jinho 

- documenting
- CI/CD

@송채영 

- component
- 

---

# Naming Convention

### folders/files

- use lower case for folders
    - ex) /components
- use pascal case for tsx files
    - ex) Button.tsx
- use camel case for util files
    - ex) formatDate.ts

### variables

- use upper case and underscore for constants
    - ex) USER_KEY = “”
- use `is`, `has` or `should` prefix for boolean state
    - ex) ❌ `const [active, setActive] = useState(false)`
    - ex) ✅ `const [isActive, setIsActive] = useState(false)`
- use pascal case for types/interface
    - ex) `interface ButtonProps { … }`

### classname

- use BEM method `TBD`

### functions

- use `handle*` prefix
    - ex) handleButtonClick

### props

- use `on*` prefix
    - ex) `<Button onClick={handleButtonClick} />`
