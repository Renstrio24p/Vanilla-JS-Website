import Home_Render from "../render/Home/main.render";
import { cx } from "../start";

export default function HomePage(Home){

    Home.innerHTML = (
        `
            <div id='home' class=${cx('home')}></div>
            <div id='about' class=${cx('about')}></div>
            <div id='intro-js' class=${cx('intro')}></div>
        `
    )

    Home_Render();

}
