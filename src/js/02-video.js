import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';

player.on('play', throttle(onPlay, 1000));

function onPlay(event) {
  localStorage.setItem(LOCAL_KEY, event);
}
