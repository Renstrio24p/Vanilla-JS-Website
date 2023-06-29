import AboutUS from "../../pages/AboutUS";
import DocsPage from "../../pages/Documentation";
import HomePage from "../../pages/Home";

export function Main_Router(route, routeDiv) {

    if (route === 'Documentation') {
        DocsPage(routeDiv);
      } else if (route === 'AboutUS') {
        AboutUS(routeDiv);
      } else {
        return HomePage(routeDiv);
      }
}
