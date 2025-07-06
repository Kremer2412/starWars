import DreamTeamImages from "./DreamTeamImages.jsx";
import {images} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <div>
            <section className="float-end w-50 row border rounded-bottom-4 me-0 ms-2">
                <h2 className="text-center">Dream Team</h2>
                <DreamTeamImages images={images}/>
            </section>
        </div>
    );
};

export default DreamTeam;