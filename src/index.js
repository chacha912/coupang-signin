import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'styles/index.scss';

import { StrictMode, Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { SignInPage } from 'pages';

// const App = lazy(() => import('./app/App'));

/* -------------------------------------------------------------------------- */

render(
  <StrictMode>
    <Suspense fallback={() => <div role="alert">앱 로딩 중...</div>}>
      {/* <App /> */}
      <SignInPage />
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
);
