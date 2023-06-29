import { DefaultPage } from "./components/Home/home"



export default function MainContent(Main) {

    Main.innerHTML = (
        `
        <div id='route'>
            <div id='default'></div>
        </div>
        `
    )

    DefaultPage();
}