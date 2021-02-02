/**
 * Here you can define helper functions to use across your app.
 */

async function getSWPlanetsCount() {
    try{

        const response = await fetch('https://swapi.booost.bg/api/planets/')
        const data = await response.json();
        const count = data.count
    
        return count;
    }
    catch (err) {
        console.error(err)
    }
}

async function getSWPlanets() {
    try{
        const response = await fetch('https://swapi.booost.bg/api/planets/')
        const data = await response.json();
        let planets = data.results
        
        return planets
    }
    catch (err) {
        console.error(err)
    }
}

export { getSWPlanetsCount, getSWPlanets };