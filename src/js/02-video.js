import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay(event) {
//   localStorage.setItem(LOCAL_KEY, event.seconds);
// }

function onPlay(event) {
  localStorage.setItem(LOCAL_KEY, event.seconds);
}

setCurrentTime();

function setCurrentTime() {
  const savedTime = localStorage.getItem(LOCAL_KEY);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
