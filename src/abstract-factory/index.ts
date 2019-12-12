import { ShapFactory } from './shap-factory/shap-factory.component';
import { ColorFactory } from './color-factory/color-factory.component';
import { IShap } from './shap-factory/ishap.model';
import { IColor } from './color-factory/icolor.model';

class FactoryProducer {
    public static getFactory(type: string) {
        switch (type) {
            case 'shap':
                return new ShapFactory();
            case 'color':
                return new ColorFactory();
        }
    }
}

class DemoAbstractFactory {
    shapInstance: IShap;
    colorInstance: IColor;
    constructor() {
        //  this.producer = new FactoryProducer();
        this.shapInstance = FactoryProducer.getFactory('shap').getShap('circle');
        this.colorInstance = FactoryProducer.getFactory('color').getColor('red');
        this.shapInstance.draw();
        this.colorInstance.fill();
    }
}
const demoTest = new DemoAbstractFactory();
