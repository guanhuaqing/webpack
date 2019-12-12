import { IColor } from './icolor.model';
export class Green implements IColor {
    public fill() {
        console.log('fill green');
    }
}
