const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let sliderNumber = 1;
const length = images.length;

for (i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    console.log("i: " + i);
    slider.style.transform = `translateX(-${i * 800}px)`;
    sliderNumber = i + 1;
    console.log("SliderNumber: " + sliderNumber);
    button.style.backgroundColor = "white";
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
  sliderNumber++;
  console.log("nextSlide: " + sliderNumber);
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
  sliderNumber--;
  console.log("PrevSlide: " + sliderNumber);
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  console.log("firstSlide: " + sliderNumber);
  sliderNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  sliderNumber = length;
  console.log("nextSlide: " + sliderNumber);
};

const changeColor = () => {
  resetBg();
  buttons[sliderNumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
  sliderNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});
