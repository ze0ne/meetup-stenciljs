import { faker } from '@faker-js/faker';
faker.setLocale('fr');

export default {
    title: 'Components/Profile',
    args: {
        image: faker.image.avatar(),
        name: faker.name.firstName(),
        job: faker.name.jobType()
    }
};

const Template = (args) => `<you-profile style="width:200px;" image="${args.image}" name="${args.name}" job="${args.job}"></you-profile>`;

export const Default = Template.bind({});