/**
 * Here you can define helper functions to use across your app.
 */

async function getSWPlanetsCount() {
    try{
        const apiPlanets = await fetch('https://swapi.dev/api/planets/');
        const planetsJson = await apiPlanets.json()
        let count = planetsJson.count

        return count
    }
    catch (err) {
        console.error(err)
    }
}

async function getSWPlanets() {
    try{
        const apiPlanets = await fetch('https://swapi.dev/api/planets/');
        const planetsJson = await apiPlanets.json()
        let planets = planetsJson.results

        return planets
    }
    catch (err) {
        console.error(err)
    }
}

export { getSWPlanetsCount, getSWPlanets };