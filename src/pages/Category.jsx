import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import CategoryImg from "../assets/3.jpg";

const Category = () => {
    return(
        <>
            <Navbar/>
            <Hero
            cName='heroMid'
            heroImage={CategoryImg}
            title= 'Category'
            btnClass= 'hide'
            />
        </>
    )
}

export default Category;