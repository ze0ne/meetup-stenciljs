import { faker } from '@faker-js/faker';
faker.setLocale('fr');

export default {
    title: 'Components/Card ',
    args: { 
        title: faker.lorem.sentence(5),
        summary: faker.lorem.sentences(5),
        url: faker.internet.url(),
        author: faker.name.firstName(),
        image: faker.image.business(400, 200)
    }
};

const Template = (args) => `<you-card-media style="width:400px" title="${args.title}" summary="${args.summary}" image="${args.image}" author="${args.author}" url="${args.url}"></you-card-media>`;

export const Default = Template.bind({});

export const Podcast = Template.bind({});
Podcast.args = { 
    title: "Tests unitaires, vraiment utiles ?",
    summary: "Quel développeur ne s'est jamais posé la question ? Nous avons notre avis.",
    url: "https://www.younup.fr/blog/podcast-tests-unitaires-vraiment-utiles",
    author: "Benjamin",
    image: "https://assets-global.website-files.com/625af84e0d2f6fdd03734ac8/629f71207acc44a8e7c0fd58_TestsUnitaires.jpg"
};


export const Random = Template.bind({});
Random.args = { 
    title: faker.lorem.sentence(5),
    summary: faker.lorem.sentences(5),
    url: faker.internet.url(),
    author: faker.name.firstName(),
    image: faker.image.business(400, 200)
}