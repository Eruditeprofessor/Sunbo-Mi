const openHeart = document.getElementById("openHeart");
const story = document.getElementById("story");
const backTop = document.getElementById("backTop");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

openHeart.addEventListener("click", () => story.scrollIntoView({ behavior: "smooth" }));
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// The gallery works with your own files: images/photo-1.jpg through photo-6.jpg.
// If a file is missing, its elegant placeholder remains in place.
document.querySelectorAll(".photo-placeholder").forEach((tile) => {
  const path = tile.dataset.photo;
  const image = new Image();
  image.onload = () => {
    tile.style.backgroundImage = `linear-gradient(0deg, rgba(22,15,27,.28), rgba(22,15,27,0)), url("${path}")`;
    tile.classList.add("has-image");
  };
  image.onerror = () => {};
  image.src = path;

  tile.addEventListener("click", () => {
    if (!tile.classList.contains("has-image")) {
      alert(`Add your picture here:\n${path}\n\nCreate an "images" folder beside index.html and save your photo with this filename.`);
      return;
    }
    lightboxImage.src = path;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeImage() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}
closeLightbox.addEventListener("click", closeImage);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeImage();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeImage();
});

const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");
const blessings = [
  "May God go ahead of you, make crooked paths straight, and lead you into rooms where your gifts can grow. May this be a year of divine direction, good health, peace, and beautiful surprises.",
  "May the prayers you whisper when nobody is listening receive beautiful answers. May your efforts be rewarded, your heart be protected, and your future hold more joy than you can imagine.",
  "May you never be stranded for help, love, wisdom, or opportunity. May the right people recognise your light, and may you always have the courage to walk towards the life you dream of.",
  "May God bless you beyond what you can plan for yourself. May laughter fill your home, peace guard your heart, and favour meet you at every important turn. Happy birthday, Sunbo mi."
];
let blessingIndex = 0;
wishButton.addEventListener("click", () => {
  wishMessage.textContent = blessings[blessingIndex % blessings.length];
  blessingIndex += 1;
  wishButton.innerHTML = blessingIndex >= blessings.length ? "One more blessing ♡" : "Another blessing ♡";
});
