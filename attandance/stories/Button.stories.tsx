import type { Meta} from '@storybook/react';
import ButtonField from '@/app/components/Button/ButtonField';

export default {
  title: 'Components/CustomButton',
  component: ButtonField,
  argTypes: {
      text: {
          control:{ 
            type: 'text'
          },  
          defaultValue:'Login'
      
      },
    color: { control: 'color' },
    // size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    width: { control: 'text' },
  },
} as Meta <typeof ButtonField>;

const Template = (args) => <ButtonField {...args} />;


export const Default = Template.bind({});
  Default.storyName = 'Button';
Default.args = {
  // text: 'Login',
  color: 'blue',
  size: 'medium',
  width: '200px',
};

// Customized stories with different text, color, and size
// export const LargeButton = Template.bind({});
// LargeButton.args = {
//   // text: 'LargeButton',
//   color: 'red',
//   size: 'large',
// };

// export const MediumButton = Template.bind({});
// MediumButton.args = {
//   // text: 'MediumButton',
//   color: 'green',
//   size: 'small',
// };

// export const SmallButton = Template.bind({});
// SmallButton.args = {
//   // text: 'Small  Button',
//   color: "#eeefhd",
//   size: 'small',
// };

