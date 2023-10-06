import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import AboutImg from "../assets/1.jpg";

const Activity = () => {
    return(
        <>
            <Navbar/>
            <Hero
            cName='heroMid'
            heroImage={AboutImg}
            title= 'Activity'
            btnClass= 'hide'
            />
        </>
    )
}

export default Activity;