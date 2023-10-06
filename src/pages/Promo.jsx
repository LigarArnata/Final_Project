import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import AboutImg from "../assets/4.jpg";

const Promo = () => {
    return(
        <>
            <Navbar/>
            <Hero
            cName='heroMid'
            heroImage={AboutImg}
            title= 'Promo'
            btnClass= 'hide'
            />
        </>
    )
}

export default Promo;