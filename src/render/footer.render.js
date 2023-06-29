
import Footer_ContactUS from "../js/components/footer/contactus";
import Footer_Collaboration from "../js/components/footer/collaboration";
import UniqueHash from "../security/HashCode";
import Footer_WebStack from "../js/components/footer/web-stacks";
import Footer_Links from "../js/components/footer/links";
import Footer_Dev from "../js/components/footer/developers";
import Footer_Copyright from "../js/components/footer/copyright";

export default function Footer_Render(){

    const Collaboraton = document.getElementById('collab');
    const ContactUS = document.getElementById('contact-us');
    const Webstacks = document.getElementById('webstacks');
    const Links = document.getElementById('links');
    const Devs = document.getElementById('developers');
    const Copyright = document.getElementById('copyright');

    window.addEventListener('DOMContentLoaded', () => {
        Collaboraton.id = UniqueHash();
        ContactUS.id = UniqueHash();
        Webstacks.id = UniqueHash();
        Links.id = UniqueHash();
        Devs.id = UniqueHash();
        Copyright.id = UniqueHash();
    })

    Footer_Collaboration(Collaboraton);
    Footer_ContactUS(ContactUS);
    Footer_WebStack(Webstacks);
    Footer_Links(Links);
    Footer_Dev(Devs);
    Footer_Copyright(Copyright);
}