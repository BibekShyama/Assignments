let menuSection = document.querySelector(".navbar");
let isShow = true;
function showHideMenu() {
  if (isShow) {
    menuSection.style.display = "none";
    isShow = false;
  } else {
    menuSection.style.display = "block";
    isShow = true;
  }
}
