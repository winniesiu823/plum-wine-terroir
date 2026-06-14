const timelineEntries = [
  { day: "DAY 2", date: "2026.04.21", image: "20260421_031808.jpg", note: "梅子與糖水開始共處於玻璃罐中。" },
  { day: "DAY 3", date: "2026.04.21", image: "20260421_114826.jpg", note: "罐壁出現水氣，酒體開始產生變化。" },
  { day: "DAY 6", date: "2026.04.26", image: "20260426_010708.jpg", note: "發酵持續，氣泡與液體顏色逐漸改變。" },
  { day: "DAY 9", date: "2026.04.28", image: "20260428_234253.jpg", note: "梅子與液體的界線逐漸模糊。" },
  { day: "DAY 12", date: "2026.05.01", image: "20260501_045004.jpg", note: "液體呈現較深的琥珀色，外觀變化開始不像最初明顯。" },
  { day: "DAY 25", date: "2026.05.14", image: "463375.jpg", note: "完成裝瓶並實際試喝。" }
];

const timeline = document.querySelector("#timeline");
timelineEntries.forEach(({ day, date, image, note }) => {
  const card = document.createElement("article");
  card.className = "timeline-node";
  card.innerHTML = `
    <img class="timeline-photo" src="assets/photos/${image}" alt="${day} 的梅酒觀察照片" loading="lazy">
    <span class="timeline-dot" aria-hidden="true"></span>
    <div class="timeline-copy">
      <p class="timeline-day">${day}</p>
      <p class="timeline-note">${note}</p>
    </div>`;
  timeline.append(card);
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("open");
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});
