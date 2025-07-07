
import {useEffect, useState} from "react";
import {base_Url} from "../utils/constants.js";
import Spinner from "./Spinner.jsx";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl]= useState('');

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6) + 1;
        fetch(`${base_Url}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl));
        return () => console.log('openingCrawl was unmounted!');
    }, []);
    if (openingCrawl) {
        return (<p className="farGalaxy">{openingCrawl}</p>)
    }
    else {
        return (<Spinner/>)
    }

};

export default OpeningCrawl;