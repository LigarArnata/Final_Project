import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import categoryImg from "../assets/3.jpg";

const Category = () => {
    return(
        <>
            <Navbar/>
            <Hero
            cName='heroMid'
            heroImage={categoryImg}
            title= 'Category'
            btnClass= 'hide'
            />
        </>
    )
}

export default Category;