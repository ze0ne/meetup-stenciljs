import { faker } from '@faker-js/faker';

export default {
    title: 'Components/Profile/Picture',
    args: { 
        image: faker.image.avatar()
    }
};

const Template = (args) => `<you-profile-picture image="${args.image}"></you-profile-picture>`;

export const Picture = Template.bind({});