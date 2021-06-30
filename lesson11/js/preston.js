/* document.getElementById("primaryNav").classList.toggle("hide"); */
const navbutton = document.querySelector(".hambutton");
const mainnav = document.querySelector(".primaryNav");

navbutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("hide");
};

/* Current Date */
const datefield = document.querySelector("date");

const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
datefield.textContent = fulldate;

let pancakebanner =
  now.getDay() == 5
    ? (document.querySelector(".pancake_banner").style.display = "block")
    : (document.querySelector(".pancake_banner").style.display = "none");
