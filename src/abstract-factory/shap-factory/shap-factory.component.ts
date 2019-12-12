import { AbstractFactory } from '../abstract-factory/abstract-factory.component';
import { IColor } from '../color-factory/icolor.model';
import { Circle } from './circle.component';
import { IShap } from './ishap.model';
import { Rectangle } from './rectangle.component';
import { Square } from './square.component';
export class ShapFactory extends AbstractFactory {
    public getShap(type) {
        switch (type) {
            case 'circle':
                return new Circle();
            case 'rectangle':
                return new Rectangle();
            case 'square':
                return new Square();
            default:
                return null as IShap;
        }
    }

    public getColor(type): IColor {
        return null as IColor;
    }
}
