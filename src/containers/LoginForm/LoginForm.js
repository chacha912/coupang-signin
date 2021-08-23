import { useState, useEffect } from 'react';
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
import { string, number, object, oneOfType, bool } from 'prop-types';
import { isValidEmailFormat, isValidPasswordFormat } from 'utils';
import {
  IconInput,
  AutoSignInCheckbox,
  Button,
  Divider,
  A11yHidden,
} from 'components';

const LoginForm = ({ width, className, style, id, password, autoLogin }) => {
  const [userId, setUserId] = useState(id);
  const [userPw, setUserPw] = useState(password);
  const [errorMessageId, setErrorMessageId] = useState(null);
  const [errorMessagePw, setErrorMessagePw] = useState(null);
  const [isFormValidate, setIsFormValidate] = useState(false);
  const [isCheckedAutoLogin, setIsCheckedAutoLogin] = useState(autoLogin);

  const handleUpdateCheckState = () => {
    setIsCheckedAutoLogin(!isCheckedAutoLogin);
  };

  const handleChangeId = (e) => {
    setUserId(e.target.value);
  };

  const handleChangePw = (e) => {
    setUserPw(e.target.value);
  };

  useEffect(() => {
    setErrorMessageId(
      userId === undefined || isValidEmailFormat(userId)
        ? null
        : userId === ''
        ? '아이디(이메일)를 입력해주세요.'
        : '아이디(이메일)는 이메일 형식으로 입력해주세요.'
    );
  }, [userId]);

  useEffect(() => {
    setErrorMessagePw(
      userPw === undefined || isValidPasswordFormat(userPw)
        ? null
        : userPw === ''
        ? '비밀번호를 입력해주세요.'
        : '숫자, 영어 조합 6자리 이상 입력해야 합니다.'
    );
  }, [userPw]);

  useEffect(() => {
    setIsFormValidate(
      isValidEmailFormat(userId) && isValidPasswordFormat(userPw)
    );
  }, [userId, userPw]);

  return (
    <form className={classNames(form, className)} style={{ ...style, width }}>
      <fieldset>
        <A11yHidden as="legend">로그인 폼</A11yHidden>
        <IconInput
          className={control}
          id="userEmail"
          value={userId}
          icon="letter"
          label="아이디(이메일)"
          placeholder="아이디(이메일)"
          email={true}
          handleChange={handleChangeId}
          error={errorMessageId && { message: errorMessageId }}
        />
        <IconInput
          className={control}
          id="userPassword"
          value={userPw}
          icon="lock"
          label="비밀번호"
          placeholder="비밀번호"
          password={true}
          handleChange={handleChangePw}
          error={errorMessagePw && { message: errorMessagePw }}
        />
        <div className={group}>
          <AutoSignInCheckbox
            checked={isCheckedAutoLogin}
            onChange={handleUpdateCheckState}
          />
          <a href="/" className={findLink}>
            아이디/비밀번호 찾기
            <ArrowIcon className={findLinkArrow} />
          </a>
        </div>
        <div className={buttonGroup}>
          <Button className={button} disabled={!isFormValidate}>
            로그인
          </Button>
          <Divider />
          <Button className={button} secondary>
            회원가입
          </Button>
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
  id: string,
  password: string,
  autoLogin: bool,
};

export default LoginForm;
