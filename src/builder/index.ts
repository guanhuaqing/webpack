import { BuilderClass } from './builder';
import { PeopleClass } from './people';

const builder = new BuilderClass();
builder.buildName();
builder.buildAge();
builder.buildDes();
const people = new PeopleClass(builder);
console.log(people);
