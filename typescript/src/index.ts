class Player {
    constructor(public first: string, public last: string, protected _score: number){
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore : number){
        if (newScore < 0){
            throw new Error ("Score cannot be negative!");
        }
        this._score = newScore
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 999999999;
    }
}

const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 99;

interface Colorful {
    color: string
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string){}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string){}

    public print(): void {
        console.log(`${this.color} ${this.brand}`);
    }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");

interface Payable {
    getPay(): number;
}

abstract class Employee{
    constructor(public first: string, public last: string){}
    abstract getPay(): number;
    greet(){
        console.log("HELLO!");
    }
}

class FullTimeEmployee extends Employee{
    constructor(first: string, last: string, private salary: number) 
    {
        super(first, last);
    }

    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee{
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number)
    {
        super(first, last);
    }

    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());

const input = document.querySelector<HTMLInputElement>("#username")!;
console.dir(input);
input.value = "Hacked!"

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

interface Cat{
    name: string;
    breed: string;
}

function identity<T>(item: T): T {
    return item;
}

identity<number>(7);
identity<string>("hello");
identity<Cat>({ name: "string", breed: "yes" });

function getRandomElement<T>(list : T[]): T{
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx];
}

console.log(getRandomElement<string>(["A", "b", "c"]));
getRandomElement<number>([5, 6, 21, 354, 567, 234, 654]);
getRandomElement(["a", "v", "asd"])

function merge<T extends object, U extends object>(object1: T, object2: U){
    return {
        ...object1,
        ...object2
    }
}

const comboObj = merge({name: 'colt'}, {pets: ["blue", "elton"]});
merge({name: "Colt"}, {num: 9});

interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

printDoubleLength("sadas");
printDoubleLength(2341)

function makeEmptyList<T = number>(): T[]{
    return []
}

const strings = makeEmptyList<boolean>();

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];

    add(el: T){
        this.queue.push(el);
    }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();

function triple(value: number | string) {
    if (typeof value === "string"){
        return value.repeat(3);
    }
    return value * 3;
}

const el = document.getElementById("idk");
if (el){
    el 
}else {
    el 
}

const printLetters = (words?: string) => {
    if(words){
        for(let char of words){
            console.log(char);
        }
    }else {
        console.log("YOU DID NOT PASS IN A WORD!");
    }
}

function someDemo(x: string | number, y: string | boolean){
    if (x === 3){

    }
}

interface Movie {
    title: string;
    duration: number;
}

interface TVShow{
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRuntime(media: Movie | TVShow){
    if ("numEpisodes" in media){
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

console.log(getRuntime({title: "Amadeus", duration: 140}));
console.log(getRuntime({title: "Spongebob", numEpisodes: 80, episodeDuration: 30}));

function printFullDate(date: string | Date) {
    if (date instanceof Date){
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}

class User {
    constructor(public username: string) {}
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company){
    if (entity instanceof User)
    {
        entity
    }else {
        entity
    }
}

interface Cat {
    name: string,
    numLives: number
}

interface Dog {
    name: string;
    breed: string;
}

function makeNoise(animal: Cat | Dog): string {
    if (isCat(animal))
    {
        return "Meow";
    } 
    else 
    {
        return "Bark";
    }
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined
}

interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "Rooster";
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "Cow";
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "Pig";
}

interface Sheep{
    name: string;
    weight: number;
    age: number;
    kind: "Sheep"
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal): string {
    switch(animal.kind)
    {
        case "Rooster":
            return "Cockdadoodledoo!";
        case "Cow":
            return "Moooo!"
        case "Pig":
            return "Oink!";
        case "Sheep":
            return "Baaa!";
        default:
            // We should never make it here, if we handled all cases correctly
            const shouldNeverGetHere: never = animal;
            return shouldNeverGetHere;
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "Rooster"
};

console.log(getFarmAnimalSound(stevie));