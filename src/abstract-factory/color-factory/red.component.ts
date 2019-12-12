import { IColor } from './icolor.model';
export class Red implements IColor {
    public fill() {
        console.log('fill red');
    }
}
