import {
  form,
  control,
  group,
  findLink,
  findLinkArrow,
  buttonGroup,
  button,
} from './LoginForm.module.scss';
import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';
import classNames from 'classnames';
import { string, number, object, oneOfType } from 'prop-types';
import { isValidEmailFormat, isValidPasswordFormat } from 'utils';
import {
  IconInput,
  AutoSignInCheckbox,
  Button,
  Divider,
  A11yHidden,
} from 'components';

const LoginForm = ({ width, className, style }) => {
  return (
    <form className={classNames(form, className)} style={{ ...style, width }}>
      <fieldset>
        <A11yHidden as="legend">로그인 폼</A11yHidden>
        <IconInput
          className={control}
          id="userEmail"
          icon="letter"
          label="아이디(이메일)"
          placeholder="아이디(이메일)"
          email={true}
          error={{ message: '아이디(이메일)는 이메일 형식으로 입력해주세요.' }}
          style={{ width }}
        />
        <IconInput
          className={control}
          id="userPassword"
          icon="lock"
          label="비밀번호"
          placeholder="비밀번호"
          password={true}
          error={{ message: '비밀번호를 입력해주세요.' }}
          style={{ width }}
        />
        <div className={group}>
          <AutoSignInCheckbox />
          <a href="/" className={findLink}>
            아이디/비밀번호 찾기
            <ArrowIcon className={findLinkArrow} />
          </a>
        </div>
      </fieldset>
    </form>
  );
};

LoginForm.propTypes = {
  /** 폼 너비를 설정할 수 있습니다. */
  width: oneOfType([string, number]),
  /** 사용자 정의 클래스 이름을 추가할 수 있습니다. */
  className: string,
  /** 사용자 정의 스타일 객체를 설정할 수 있습니다. */
  style: object,
};

export default LoginForm;
