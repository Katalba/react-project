import BtnComprar from "../BtnComprar/BtnComprar";
import Categories from "./Categories/Categories";
import CarouselHome from "./CarouselHome/CarouselHome";

const HomeSection = () => {
    return (
        <>
            <header>
                <BtnComprar shop={"Ver todo"}/>
            </header>
            <CarouselHome /> 
            <Categories />
        </>
    );
}

export default HomeSection;
