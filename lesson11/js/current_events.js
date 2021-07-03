const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

town = document.querySelector(".town_name").textContent;

if (town == "Preston, Idaho") {
    town_name = "Preston"
  }
  
  if (town == "Soda Springs, Idaho") {
    town_name = "Soda Springs"
  }
  
  if (town == "Fish Haven, Idaho") {
    town_name = "Fish Haven"
  }

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject["towns"];

    const idaho = town.filter(
      (town) =>
        town.name == town_name
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

      events_card.appendChild(ul);

      document.querySelector("div.town_page_events").appendChild(events_card);
    });
  });
