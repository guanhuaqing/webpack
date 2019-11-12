import './index.scss';
import {User} from './user';
const func = () => {
  console.log('hello webpack')
}
func()

new Promise(resolve => console.log('promise'))

Array.from('foo')

const user1: User = {
  name: 'guanzi',
  age: '30',
  hobby: 'coding',
};

console.log(user1);