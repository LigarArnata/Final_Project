import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import aboutImg from "../assets/5.jpg";

const About = () => {
    return(
        <>
        <Navbar/>
        <Hero
            cName='heroMid'
            heroImage={aboutImg}
            title= 'About'
            btnClass= 'hide'
        />
        </>
    )
}

export default About;