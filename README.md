# react-tender

[![License](https://img.shields.io/github/license/filiphsps/react-tender.svg)](https://github.com/filiphsps/react-tender/blob/master/LICENSE) [![npm](https://img.shields.io/npm/dt/react-tender)](https://www.npmjs.com/package/react-tender) [![Contributors](https://img.shields.io/github/contributors/filiphsps/react-tender.svg)](https://github.com/filiphsps/react-tender/graphs/contributors) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/73c7ef01eb234c46a119a0f21af2d658)](https://app.codacy.com/gh/sweet-side-of-sweden/react-tender/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) [![TODO Badge](https://img.shields.io/github/search/sweet-side-of-sweden/react-tender/todo)](https://github.com/sweet-side-of-sweden/react-tender/search?q=todo) [![FIXME Badge](https://img.shields.io/github/search/sweet-side-of-sweden/react-tender/fixme)](https://github.com/sweet-side-of-sweden/react-tender/search?q=fixme)

React currency component. Built for [Sweet Side of Sweden](https://www.sweetsideofsweden.com?utm_source=GitHub&utm_campaign=react-tender) with ❤️.

## Why use react-tender?

-   Stupidly simple (Pretty much just toLocaleString).
-   Written in TypeScript (that's right, fight me).
-   Actively maintained.
-   Open Source with an actually free license (MIT).
-   0/ZERO/NADA/NOLL dependencies.

## Getting started

It's as simple as 1-2-3!

### 1. Install

```bash
npm i react-tender
```

### 2. Import

```tsx
import { Currency } from 'react-tender';
```

### 3. Use

```jsx
<Currency
    value={9.99} // Required
    currency="USD" // Optional, (defaults to USD)
    locale="en-US" // Optional, (defaults to en-US)
/>
```
