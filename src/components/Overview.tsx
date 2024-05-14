// import data
import { overview } from "../data";

const Overview = () => {
  // destructure overview data
  const { productImg } = overview;
  return (
    <section className=" lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]">
      <div
        className="container mx-auto flex justify-end overflow-x-hidden"
        data-aos="fade-up"
      >
        <img
          src={productImg}
          alt=""
        />
      </div>
    </section>
  );
};

export default Overview;
