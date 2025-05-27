//const frames = ["frame1.png", "img/ComicStrip/frame2.png", "frame3.png", "frame4.png"];
const frames = [
  "img/ComicStrip/Frame1.png",
  "img/ComicStrip/Frame2.png",
  "img/ComicStrip/Frame3.png",
  "img/ComicStrip/Frame4.png"
];
let currentFrame = 0;

function nextFrame() {
  currentFrame = (currentFrame + 1) % frames.length;
  document.getElementById("comicImage").src = frames[currentFrame];
}
