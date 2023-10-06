import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import homeImg from "../assets/2.jpg";

const Home = () => {
    return(
        <>
        <Navbar/>
        <Hero
            cName='hero'
            heroImage= {homeImg}
            title= 'Your Journey Your Story'
            text= 'Choose Your Favourite Destination'
            btnText= 'Travel Plan'
            url= '/'
            btnClass= 'show'
        />
        </>
    )
}

export default Home;