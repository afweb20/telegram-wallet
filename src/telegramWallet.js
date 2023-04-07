import "animate.css";
import "./styles/main.scss";

import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import Webcam from "@uppy/webcam";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";

new Uppy()
  .use(Dashboard, { inline: true, target: "body" })
  .use(Webcam, { target: Dashboard });