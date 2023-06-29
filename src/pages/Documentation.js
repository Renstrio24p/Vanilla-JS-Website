import { cd } from "../start";


export default function DocsPage(Doc){

    Doc.innerHTML = (
        `
            <div class=${cd('documentation')}>
                <aside id='doc-sidebar' class=${cd('sidebar')}></aside>
                <div>Main Content</div>
            </div>
        `
    )

}