import { faker } from '@faker-js/faker';
faker.setLocale('fr');

export default {
    title: 'Components/Header ',
};

const Template = () => `<you-header></you-header>`;
export const Main = Template.bind({});

const DropdownTemplate = (args) => `<you-dropdown label="${args.label}" links="${{text:'toto'}}"></you-dropdown>`;
export const Dropdown = DropdownTemplate.bind({});
Dropdown.args = {
    label: "Un jour",
    links: { text: "Nantesff", url: "https://www.younup.fr/consultants/agences/nantes" }
}