import o from "../js/components/footer/contactus";
import t from "../js/components/footer/collaboration";
import e from "../security/HashCode";
import n from "../js/components/footer/web-stacks";
import r from "../js/components/footer/links";
import m from "../js/components/footer/developers";
import s from "../js/components/footer/copyright";
export default function i() {
    let i = document.getElementById("collab"),
    d = document.getElementById("contact-us"),
    c = document.getElementById("webstacks"),
    p = document.getElementById("links"),
    l = document.getElementById("developers"),
    f = document.getElementById("copyright");
    
    window.addEventListener("DOMContentLoaded", () => {
         i.id = e(),
         d.id = e(),
         c.id = e(), 
         p.id = e(),
         l.id = e(),
         f.id = e() 
    }),
     t(i), 
     o(d),
     n(c),
     r(p), 
     m(l), 
     s(f)
     };