console.log("Hello, World!");

let fullName = "Budi Santoso";
let age = 30;
console.log(`I'm ${fullName} and I'm ${age} years old.`); // fixed template literal

let friend: string = 'Luigi';
let money: number = 3000;

let names: string[] = ['Mario', 'Luigi', 'Peach']; // fixed array initialization
let numbers: number[] = [25, 28, 24];

names.push('Bowser');
numbers.push(100);

let fruits = ['apples', 'pears', 'bananas', 'mangos'];

fruits.push('peaches');

const f = fruits[3];

let user: { firstName: string, age: number, id: number } = {
    firstName: 'mario',
    age: 10,
    id: 1,
};

let person: { name: string, score: number } = {
    name: 'luigi',
    score: 35
};

person.score = 50;

function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

const subtractTwoNumbers = (a: number, b: number) => {
    return a - b;
};

function addAllNumbers(items: number[]): void {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}

addAllNumbers([1, 2, 3, 4, 5]);

function formatGreeting(name: string, greeting: string): string {
    return `${greeting}, ${name}!`;
}

const result = formatGreeting('mario', 'hi');
console.log(result);

let size:any;
let title;

size = 30;
size=false;

title=25;

title={hello:'world!'}

let things:any[] = ['hello', true,30,null];

things.push({id:123});

function addTogether(value:any) :any{
    return value + value;
}

const resultOne = addTogether('hello');
const resultTwo = addTogether(10);

let man: [string,number,boolean] = ['mario',30,true];

let hsla: [number,string,string,number];
hsla = [200,'100%', '50%', 1];

let xy: [number,number];

function useCoods():[number,number] {
    const lat = 100;
    const long = 50;
    
    return[lat,long];
}

const [lat,long] = useCoods();
// lat=langtitude, long=longtitude

let player: [name:string, age:number];
player = ['peach', 25]
console.log(player[0])

interface Author{
    name:string,
    avatar:string
}

const authorOne: Author = {
    name:'mario',
    avatar:'img/mario.png'
}

interface Post{
    title:string,
    body:string,
    tags:string[],
    create_at:Date,
    author:Author
}

const newPost: Post = {
    title: 'Hai sayang',
    body: 'This is my first blog post.',
    tags: ['technology','javascript'],
    create_at: new Date(),
    author: authorOne
}

function createPost(post:Post):void {
    console.log(`create post ${post.title} by ${post.author.name}`);    
}

console.log(newPost.title);

let posts:Post[] = [];

posts.push(newPost);

type Rgb = [number,number,number];

function getRandomColor():Rgb{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return [r,g,b]
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne,colorTwo);