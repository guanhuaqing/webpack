import { AudioPlayer } from './media-player/audio-palyer';
const audioPlayer = new AudioPlayer();
audioPlayer.play('mp3', 'test.mp3');
audioPlayer.play('mp4', 'test.mp4');
audioPlayer.play('vlc', 'test.vlc');
