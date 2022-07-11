let charPl;
let name, diameter, climate, gravity, population;
let opis;
let i, link;


const init = async (i) => {

    link = `https://swapi.dev/api/planets/${i}/`;
    const result = await axios.get(link);
    charPl = result.data;
    opis = `<h1>${charPl.name}</h1>diameter: ${charPl.diameter}<br>climate: ${charPl.climate}<br>gravity: ${charPl.gravity}<br>population: ${charPl.population}`;
  
}

const planetsLnk = document.querySelector('select');
const charLnk = document.querySelector('.characters');

planetsLnk.addEventListener('change', (ev) => {
    i = ev.target.value;
    init(i);
    charLnk.innerHTML = opis;
})

