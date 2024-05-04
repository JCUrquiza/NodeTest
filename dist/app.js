"use strict";
const heroes = [
    {
        id: 1,
        name: 'Iron Man',
        owner: 'Marvel'
    },
    {
        id: 2,
        name: 'Spider Man',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC'
    }
];
const findHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
};
const hero = findHeroById(2);
console.log({ hero });
