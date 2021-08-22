import LoginForm from "./LoginForm";

export default {
  title: 'Containers/Form/LoginForm',
  component: LoginForm,
  argTypes: {
    className: {
      control: false
    },
    style: {
      control: false
    }
  },
  args : {
    width: 576
  },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=886%3A37',
    }
  }
}

const template = args => <LoginForm {...args}/>

export const mobileLoginForm = template.bind({}); 
mobileLoginForm.storyName = '로그인 폼 (모바일)';
mobileLoginForm.argTypes = {
  width: { 
    control: { type: 'range', min: 320, max: 800 }
  }
}
mobileLoginForm.args = {
  width: 320
}

export const defaultLoginForm = template.bind({}); 
defaultLoginForm.storyName = '로그인 폼 (초기 상태)';
defaultLoginForm.argTypes = {
  width: { 
    control: { type: 'range', min: 400, max: 800 }
  }
}

export const errorLoginForm = template.bind({}); 
errorLoginForm.storyName = '로그인 폼 (입력 상태)';
errorLoginForm.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=886%3A435',
  }
}

export const typingLoginForm = template.bind({}); 
typingLoginForm.storyName = '로그인 폼 (오류 상태)';
typingLoginForm.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=886%3A336',
  }
}