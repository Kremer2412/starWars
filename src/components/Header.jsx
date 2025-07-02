import Navigation from "./Navigation.jsx";

const Header = () => {
    return (
        <div>
            <header className="rounded-top-4 mb-1">
               <Navigation/>
                <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
            </header>
        </div>
    );
};

export default Header;