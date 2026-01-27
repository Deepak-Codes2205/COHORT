const sounds = {
  a: "sounds/c6-102822.mp3",
  s: "sounds/d6-82020.mp3",
  d: "sounds/f6-102819.mp3",
  f: "sounds/g6-82014.mp3",
  g: "sounds/piano-g-6200.mp3",
  h: "sounds/a6-102820.mp3",
  j: "sounds/b6-82017.mp3"
};

function playSound(key) {
  if (!sounds[key]) return;

  const audio = new Audio(sounds[key]);
  audio.currentTime = 0;
  audio.play();

  const keyEl = document.querySelector(`.key[data-key="${key}"]`);
  keyEl.classList.add("active");

  setTimeout(() => keyEl.classList.remove("active"), 150);
}

document.addEventListener("keydown", (e) => {
  playSound(e.key.toLowerCase());
});

document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", () => {
    playSound(key.dataset.key);
  });
});
