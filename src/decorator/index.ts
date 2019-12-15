import { logMethod } from './log-method';
import { logParameter } from './log-parameter';
import { constructorMethod } from './constructor-method';

@constructorMethod
class Employee {
    @logParameter
    fullName;

    constructor(private firstName: string, private lastName: string) {

    }
    @logMethod()
    greet(message: string): string {
        return `${this.firstName} ${this.lastName} says: ${message}`;
    }

    age() {
        console.log(this.age);
    }
}
const emp = new Employee('Li', 'Lei');
emp.greet('hello');
emp.age();
emp.fullName = 'Li Lei';
console.log(emp.fullName);
