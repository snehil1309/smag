console.log(
  "%cDeveloped by Snehil Sinha\nFrontend Developer @ Topia Lifescience Pvt. Ltd.",
  "color:rgba(255, 255, 255, 0); font-size: 16px; font-weight: bold;"
);

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const offcanvasNavbar = document.getElementById("offcanvasNavbar");

offcanvasNavbar.addEventListener("show.bs.offcanvas", () => {
  document.body.classList.add("offcanvas-open");
});

offcanvasNavbar.addEventListener("hide.bs.offcanvas", () => {
  document.body.classList.remove("offcanvas-open");
});
