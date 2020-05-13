// TODO: add code here
window.addEventListener("load", function() {
    let URL = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(URL).then(function(response) {
        const jsonPromise = response.json();
        jsonPromise.then(function(json) {
            let header = document.getElementById("header1");
            header.innerHTML = `Astronauts: ${json.length}`;
            let container = document.getElementById("container");
            const sortedHours = json.sort((a, b) => b.hoursInSpace > a.hoursInSpace ? 1 : -1);
            for (let i = 0; i < json.length; i++) {
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
               `;
            }
        });
    });
});
