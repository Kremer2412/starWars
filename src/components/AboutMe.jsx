import {base_Url} from "../utils/constants.js";
import {useEffect, useState} from "react";
import {aboutMeItems} from "../utils/constants.js";
import Spinner from "./Spinner.jsx";



const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState('');

    useEffect(() => {
        fetch(`${base_Url}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => setAboutMe(data));
        return () => console.log('AboutMe was unmounted!');
    }, [])


    if (aboutMe) {
        return (
            <div className="farGalaxy ">
                {aboutMeItems.map((key) => (<p>{key}: {aboutMe[key]}</p>))}
            </div>
        )
    }
    else {
        return (<Spinner/>)
    }
};

export default AboutMe;