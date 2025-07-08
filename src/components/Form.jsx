import Planet from "./Planet.jsx";

const Form = () => {
    const handleClick = (e) => {
        e.preventDefault();
        alert('Form sent!')
    }
    return (
        <div className={'container'}>
            <form>
                <label htmlFor={'firstname'}>First name</label>
                <input type={'text'} id={'firstname'} name={'firstname'} placeholder={'Enter your name..'}/>

                <label htmlFor={'lastname'}>Last name</label>
                <input type={'text'} id={'lastname'} name={'lastname'} placeholder={'Enter your lastname..'}/>

                <label htmlFor="country">Country</label>

                <Planet/>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input onClick={handleClick} type="submit" className="nav-item btn btn-danger mx-1" value="Submit"/>
            </form>
        </div>
    );
};

export default Form;