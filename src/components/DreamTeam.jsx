import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.jpg";
import friend4 from "../assets/friend4.jpg";
import friend6 from "../assets/friend6.jpg";
import friend5 from "../assets/friend5.jpg";
import friend7 from "../assets/friend7.jpg";
import friend8 from "../assets/friend8.jpg";
import friend9 from "../assets/friend9.jpg";

const DreamTeam = () => {
    return (
        <div>
            <section className="float-end w-50 row border rounded-bottom-4 me-0 ms-2">

                <h2 className="text-center">Dream Team</h2>

                <img className="col-sm-4 p-1" src={friend1}/>
                <img className="col-sm-4 p-1" src={friend2}/>
                <img className="col-sm-4 p-1" src={friend3}/>
                <img className="col-sm-4 p-1" src={friend4}/>
                <img className="col-sm-4 p-1" src={friend6}/>
                <img className="col-sm-4 p-1" src={friend5}/>
                <img className="leftImg col-sm-4 p-1" src={friend7}/>
                <img className="col-sm-4 p-1" src={friend8}/>
                <img className="rightImg col-sm-4 p-1" src={friend9}/>


            </section>
        </div>
    );
};

export default DreamTeam;