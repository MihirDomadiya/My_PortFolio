import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <div className={`text-white py-5 aboutSection`}>
        <div className="text-center container">
          <p className={`fw-bold sectionTitle`}>About Me</p>
          <h1 className={`fw-bold heading`}>Hi There!</h1>
          <p className={`mx-auto description`}>
            I’m <span className="fw-bold">Mihir Domadiya</span>, a passionate
            graphic designer with expertise in visual storytelling and a sharp
            eye for detail. Since 2018, I’ve honed my skills in crafting designs
            that balance creativity and precision, mastering design principles
            like <span className="typography">Typography</span>, com
            <span className="curly">{"{pos}"}</span>ition, and{" "}
            <span className="colorful">color</span> theory while staying adept
            with the latest tools and trends.
          </p>
          <p className="mt-4 text-muted">Want to know more about me!</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#" className="text-white text-decoration-none fw-semibold">
              Let's Connect
            </a>
            <span className="text-white">|</span>
            <a href="#" className="text-white text-decoration-none fw-semibold">
              Blog
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
