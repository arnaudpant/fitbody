import Aos from "aos";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Excercices from "./components/UI/Excercices";
import Footer from "./components/UI/Footer";
import Hero from "./components/UI/Hero";
import Pricing from "./components/UI/Pricing";
import Start from "./components/UI/Start";
// import Testimonials from "./components/UI/Testimonials";
import "./style/style.css";

function App() {

    useEffect( () => {
        Aos.init()
    }, [] )

    return (
        <>
            <Header />
            <Hero />
            <Excercices />
            <Start />
            <Pricing />
            {/* <Testimonials /> */}
            <Footer />
        </>
    );
}

export default App;
