import DocSidebar from "../../pages/documentation/doc-sidebar";
import UniqueHash from "../../security/HashCode";

export default function Content_Render(){

    const Sidebar = document.getElementById('doc-sidebar');

    window.addEventListener("DOMContentLoaded", () => {
      Sidebar.id = UniqueHash();
   })

   DocSidebar(Sidebar);

}