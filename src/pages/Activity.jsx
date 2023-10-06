import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ActivtyImg from "../assets/1.jpg";

const Activity = () => {
    return(
        <>
            <Navbar/>
            <Hero
            cName='heroMid'
            heroImage={ActivityImg}
            title= 'Activity'
            btnClass= 'hide'
            />
        </>
    )
}

export default Activity;