const header = document.getElementById("headerSlideIn");
const toggleClass = "stickyHeader";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
    header.classList.add("bg-no")
  } else {
    header.classList.remove(toggleClass);
    header.classList.remove("bg-no")
  }
});