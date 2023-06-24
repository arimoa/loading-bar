var titleEl = document.getElementById("title");
var innerEl = document.getElementById("inner");
var btnEl = document.getElementById("btn");
var containerEl = document.getElementById("container");
function loadingFunction(j) {
  console.log(j);
  innerEl.style.width = j + "%";
  titleEl.innerHTML = j + "%";
  containerEl.style.borderColor = `rgba(231, 76, 60,${j / 100})`;
  j = j + 1;
  if (j < 101) {
    setTimeout(function () {
      loadingFunction(j);
    }, 30);
  }
}

btnEl.addEventListener("click", () => {
  let i = 0;
  loadingFunction(i);
});
