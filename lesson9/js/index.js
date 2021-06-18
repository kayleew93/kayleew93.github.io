const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject["towns"];

    const idaho = towns.filter(town => town.name == "Preston" || towns.name == "Soda Springs" || towns.name == "Fish Haven");

    for (let i = 0; i < prophets.length; i++) {
      const prophets = jsonObject["prophets"];
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let birthdate = document.createElement("p");
      let birthplace = document.createElement("p");
      let image = document.createElement("img");

      h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
      birthdate.textContent = `Date of Birth: ${prophets[i].birthdate}`;
      birthplace.textContent = `Place of Birth: ${prophets[i].birthplace}`;
      image.setAttribute("src", `image/${town.photo}`);
      image.setAttribute(
        "alt",
        `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`
      );

      card.appendChild(h2);
      card.appendChild(birthdate);
      card.appendChild(birthplace);
      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
    }
  });
