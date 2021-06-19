const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject["towns"];

    const idaho = town.filter(town => town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven");

    idaho.forEach(town => {
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let motto = document.createElement("h3");
      let yearfounded = document.createElement("p");
      let population = document.createElement("p");
      let rainfall = document.createElement("p");
      let image = document.createElement("img");

      name.textContent = `${town.name}`;
      motto.textContent = `${town.motto}`;
      yearfounded.textContent = `Founded: ${town.yearFounded}`;
      population.textContent = `Population: ${town.currentPopulation}`;
      rainfall.textContent = `Annual Rainfall: ${town.averageRainfall}in`;
      image.setAttribute("src", `image/${town.photo}`);
      image.setAttribute(
        "alt",
        `${town.name} photo`
      );
      console.log(image.src)
      card.appendChild(name);
      card.appendChild(motto);
      card.appendChild(yearfounded);
      card.appendChild(population);
      card.appendChild(rainfall);


      document.querySelector("div.town_section").appendChild(card);
    })
  });