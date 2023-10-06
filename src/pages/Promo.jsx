import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import promoImg from "../assets/4.jpg";

const Promo = () => {
    return(
        <>
            <Navbar/>
            <Hero
            cName='heroMid'
            heroImage={promoImg}
            title= 'Promo'
            btnClass= 'hide'
            />
        </>
    )
}

export default Promo;