const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject["towns"];

    const idaho = town.filter(
      (town) =>
        town.name == "Preston" ||
        town.name == "Soda Springs" ||
        town.name == "Fish Haven"
    );

    idaho.forEach((town) => {
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let motto = document.createElement("h3");
      let yearfounded = document.createElement("p");
      let population = document.createElement("p");
      let rainfall = document.createElement("p");
      let image = document.createElement("img");
      let text = document.createElement("div");

      name.textContent = `${town.name}`;
      motto.textContent = `${town.motto}`;
      yearfounded.textContent = `Founded: ${town.yearFounded}`;
      population.textContent = `Population: ${town.currentPopulation}`;
      rainfall.textContent = `Annual Rainfall: ${town.averageRainfall}in`;
      image.setAttribute("src", `images/${town.photo}`);
      image.setAttribute("alt", `${town.name} photo`);

      text.appendChild(name);
      text.appendChild(motto);
      text.appendChild(yearfounded);
      text.appendChild(population);
      text.appendChild(rainfall);
      card.appendChild(text);
      card.appendChild(image);

      document.querySelector("div.town_section").appendChild(card);

      // add events to an element
      let events_card = document.createElement("section");
      let events = document.createElement("p");
      let name2 = document.createElement("h4");
      events.textContent = `${town.events}`;

      events_array = events.innerText.split(",");

      ul = document.createElement("ul");
      events_array.forEach((event) => {
        li = document.createElement("li");
        li.textContent = event;
        ul.appendChild(li);
      });

      name2.textContent = `${town.name}`;
      events_card.appendChild(name2);
      events_card.appendChild(ul);

      document.querySelector("div.town_events").appendChild(events_card);
    });
  });
