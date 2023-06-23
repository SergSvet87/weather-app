import { cityServiceSearch } from "./modules/cityServiceSearch.js";
import { startWidget } from "./modules/widgetService.js";

const init = () => {
  const app = document.getElementById("app");

  startWidget().then((widget) => {
    app.append(widget);

    cityServiceSearch(widget);
  });
};

init();
