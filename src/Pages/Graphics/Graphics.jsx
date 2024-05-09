import ProductList from "../../components/ProductsList";
import "../../Pages/Home/Section/FeaturedSection/featuredSection.css";

function Graphics() {
  return (
    <section className="Section">
      <div>
        <h3>Hot Picks</h3>
        <h2>Grab a totee</h2>
        <span>Easiest way to easy life by buying your favorite tote </span>{" "}
      </div>

      <ProductList />
    </section>
  );
}
export default Graphics;
