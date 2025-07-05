const DreamTeamImages = ({images}) => {
    return (
        <>
            {images.map((src, index) => {
                let className = "col-sm-4 p-1";
                if (index === 6 ) className += " leftImg";
                if (index === 8) className += " rightImg";
                return <img key={index} src={src} className={className}/>;
            })}
        </>
    );
};

export default DreamTeamImages;