// set Interval
const body = document.body;
const id = setInterval(() => {
  const red = Math.floor(Math.random() * 126);
  const green = Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  const rgb = `rgb(${red},${green},${blue})`;
  body.style.background = `${rgb}`;
}, 1000);

const button = document.querySelector("button");
button.addEventListener("click",()=> {
  clearInterval(id);
  button.textContent=body.style.background;
});

