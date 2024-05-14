// import data
import { product } from "../data";

// import components
import Cards from "./Cards";

const Product = () => {
  // destructure product data
  const { title, subtitle } = product;
  return (
    <section>
      <div className="container mx-auto">
        {/* title & subtitle */}
        <div className="flex flex-col items-center lg:flex-row mb-10 lg:mb-20">
          <h2
            className="section-title"
            data-aos="fade-up"
          >
            {title}
          </h2>
          <p
            className="lead lg:max-w-[350px]"
            data-aos="fade-down"
          >
            {subtitle}
          </p>
        </div>
        {/* cards */}
        <Cards />
      </div>
    </section>
  );
};

export default Product;
