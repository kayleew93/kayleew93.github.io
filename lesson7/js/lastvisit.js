/* ----- Get how many days since last visit ----- */

/*
function onVisited(historyItem) {
    console.log(historyItem.url);
    console.log(new Date(historyItem.lastVisitTime));
  }
  
  chrome.history.onVisited.addListener(onVisited);
*/




// function to calculate days between visits
function daysBetween(start, end) {

    const oneDay = 1000 * 60; // * 60 * 24

    const diffInTime = start - end;

    const diffInDays = Math.round(diffInTime / oneDay); // -1

    return diffInDays
}

let lastVisit = 0

// Check browser support
if (typeof(Storage) !== "undefined") {

    let newVisitDate = new Date();

    newVisit = newVisitDate.getTime();

    // outputs number of days since last visit
    document.querySelector(".lastvisit").innerText = daysBetween(newVisit, lastVisit);

    // reassign last visit
    lastVisit = newVisit

    // Store recent visit
    localStorage.setItem("recentVisit", lastVisit);

    // DELETE LATER -- CHECKS TO MAKE SURE VALUE WAS REASSIGNED
    console.log(localStorage.getItem("recentVisit"));

} else {
    document.querySelector(".lastvisit").innerText = "Sorry, your browser does not support Web Storage...";
  }