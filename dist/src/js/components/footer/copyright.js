import { cx } from "../../../start";

export default function Footer_Copyright(Copyright){

    Copyright.innerHTML = (
        `
            <span class=${cx('links')}> &copy; All rights reserved 2023
        `
    )
}