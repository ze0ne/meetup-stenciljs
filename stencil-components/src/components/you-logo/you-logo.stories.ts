export default {
    title: 'Components/Logo ',
};

const Template = (args) => `<you-logo width="${args.width}"></you-logo>`;

export const Large = Template.bind({});
Large.args = {
    width: '600'
};

export const Medium = Template.bind({});
Medium.args = {
    width: '400'
};

export const Small = Template.bind({});
Small.args = {
    width: '150'
};