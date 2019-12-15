import { FlyWeight } from './fly-weight';
const colors = ['red', 'green', 'yellow', 'blue', 'gray', 'yellow'];
for (const i of colors) {
    const temp = FlyWeight.getCircle(i);
    temp.setRadius(5);
    temp.draw();
}
