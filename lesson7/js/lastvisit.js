/* ----- Get how many days since last visit ----- */


window.onload = function() {

    // function to calculate days between visits
    function daysBetween(start, end) {

        const oneDay = 1000 * 60 * 60 * 24;

        const diffInTime = start - end;

        const diffInDays = Math.round(diffInTime / oneDay) - 1;

        return diffInDays
    }

    // Check browser support
    if (typeof(Storage) != "undefined") {

        let newVisitDate = new Date();

        newVisit = newVisitDate.getTime();

        // DELETE LATER: TESTING
        console.log("What is the value of last visit");
        console.log(typeof lastVisit);
        console.log(typeof localStorage.getItem("lrecentVisit"));

        if (typeof localStorage.getItem("recentVisit") != "string") {
            // outputs number of days since last visit
            document.querySelector(".lastvisit").innerText = daysBetween(newVisit, lastVisit);

            // reassign last visit
            let lastVisit = newVisit;

            // Store recent visit
            localStorage.setItem("recentVisit", lastVisit);

        } else {

            let lastVisit = newVisit;

            // Store recent visit
            localStorage.setItem("recentVisit", lastVisit);

            document.querySelector(".lastvisit").innerText = "First visit! Welcome!";

            // DELETE LATER -- CHECKS TO MAKE SURE VALUE WAS REASSIGNED
            console.log(lastVisit);
            console.log(localStorage.getItem("recentVisit"));
            console.log(typeof lastVisit);

    }} else {
        document.querySelector(".lastvisit").innerText = "Sorry, your browser does not support Web Storage...";
    
}}