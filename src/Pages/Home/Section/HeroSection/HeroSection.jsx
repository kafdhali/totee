import "./heroSection.css";
function HeroSection() {
  return (
    <section className="section-hero">
      <div className="text-box">
        <h1>Live life easier, with totee.</h1>
        <h2>Sustainable screen Printed totedbags</h2>
        <button>Shop Now</button>
      </div>
      <div className="hero-image">
        <img src="../public/images/tote-bag-hero.png" />
      </div>
    </section>
  );
}

export default HeroSection;
