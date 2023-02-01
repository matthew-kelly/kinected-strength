// const preventScroll = (event) => {
//   event.preventDefault();
//   event.stopPropagation();

//   return false;
// };

const disableScroll = () => {
  // console.log("scroll disabled");
  document.body.classList.add("stop-scrolling");
  // document.body.addEventListener("wheel", preventScroll, { passive: false });
};

const enableScroll = () => {
  // console.log("scroll enabled");
  document.body.classList.remove("stop-scrolling");
  // document.body.removeEventListener("wheel", preventScroll);
};

export { disableScroll, enableScroll };
