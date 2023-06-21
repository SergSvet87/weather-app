import { startWidget } from './modules/widgetService.js';

const init = () => {
  const app = document.getElementById("app");

  const widget = startWidget();

  app.append(widget);
};

init();
