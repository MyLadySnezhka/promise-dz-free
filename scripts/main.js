const planetsLnk = document.querySelector('select');
const charLnk = document.querySelector('.characters');

let charPl;
let name, diameter, climate, gravity, population, rotation_period, orbital_period, terrain, surface_water, created, edited, url;
let opis;
let i, link;


const init = async (i) => {

    link = `https://swapi.dev/api/planets/${i}/`;
    const result = await axios.get(link);
    charPl = result.data;
    opis = `<h1>${charPl.name}</h1>
        diameter: ${charPl.diameter}<br>
        climate: ${charPl.climate}<br>
        gravity: ${charPl.gravity}<br>
        rotation_period: ${charPl.rotation_period}<br>
        orbital_period: ${charPl.orbital_period}<br>
        terrain: ${charPl.terrain}<br>
        surface_water: ${charPl.surface_water}<br>
        population: ${charPl.population}<br>
        created: ${charPl.created}<br>
        edited: ${charPl.edited}<br>
        url: ${charPl.url}`;
  
}

const preloader = () => {
    const elem = document.createElement('div');
    elem.className = 'animation';
    charLnk.appendChild(elem);
}

planetsLnk.addEventListener('change', async (ev) => {
    i = ev.target.value;
    if (i==='') {
        charLnk.innerHTML='Выберите нужную планету из выпадающего списка слева...';
        return;
    }
    preloader();
    await init(i);
    console.log(i, opis);
    charLnk.innerHTML = opis;
})

