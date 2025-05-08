import About from "@/components/About";
import Header from "@/components/Header";
import Starter from "@/components/Starter";
import Skills from "@/components/Skills";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Journey from "@/components/Journey";

export default function Home() {
    return (
        <div className="main-container">
            <Header />
            <Starter />
            <About />
            <Journey />
            <Skills />
            <Connect />
            <Footer />
        </div>
    );
}
