const audio = document.getElementById("audio");
const playBtn = document.getElementById("playButton");
const pauseBtn = document.getElementById("pauseButton");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

const songNameEl = document.querySelector(".song-name");
const authorNameEl = document.querySelector(".author-name");
const authorImg = document.getElementById("authorImage").querySelector("img");

const prevBtn = document.getElementById("prevButton");
const nextBtn = document.getElementById("nextButton");

const songs = [
  {
    name: "Is this love?",
    author: "XG",
    image: "assets/author.jpg",
    audio: "assets/song.mp3"
  },
  {
    name: "New Jeans Jersey Remix",
    author: "New Jeans",
    image: "assets/author2.jpg",
    audio: "assets/song2.mp3"
  },
  {
    name: "Howling",
    author: "XG",
    image: "assets/author3.jpg",
    audio: "assets/song3.mp3"
  },
  {
    name: "Igloo",
    author: "Kiss of Life",
    image: "assets/author4.jpg",
    audio: "assets/song4.mp3"
  },
  {
    name: "Reality",
    author: "Xin Liu",
    image: "assets/author5.jpg",
    audio: "assets/song5.mp3"
  },
  {
    name: "Easy",
    author: "Le sserafim",
    image: "assets/author6.jpg",
    audio: "assets/song6.mp3"
  },
]
let currentSongIndex = 0;

function loadSong(index) {
  const song = songs[index];
  songNameEl.textContent = song.name;
  authorNameEl.textContent = `by ${song.author}`;
  authorImg.src = song.image;
  audio.src = song.audio;
  progressBar.value = 0;
  currentTimeEl.textContent = "0:00";
  durationEl.textContent = "0:00";
  playBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
}

// Play & Pause
playBtn.onclick = () => {
  audio.play();
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
};

pauseBtn.onclick = () => {
  audio.pause();
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");
};

// Load Metadata
audio.addEventListener("loadedmetadata", () => {
  progressBar.max = audio.duration;
  durationEl.textContent = formatTime(audio.duration);
});

// Time Update
audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Seek
progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

// Format Time Helper
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

// Next & Previous Buttons
nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
});

// Load the first song initially
loadSong(currentSongIndex);
