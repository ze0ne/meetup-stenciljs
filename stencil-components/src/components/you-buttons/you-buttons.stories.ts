export default {
    title: 'Components/Button ',
    args: {
        text: 'Valider',
    },
    argTypes: {
        type: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
        },
    },
};

const Template = (args) => `<you-buttons type="${args.type}">${args.text}</you-buttons>`;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Media',
    type: 'secondary'
};
