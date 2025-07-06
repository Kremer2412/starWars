
const DreamTeamImageStyles = ({src, index}) => {
    let className = "col-sm-4 p-1";
    if (index === 6 ) className += " leftImg";
    if (index === 8) className += " rightImg";
    return <img src={src} className={className}/>;
};



export default DreamTeamImageStyles;