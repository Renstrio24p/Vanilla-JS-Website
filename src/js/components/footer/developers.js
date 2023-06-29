import { cx } from "../../../start"

export default function Footer_Dev(Dev){

    Dev.innerHTML = (
        `
            <h2>Font-End Developer</h2>
            <p class=${cx('links')}>
                We Design a template that serve as an open-source framework with routing system.
                it has a rendering method, styling design for UI/UX Design. to make SEO Optimized by using
                Hardcoded Vanilla Javascript code.
            </p>
        `
    )

}