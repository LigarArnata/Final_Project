import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import PromoImg from "../assets/4.jpg";

const Promo = () => {
    return(
        <>
            <Navbar/>
            <Hero
            cName='heroMid'
            heroImage={PromoImg}
            title= 'Promo'
            btnClass= 'hide'
            />
        </>
    )
}

export default Promo;