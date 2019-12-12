import { AbstractFactory } from '../abstract-factory/abstract-factory.component';
import { IShap } from '../shap-factory/ishap.model';
import { Red } from './red.component';
import { Green } from './green.component';
import { IColor } from './icolor.model';
export class ColorFactory extends AbstractFactory {
    public getShap(type: string): IShap {
        return null as IShap;
    }
    public getColor(type: string): IColor {
        switch (type) {
            case 'red':
                return new Red();
            case 'green':
                return new Green();
            default:
                return null as IColor;
        }
    }
}
