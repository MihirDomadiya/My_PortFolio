import About from "@/components/About";
import Header from "@/components/Header";
import Starter from "@/components/Starter";
import Skills from "@/components/Skills";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Journey from "@/components/Journey";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";
import Testimonials from "@/components/Testimonials";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
    return (
        <div className="main-container">
            <PageLoader />
            <Header />
            <Starter />
            <About />
            <Journey />
            <Skills />
            {/* <Testimonials /> */}
            <Connect />
            <Footer />
            <ScrollToTop />
            {/* <ChatWidget /> */}
        </div>
    );
}
