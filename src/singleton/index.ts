import { Singleton } from './singleton.component';
const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a);
a.propA.a = 'I am the same instance';
console.log(b.propA.a);
