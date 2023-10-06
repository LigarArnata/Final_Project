import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import activityImg from "../assets/1.jpg";

const Activity = () => {
    return(
        <>
            <Navbar/>
            <Hero
            cName='heroMid'
            heroImage={activityImg}
            title= 'Activity'
            btnClass= 'hide'
            />
        </>
    )
}

export default Activity;