
let pancakebanner =
  now.getDay() == 5
    ? (document.querySelector(".pancake_banner").style.display = "block")
    : (document.querySelector(".pancake_banner").style.display = "none");
