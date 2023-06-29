import { Render_Router } from "../routes/Home/nav.route";
import { cx } from "../start";


export default function Navbar(Nav){

    Nav.innerHTML = (
        `
            <div class=${cx('logo-container')}>
                <img class=${cx('logo')}  src='./src/images/javascript.webp' alt='brand logo' />
                <p> Javascript Fundamentals </p>
            </div>

            <ul class=${cx('nav-links')}>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#Documentation'>Documentation</a></li>
                <li><a href='#AboutUS'>AboutUS</a></li>
            </ul>
        `
    )

    Render_Router(Nav);

}