import {getSWPlanets, getSWPlanetsCount} from './app/utils.js';
import Application from './app/Application';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Application();

  app.data.count = getSWPlanetsCount()
  app.data.planets = getSWPlanets()

  console.log(app.data.count)
  console.log(app.data.planets)

  // Used for automated testing only
  if (process.env.NODE_ENV === 'development') {
    window.__JS_APP = app;
  }
});
