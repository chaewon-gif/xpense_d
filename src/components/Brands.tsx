// import data
import { overview } from "../data";

const Brands = () => {
  // destructure overview data
  const { brands } = overview;
  return (
    <section className="py-9 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 ">
        {/* brands */}
        {brands.map((item, idx) => {
          // destructure item
          const { image, delay } = item;
          return (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <img
                src={image}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
