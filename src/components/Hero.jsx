import hero from "../assets/main.jpg";

const Hero = () => {
    return (
        <div>
            <section className="float-start w-25 me-3 ">
                <img className="w-100" src={hero} alt="Hero"/>

            </section>
        </div>
    );
};

export default Hero;