import { Shap } from './shap.model';
export class Circle extends Shap {
    color: string;
    radius: number;
    constructor(color) {
        super();
        this.color = color;
    }

    setRadius(radius) {
        this.radius = radius;
    }
    draw() {
        console.log(`draw ${this.color} circle size is ${this.radius}`);
    }
}
