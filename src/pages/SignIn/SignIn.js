import { page, container, form, copyright } from './SignIn.module.scss';
import { Logo } from 'components';
import { Container } from 'containers';

/* -------------------------------------------------------------------------- */

export default function SignInPage() {
  return (
    <div className={page}>
      <Container className={container}>
        {/* Logo를 HomeLink 컴포넌트로 감싸야 합니다. */}
        <Logo />

        {/* 
					LogInForm 컨테이너 컴포넌트를 이 곳에 포함시킵니다. 
					설정할 props는 다음과 같습니다.

					- width      100%
					- className  { form }
					- style      { maxWidth: 578 }
				*/}

        <small lang="en" className={copyright}>
          &copy;Coupang Corp. All rights reserved.
        </small>
      </Container>
    </div>
  );
}
