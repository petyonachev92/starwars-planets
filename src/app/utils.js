/**
 * Here you can define helper functions to use across your app.
 */

function getSWPlanetsCount() {
    
    const planetsCount = fetch('https://swapi.booost.bg/api/planets/').then(r => r.json())
    .then(response => {
        return response.count
    });
    
    console.log(planetsCount);

    return planetsCount;
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