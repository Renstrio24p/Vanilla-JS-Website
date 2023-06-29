import { Main_Router } from "./main.route";

export function Render_Router(Nav){

    function handleNavigation(event) {
        event.preventDefault();
        const route = event.target.getAttribute('href').substring(1);
        const routeDiv = document.getElementById('route');
        window.location.hash = route;
        Main_Router(route, routeDiv);
      }
    
      const links = Nav.querySelectorAll('a');
      links.forEach((link) => {
        link.addEventListener('click', handleNavigation);
      });
}