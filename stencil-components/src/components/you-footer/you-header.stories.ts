import { faker } from '@faker-js/faker';
faker.setLocale('fr');

export default {
    title: 'Components/Footer ',
};

const Template = () => `<you-footer></you-footer>`;
export const Main = Template.bind({});