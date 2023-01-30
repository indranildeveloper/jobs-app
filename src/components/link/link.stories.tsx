import { PlusSquareIcon } from "@chakra-ui/icons";
import { Meta, Story } from "@storybook/react";

import { Link, LinkProps } from "./link";

const meta: Meta = {
  title: "Components/Link",
  component: Link,
};

export default meta;

const Template: Story<LinkProps> = (props) => (
  <Link {...props} />
);

export const Default = Template.bind({});

Default.args = {
  href: "/",
  children: "Click Me",
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  href: "/",
  children: "Click Me",
  icon: <PlusSquareIcon />,
};
