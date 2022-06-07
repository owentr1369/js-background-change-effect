const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const originalImg = document.querySelector("#originalImg");
const leftSpace = imgBox.offsetLeft;
const line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function (e) {
  var boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};
