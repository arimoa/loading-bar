const titleEl = document.getElementById("title");
const innerEl = document.getElementById("inner");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let isLoading = false;

function loadingFunction(j) {
  innerEl.style.width = j + "%";
  titleEl.innerHTML = j + "%";
  containerEl.style.borderColor = `rgba(231, 76, 60,${j / 100})`;
  j = j + 1;
  if (j < 101) {
    setTimeout(function () {
      loadingFunction(j);
    }, 30);
  } else {
    isLoading = false;
  }
}

btnEl.addEventListener("click", () => {
  if (!isLoading) {
    isLoading = true;
    let i = 0;
    loadingFunction(i);
  }
});
