
import { cx } from "../../../start";

export default function Footer_WebStack(Webstacks){

    Webstacks.innerHTML = (
        `
        <h2>Stacks</h2>
        <ul class=${cx('d-grid-gap-10-left')}>
            <li>
                <div class=${cx('d-flex-gap-5')}>
                    <img class=${cx('footer-icon-stacks')} src='./src/images/webpack.webp' alt='webpack logo' />
                    <span class=${cx('stacks-name')}>Webpack </span>
                </div>
            </li>
            <li>
                <div class=${cx('d-flex-gap-5')}>
                    <img class=${cx('footer-icon-stacks')} src='./src/images/sass.webp' alt='sass logo' />
                    <span class=${cx('stacks-name')}>Sass </span>
                </div>
            </li>
            <li>
                <div class=${cx('d-flex-gap-5')}>
                    <img class=${cx('footer-icon-stacks')} src='./src/images/javascript.webp' alt='javascript logo' />
                    <span class=${cx('stacks-name')}>Javascript ES6 </span>
                </div>
            </li>
            <li>
                <div class=${cx('d-flex-gap-5')}>
                    <img class=${cx('footer-icon-stacks')} src='./src/images/nodejs.webp' alt='nodejs logo' />
                    <span class=${cx('stacks-name')}>Node JS </span>
                </div>
            </li>
        </ul>
        `
    )

}
