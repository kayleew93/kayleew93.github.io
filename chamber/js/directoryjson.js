fetch("/chamber/json/directory.json")
  .then((response) => response.json())
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];

    businesses.forEach((business) => {
        
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let link = document.createElement("p");
        let logo = document.createElement("img");

        name.textContent = `${business.name}`;
        phone.textContent = `${business.phone}`;
        address.textContent = `${business.address}`;
        link.textContent = `${business.link}`;
        logo.setAttribute("src", `images/${business.logo}`);
        logo.setAttribute("alt", `${business.name} logo`);

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(link);

        document.querySelector("div.buscards").appendChild(card);
      });
    });
