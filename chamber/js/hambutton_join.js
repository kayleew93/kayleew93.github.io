const navbutton1 = document.querySelector('.hambutton');
const mainnav1 = document.querySelector('.primaryNav');
const joinbutton1 = document.querySelector('.join_button');

// toggle presence of button
navbutton1.addEventListener("click", function () {
    if (mainnav.classList == "primaryNav responsive") {
      joinbutton1.style.display='none';
    } else {
        joinbutton1.style.display='block';
    }
  });