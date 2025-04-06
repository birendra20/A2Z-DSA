/*

**Promises Handling:**

•	Given two APIs: One for **states** and another for **cities**.

•	Use **Promise.all()** to get all cities for a particular country.



// States API response
getStates('USA') -> ['CA', 'NY', 'WA']

// City API response
getCities('CA') -> ['LA', 'SF', 'SD']
getCities('NY') -> ['LA1', 'SF1', 'SD1']
getCities('WA') -> ['LA2', 'SF2', 'SD2']

// Expected Output
getAllCities('USA') -> [
  'LA', 'SF', 'SD',
  'LA1', 'SF1', 'SD1',
  'LA2', 'SF2', 'SD2'
];



*/

//mock api

function getStates(country) {
  return Promise.resolve(["CA", "NY", "WA"]);
}

function getCities(state) {
  const cities = {
    CA: ["LA", "SF", "SD"],
    NY: ["LA1", "SF1", "SD1"],
    WA: ["LA2", "SF2", "SD2"],
  };
  return Promise.resolve(cities[state]);
}

// console.log(getStates("NY"));
// Function to get all cities using Promise.all()
async function getAllCities(country) {
  try {
    const states = await getStates(country);
    console.log("States:", states);

    const citiesArray = await Promise.all(
      states.map((state) => getCities(state))
    );
    console.log("Cities Array:", citiesArray);

    return citiesArray.flat(); // Merge all city arrays into one
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
}

// Call the function and log the result
getAllCities("USA").then((cities) => console.log("All Cities:", cities));
