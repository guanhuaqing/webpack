import { Circle } from './circle';
export class FlyWeight {
    static circles = new Map<string, Circle>();
    static getCircle(color) {
        const circle = this.circles.get(color);
        if (!circle) {
            this.circles.set(color, new Circle(color));
        }
        return circle;
    }
}
