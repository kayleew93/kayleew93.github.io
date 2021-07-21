fetch("/chamber/json/upcomingevents.json")
  .then((response) => response.json())
  .then(function (jsonObject) {
    const events = jsonObject["events"];

    events.forEach((event) => {
      let card = document.createElement("li");
      let name = document.createElement("h4");
      let date = document.createElement("p");
      let description = document.createElement("p");
      let link = document.createElement("a");
      link.setAttribute("href", `${event.link}`);
      link.setAttribute("target", "_blank");
      link.innerText = "More info";
      
      name.textContent = `${event.name}`;
      date.textContent = `${event.date}`;
      description.textContent = `${event.description}`;
      
      card.appendChild(name);
      card.appendChild(date);
      card.appendChild(description);
      card.appendChild(link);

      document.querySelector(".upcoming_events").appendChild(card);

    });
  });
