import Application from './Application.js'

async function getSWPlanets() {
    try{
        let Application = new Application();
        const apiPlanets = await fetch('https://swapi.dev/api/planets/');
        const planetsJson = await apiPlanets.json()
        count = planetsJson.count
        planets = planetsJson.results

        console.log(count)
        console.log(planets)
    }
    catch (err) {
        console.error(err)
    }
}

export default getSWPlanets;