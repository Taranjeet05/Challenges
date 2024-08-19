console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();

        console.log("Fetched Data:", data);
        console.log("First Character:", data.results[0]);
        console.log("Name of First Character:", data.results[0].name);

        const r2d2 = data.results.find(character => character.name === "R2-D2");
        if (r2d2) {
              console.log("R2-D2's Eye Color:", r2d2.eye_color);
          } else {
              console.log("R2-D2 not found.");
          }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

fetchData();
