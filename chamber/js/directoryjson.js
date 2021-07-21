// change to a list
let directory_toggle = document.querySelector(".directory_grid");
let buscards = document.querySelector(".buscards");

directory_toggle.addEventListener("click", function () {
  if (directory_toggle.innerText === "view list") {
    directory_toggle.innerText = "view grid";
    buscards.classList.toggle("buscards_l");
    buscards.classList.remove("buscards_g");
  } else {
    directory_toggle.innerText = "view grid";
    directory_toggle.innerText = "view list";
    buscards.classList.remove("buscards_l");
    buscards.classList.toggle("buscards_g");
  }
});

// get JSON

fetch("/chamber/json/directory.json")
  .then((response) => response.json())
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];

    businesses.forEach((business) => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let phone = document.createElement("p");
      let address = document.createElement("p");
      let link = document.createElement("a");
      link.setAttribute("href", `${business.link}`);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.innerText = "Website";
      let photobox = document.createElement("div");
      let logo = document.createElement("img");

      name.textContent = `${business.name}`;
      phone.textContent = `${business.phone}`;
      address.textContent = `${business.address}`;
      logo.setAttribute("src", `images/${business.logo}`);
      logo.setAttribute("alt", `${business.name} logo`);
      logo.style.width = "100px";

      photobox.appendChild(logo);

      card.appendChild(photobox);
      card.appendChild(name);
      card.appendChild(phone);
      card.appendChild(address);
      card.appendChild(link);

      document.querySelector("div.buscards").appendChild(card);
    });
  });
