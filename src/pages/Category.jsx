import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import AboutImg from "../assets/3.jpg";

const Category = () => {
    return(
        <>
            <Navbar/>
            <Hero
            cName='heroMid'
            heroImage={AboutImg}
            title= 'Category'
            btnClass= 'hide'
            />
        </>
    )
}

export default Category;