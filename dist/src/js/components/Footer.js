import Footer_Render from "../../render/footer.render";
import { cx } from "../../start";

export default function Footer(Foot){

    Foot.innerHTML = (
        `
            <div class=${cx('footer-container')}>
                <div class=${cx('top-footer')}>
                        <div class=${cx('d-flex-w-max')}>
                            <div id='developers'></div>
                            <div id='webstacks'></div>
                        </div>
                    <div class=${cx('divider')}></div>
                    <div class=${cx('d-flex-w-max')}>
                        <div id='collab'></div>
                    </div>
                    <div class=${cx('divider')}></div>
                    <div class=${cx('d-flex-w-half')}>
                        <div id='contact-us'></div>
                        <div class=${cx('d-flex-gap-30')}>
                            <div id='links'></div>
                            <div id='copyright'></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    )

    Footer_Render();

}