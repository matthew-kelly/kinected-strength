// const preventScroll = (event) => {
//   event.preventDefault();
//   event.stopPropagation();

//   return false;
// };

const disableScroll = (detail) => {
  // console.log("scroll disabled");
  document.body.classList.add("stop-scrolling");
  if (detail === "menu") {
    document.body.classList.add("menu-open");
  }
  // document.body.addEventListener("wheel", preventScroll, { passive: false });
};

const enableScroll = () => {
  // console.log("scroll enabled");
  document.body.classList.remove("stop-scrolling", "menu-open");
  // document.body.removeEventListener("wheel", preventScroll);
};

export { disableScroll, enableScroll };
