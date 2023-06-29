import { cx } from "../../../start"

export default function Footer_Links(Link) {

    Link.innerHTML = (
        `
            <h2>Links</h2>
            <ul>
                <li class=${cx('links')}>F.A.Q</li>
                <li class=${cx('links')}>Cookie Policies</li>
                <li class=${cx('links')}>Terms of Service</li>
                <li class=${cx('links')}>Support</li>
            </ul>
        `
    )

}