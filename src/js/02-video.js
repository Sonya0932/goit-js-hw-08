import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(setItemTime, 1000));
player.setCurrentTime(getItemOfLocalStorage);

function setItemTime(evt) {
      localStorage.setItem('videoplayer-current-time', evt.seconds);
    }
    
const getItemOfLocalStorage = (
      localStorage.getItem('videoplayer-current-time') || 0
    );

    

    
   