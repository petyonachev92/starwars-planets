/**
 * Here you can define helper functions to use across your app.
 */

import Application from './Application.js'


async function getSWPlanets() {
    try{
        let count = 0;
        let planets = [];
        const apiPlanets = await fetch('https://swapi.dev/api/planets/');
        const planetsJson = await apiPlanets.json()
        count = planetsJson.count
        planets = planetsJson.results
        const starwarsPlanets = new Application(count, planets);
        
        console.log(count)
        console.log(planets)
    }
    catch (err) {
        console.error(err)
    }
}

getSWPlanets()