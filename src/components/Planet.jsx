import {useEffect, useState} from "react";
import {base_Url} from "../utils/constants.js";

const Planet = () => {
    const [planet, setPlanet] = useState([]);
    useEffect(() => {
    fetch(`${base_Url}/v1/planets`)
        .then(res => res.json())
        .then(data => setPlanet(data));
    return () => console.log('Planets was unmounted!');
    }, [])
    return (
        <div>
            <select id="country" name="country">
                {planet.map(planet => (
                    <option key={planet.id} value={planet.name}>{planet.name}</option>
                ))}
            </select>
        </div>
    );
};

export default Planet;