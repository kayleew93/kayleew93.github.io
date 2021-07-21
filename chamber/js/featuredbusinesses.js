fetch("/chamber/json/directory.json")
  .then((response) => response.json())
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];

    businesses.slice(0,3).forEach((business) => {
        
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
        logo.setAttribute("width", `${business.width}`);
        logo.setAttribute("height", `${business.height}`);
        logo.style.width = "100px";

        photobox.appendChild(logo);

        card.appendChild(photobox);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(link);

        document.querySelector(".featured_companies").appendChild(card);
      });
    });
