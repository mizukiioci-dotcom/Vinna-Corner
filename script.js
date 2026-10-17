// ---------- Change Text ----------
const descriptions = [
  "Hi! I’m a curious soul who loves quiet evenings, soft melodies, and a good story.",
  "I believe a little music, a little movement, and a lot of books can make any day beautiful.",
  "Chasing sunsets, playing piano, and always looking for the next chapter to read."
];
let textIndex = 0;

const description = document.querySelector("#description");
const textBtn = document.querySelector("#textBtn");

textBtn.addEventListener("click", function () {
  textIndex = (textIndex + 1) % descriptions.length;
  description.textContent = descriptions[textIndex];
});

// ---------- Switch Theme ----------
const themeBtn = document.querySelector("#themeBtn");

function updateThemeButton() {
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "☀️ Switch to Sunset" : "🌙 Switch to Night";
}

// Remember the last theme (optional, safe if storage is blocked)
try {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
} catch (e) {}
updateThemeButton();

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  updateThemeButton();
  try {
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  } catch (e) {}
});