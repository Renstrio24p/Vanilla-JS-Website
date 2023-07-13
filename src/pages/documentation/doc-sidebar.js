import { cd } from "../../start";

export default function DocSidebar(Side) {
    Side.innerHTML = (
        `
        <div class="${cd('documentation')}">
            <div class="${cd('sidebar')}">
                <ul class="${cd('sidebar-menu')}">
                    <li class="${cd('menu-item')}">
                        <a href="#">Home</a>
                    </li>
                    <li class="${cd('menu-item')}">
                        <a href="#">About</a>
                    </li>
                    <li class="${cd('menu-item')} ${cd('has-children')}">
                        <a href="#">Services</a>
                        <ul class="${cd('sub-menu')}">
                            <li><a href="#">Service 1</a></li>
                            <li><a href="#">Service 2</a></li>
                            <li><a href="#">Service 3</a></li>
                        </ul>
                    </li>
                    <li class="${cd('menu-item')}">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="${cd('main')}">
                <!-- Main content here -->
            </div>
        </div>
        `
    );
}
