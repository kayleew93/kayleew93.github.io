fetch("/chamber/json/boardofdirectors.json")
  .then((response) => response.json())
  .then(function (jsonObject) {
    const boardmembers = jsonObject["boardmembers"];

    boardmembers.forEach((member) => {
      let card = document.createElement("section");
      let name = document.createElement("p");
      let position = document.createElement("h3");
      let headshot = document.createElement("img");

      headshot.setAttribute("src", `images/${member.photo}`);
      headshot.setAttribute("class", "smallimg");
      headshot.setAttribute("alt", `${member.name}'s photo`);
      headshot.setAttribute("width", "200px");
      headshot.setAttribute("height", "200px");
      headshot.setAttribute("loading", "lazy");
      
      name.textContent = `${member.name}`;
      position.textContent = `${member.position}`;
      
      card.appendChild(headshot);
      card.appendChild(position);
      card.appendChild(name);

      document.querySelector(".boardofdirectors").appendChild(card);

    });
  });
