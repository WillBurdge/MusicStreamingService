const playBtns = document.querySelectorAll('.playBtn');

playBtns.forEach(playBtn => {
  playBtn.addEventListener('click', () => {
    playBtns.forEach(btn => btn.classList.remove('playing'));
    playBtn.classList.add('playing');
    togglePlayPause();
  });
});

const songTitle = document.querySelector('.songTitle p.unholy');
const artistName = document.querySelector('.songTitle p.artists');
const albumCover = document.querySelector('.albumCover img');
const audioPlayer = new Audio();
const playBtn = document.getElementById('plyBtn');

playBtn.addEventListener('click', () => {
  togglePlayPause();
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

// Function to toggle play and pause button text
function togglePlayPause() {
  if (audioPlayer.paused) {
    playBtn.innerText = '▶';
  } else {
    playBtn.innerText = '||';
  }
}

// Change song info
function changeSong(title, artist, cover, audio) {
  songTitle.innerText = title;
  artistName.innerText = artist;
  albumCover.src = cover;
  audioPlayer.src = audio;
}

const song1 = {
  title: 'Something About You',
  artist: 'Kim Petras',
  cover: 'Images for MS App/kim.png',
  audio: 'path/to/something_about_you.mp3'
};

const song2 = {
    title: 'Purgatory',
    artist: 'Kim Petras',
    cover: 'Images for MS App/kim.png',
    audio: 'path/to/purgatory.mp3'
  };
  
let currentSong = song1;

// Switch between songs
function switchSong() {
  if (currentSong === song1) {
    currentSong = song2;
  } else {
    currentSong = song1;
  }
  changeSong(currentSong.title, currentSong.artist, currentSong.cover, currentSong.audio);
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  togglePlayPause();
}

switchSong();
