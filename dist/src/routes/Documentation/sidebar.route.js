
export function Sidebar_Router(Sidebar){

    function handleNavigation(event) {
        event.preventDefault();
        const route = event.target.getAttribute('href').substring(1);
        const routeDiv = document.getElementById('route');
        window.location.hash = route;
        Main_Router(route, routeDiv);
      }
    
      const links = Sidebar.querySelectorAll('a');
      links.forEach((link) => {
        link.addEventListener('click', handleNavigation);
      });
}