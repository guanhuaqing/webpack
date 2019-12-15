import './index.scss';
import './test2.scss';
import { IUser } from './user';
const myTestFunc = () => {
  console.log('hello webpack');
};
myTestFunc();

const myPromise = new Promise((resolve) => console.log('promise'));
myPromise.then(() => console.log('test'))
  .catch(() => console.log('error'))
  .finally(() => console.log('finish'));

Array.from('foo');

const user1: IUser = {
  age: '30',
  hobby: 'coding',
  name: 'guanzi',
};

console.log(user1);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// check service work
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

console.log('数组去重');
const arr = [1, 2, 3, 4, 5, 4, 5];
const temp = new Set(arr);
console.log(Array.from(temp));
