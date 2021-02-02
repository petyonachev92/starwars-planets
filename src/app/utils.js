/**
 * Here you can define helper functions to use across your app.
 */

async function getSWPlanetsCount() {
    try{

        const apiPlanetsCount = await fetch('https://swapi.booost.bg/api/planets/')
        const planetsCount = await apiPlanetsCount.json();
        const count = await planetsCount.count
        console.log(count);
    
        return count;
    }
    catch (err) {
        console.error(err)
    }
}

async function getSWPlanets() {
    try{
        const apiPlanets = await fetch('https://swapi.booost.bg/api/planets/');
        const planetsJson = await apiPlanets.json()
        let planets = planetsJson.results
        
        return planets
    }
    catch (err) {
        console.error(err)
    }
}

export { getSWPlanetsCount, getSWPlanets };