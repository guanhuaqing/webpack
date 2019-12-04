import './bar.scss';
export class Person {
    public name: string;
    public age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    public printInfomation() {
        console.log(`${this.name} is already ${this.age}!`);
    }
}

const xiaoming = new Person('xiaoming', 30);
xiaoming.printInfomation();
