import Content_Render from "../render/Documentation/content.render";
import { cd } from "../start";


export default function DocsPage(Doc){

    Doc.innerHTML = (
        `
            <div class=${cd('documentation')}>
                <aside id='doc-sidebar' class=${cd('sidebar')}></aside>
                <div class=${cd('doc-body')}>Main Content test</div>
            </div>
        `
    )

    Content_Render();

}