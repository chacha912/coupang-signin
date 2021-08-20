import styles from './App.module.scss';
import logo from 'assets/logo.svg';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="React" />
        <p>
          <code>src/App.js</code> 문서를 수정하면 실시간 업데이트 됩니다
        </p>
        <a
          className={styles['App-link']}
          href="https://ko.reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          React를 배워보세요
        </a>
      </header>
    </div>
  );
}

export default App;
