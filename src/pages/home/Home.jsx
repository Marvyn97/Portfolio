import React from "react";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Portfolio from "../../components/Portfolio/Portfolio";
import Skills from "../../components/Skills/Skills";

function Home() {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;