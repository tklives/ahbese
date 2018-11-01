// import polyfill from './modules/polyfills';
import { docReady } from './modules/utilities';

class App {
  constructor() {
    this.addEventListeners();
    this.addInitializers();
  }

  addEventListeners() {
  }

  addInitializers() {
    setInterval(this.updateBackground, 1000 * 30);
    this.updateBackground();
  }

  updateBackground() {
    console.log("running...");
    var hr = (new Date()).getHours();
    var hdg = document.querySelector('.hdg--1');
    var body = document.body;
    var bstyle = body.style;    
    if (hr < 7 || hr >= 20) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    } 
  }
}

docReady(() => {
  const app = new App();
});


