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
        let count = data.count
        let planets = []
        for(let i = 1; i <= 60; i++) {
            const resp = await fetch(`https://swapi.booost.bg/api/planets/${i}`)
            const data = await resp.json();
            planets.push(data)
        }
        
        return planets
    }
    catch (err) {
        console.error(err)
    }
}

export { getSWPlanetsCount, getSWPlanets };