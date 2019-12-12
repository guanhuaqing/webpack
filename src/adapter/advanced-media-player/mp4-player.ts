import { IAdvancedMediaPlayer } from './advanced-media-player.model';
export class Mp4Player implements IAdvancedMediaPlayer {
    playMp4(filename) {
        console.log(`Mp4Player: the filename is ${filename}`);
    }
    playVlc() {
        console.log('this method will not be called!');
    }
}
