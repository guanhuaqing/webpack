import { IMediaPlayer } from './media-player/media-player.model';
import { IAdvancedMediaPlayer } from './advanced-media-player/advanced-media-player.model';
import { Mp4Player } from './advanced-media-player/mp4-player';
import { VlcPlayer } from './advanced-media-player/vlc-player';
export class MediaPlayerAdapter implements IMediaPlayer {
    advancedPlayer: IAdvancedMediaPlayer;
    constructor(type) {
        if (type === 'vlc') {
            this.advancedPlayer = new VlcPlayer();
        } else if (type === 'mp4') {
            this.advancedPlayer = new Mp4Player();
        }
    }
    play(audioType: any, fileName: any) {
        if (audioType === 'vlc') {
            this.advancedPlayer.playVlc(fileName);
        } else if (audioType === 'mp4') {
            this.advancedPlayer.playMp4(fileName);
        }
    }
}
