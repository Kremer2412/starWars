import DreamTeamImageStyles from "./DreamTeamImageStyles.jsx";

const DreamTeamImages = ({images}) => {
    return (
        <>
            {images.map((src, index) => (<DreamTeamImageStyles key={index} src={src} index={index}/>))}
        </>
    );
};

export default DreamTeamImages;