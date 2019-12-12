import { IMediaPlayer } from './media-player.model';
import { MediaPlayerAdapter } from '../media-player-adapter';
export class AudioPlayer implements IMediaPlayer {
    adapter: MediaPlayerAdapter;

    play(audioType, fileName) {
        if (audioType === 'vlc' || audioType === 'mp4') {
            this.adapter = new MediaPlayerAdapter(audioType);
            this.adapter.play(audioType, fileName);
        } else {
            console.log(`Audioplayer: the filename is ${fileName}`);
        }
    }
}
