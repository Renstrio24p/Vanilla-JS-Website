import { cx } from "../../../start";

export default function Footer_ContactUS(Contact){

    Contact.innerHTML = (
        `
            <div>
                <h2>News Letters</h2>
                <form class=${cx('d-flex-gap-5')}>
                    <img class=${cx('email-icon')} src='./src/images/icons/email.webp' alt="email icon" />
                    <div class=${cx('d-flex-gap-5')}>
                        <input class=${cx('footer-input')} type='email' name='email' placeholder='abc@domain.com' />
                        <button class=${cx('subscribe-btn')} type='submit'> Subscribe</button>
                    </div>
                </form>
            </div>

            <ul class=${cx('d-flex-gap-10-left')}>
                <li class=${cx('pad-5')}>
                   <img class=${cx('footer-icons')} src='./src/images/icons/collab.webp' alt="collab icon" />
                </li>
                <li class=${cx('pad-5')}>
                   <img class=${cx('footer-icons')} src='./src/images/icons/linkedin.webp' alt="linkedin icon" />
                </li>
                <li class=${cx('pad-5')}>
                   <img class=${cx('footer-icons')} src='./src/images/icons/github.webp' alt="github icon" />
                </li>
            </ul>
        `
    )
}