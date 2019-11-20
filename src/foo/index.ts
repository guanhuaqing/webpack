import './index.scss';
import './test2.scss';
import {User} from './user';
const myTestFunc = () => {
  console.log('hello webpack')
}
myTestFunc()

const myPromise = new Promise(resolve => console.log('promise'));
myPromise.then(() => console.log('test'))
          .catch(() => console.log('error'))
          .finally(() => console.log('finish'))

Array.from('foo')

const user1: User = {
  name: 'guanzi',
  age: '30',
  hobby: 'coding',
};

console.log(user1);

if(process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}