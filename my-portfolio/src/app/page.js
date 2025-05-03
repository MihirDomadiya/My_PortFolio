import About from "@/components/About";
import Header from "@/components/Header";
import Starter from "@/components/Starter";

export default function Home() {
    return (
        <div className="main-container">
            <Header />
            <Starter />
            <About />
        </div>
    );
}
