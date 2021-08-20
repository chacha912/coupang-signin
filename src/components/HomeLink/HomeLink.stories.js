import Logo from "components/Logo/Logo";
import HomeLink from "./HomeLink";

export default {
  title: 'Components/UI/HomeLink',
  component: HomeLink,
}

const Template = args => <HomeLink {...args} />;

export const ImageHomeLink = Template.bind({}, { children:<Logo/> });
ImageHomeLink.storyName = '홈 링크 (이미지)';