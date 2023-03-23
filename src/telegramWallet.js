import Parallaxy from "parallaxy-img";

import "./styles/main.scss";

const parallaxy = new Parallaxy({
  element: document.getElementById("my-sticky-element"),
  'y': {
      speed: 0.5,
      invert: false,
      overflow: false
  },
  'x':{
      speed: 0.2,
      invert: false,
      overflow: false
  },
  axes: 200, //What is the axes of the parallax in px ? By default it's the middle screen
  breakPoint: "(max-width: 600px)", //Will stop parallax on mobile for example (default is false)
  scale: 1.5 //Need to be >= 1
});