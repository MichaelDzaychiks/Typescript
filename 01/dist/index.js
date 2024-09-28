"use strict";
console.log("Hello, World!");
let fullName = "Budi Santoso";
let age = 30;
console.log(`I'm ${fullName} and I'm ${age} years old.`); // fixed template literal
let friend = 'Luigi';
let money = 3000;
let names = ['Mario', 'Luigi', 'Peach']; // fixed array initialization
let numbers = [25, 28, 24];
names.push('Bowser');
numbers.push(100);
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('peaches');
const f = fruits[3];
let user = {
    firstName: 'mario',
    age: 10,
    id: 1,
};
let person = {
    name: 'luigi',
    score: 35
};
person.score = 50;
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([1, 2, 3, 4, 5]);
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}!`;
}
const result = formatGreeting('mario', 'hi');
console.log(result);
let size;
let title;
size = 30;
size = false;
title = 25;
title = { hello: 'world!' };
let things = ['hello', true, 30, null];
things.push({ id: 123 });
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
const resultTwo = addTogether(10);
let man = ['mario', 30, true];
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
function useCoods() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoods();
// lat=langtitude, long=longtitude
let player;
player = ['peach', 25];
console.log(player[0]);
const authorOne = {
    name: 'mario',
    avatar: 'img/mario.png'
};
const newPost = {
    title: 'Hai sayang',
    body: 'This is my first blog post.',
    tags: ['technology', 'javascript'],
    create_at: new Date(),
    author: authorOne
};
function createPost(post) {
    console.log(`create post ${post.title} by ${post.author.name}`);
}
console.log(newPost.title);
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
