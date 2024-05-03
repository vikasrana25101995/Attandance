import { Meta } from "@storybook/react";
import InputField from '@/app/components/Input/InputField';
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default {
    title: 'FormField/Components/CustomInput',
    component: InputField,
    argTypes:{
        label: { control: 'text' }, 
        inputType: { control: 'text' }, 
        placeholder: { control: 'text' }, 
        eyeIcon: { control: 'text' }, 
        eyeSlashIcon: { control: 'text' }, 
    },
    

} as Meta<typeof InputField>

const Template = (args) => <InputField {...args} />;

export const InputText = Template.bind({});

// InputText.storyName = 'Text';

InputText.args ={
    label:'Useraname',
    inputType:'text',
    placeholder: 'admin@dreamstechnologies.com',
};

export const InputPassword = Template.bind({});

InputPassword.args={
    label:'Password',
    inputType:'password',
    placeholder: '123456',
    eyeIcon: <FaEye/>, 
    eyeSlashIcon: <FaEyeSlash/>,
}
