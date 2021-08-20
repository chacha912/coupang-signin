import { oneOf } from 'prop-types';
import styles from './HomeLink.module.scss';
import classNames from 'classnames';
import { string } from 'prop-types';

const HomeLink = ({ as: Comp, href, lang, className, children }) => {
  return (
    <Comp lang={lang} className={classNames(styles.homeLink, className)}>
      <a href={href}>{children}</a>
    </Comp>
  );
};

HomeLink.defaultProps = {
  as: 'h1',
  lang: 'en',
  href: '/',
};

HomeLink.propTypes = {
  /** 제목 요소를 설정합니다. */
  as: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** 언어를 지정할 수 있습니다. (스크린 리더 음성 변경 됨) */
  lang: oneOf(['en', 'ko']),
  /** 클래스 이름을 추가할 수 있습니다. */
  className: string,
  href: string,
};

export default HomeLink;
