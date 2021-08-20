import Logo from "components/Logo/Logo";
import HomeLink from "./HomeLink";

export default {
  title: 'Components/UI/HomeLink',
  component: HomeLink,
  argTypes: {
    as: {
      // options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'radio' }
    },
    lang: {
      // options: ['en', 'ko'],
      // control: { type: 'radio' }
    },
    children: {
      table: {
        disable: true
      },
      // control: false
    }
  }
}

const Template = args => <HomeLink {...args} />;

export const ImageHomeLink = Template.bind({});
ImageHomeLink.storyName = '홈 링크 (이미지)';
ImageHomeLink.args = {
  as: 'h1',
  children: <Logo/>
}

export const textHomeLink = Template.bind({});