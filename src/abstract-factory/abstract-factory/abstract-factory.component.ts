import {IColor} from '../color-factory/icolor.model';
import {IShap} from '../shap-factory/ishap.model';
export abstract class  AbstractFactory {
     public abstract  getShap(type: string): IShap;
     public abstract  getColor(type: string): IColor;
}
