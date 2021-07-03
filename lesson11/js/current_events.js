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
