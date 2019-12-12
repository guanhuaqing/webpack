import { IAdvancedMediaPlayer } from './advanced-media-player.model';
export class VlcPlayer implements IAdvancedMediaPlayer {
    playVlc(filename) {
        console.log(`vlcPlayer: the filename is ${filename}`);
    }
    playMp4() {
        console.log('do nothing!!!');
    }
}
