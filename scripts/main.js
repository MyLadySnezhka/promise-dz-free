const planetsLnk = document.querySelector('select');
const charLnk = document.querySelector('.characters');
const animLnk = document.querySelector('.animation');

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
    const elem1 = document.createElement('div');
    elem1.className = 'block1';
    animLnk.appendChild(elem1);
    const elem2 = document.createElement('div');
    elem2.className = 'block2';
    animLnk.appendChild(elem2);
}

planetsLnk.addEventListener('change', async (ev) => {
    animLnk.innerHTML = '';
    i = ev.target.value;
    if (i==='') {
        animLnk.innerHTML= `Выберите нужную планету из выпадающего списка слева...<br><br><br><img src="./images/planets.png">`;
        return;
    }
    preloader();
    await init(i);
    animLnk.innerHTML = opis;
    
})

