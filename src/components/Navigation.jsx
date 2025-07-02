import NavItem from "./NavItem.jsx";
import navItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul className="nav fixed-top mt-1 ms-3">
                    {navItems.map(item => <NavItem itemTitle={item} key={item} />)}
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;