/* eslint-disable */
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export async function getStaticProps() {
  const response = await fetch("https://reeza.netlify.app/api/Pwirtifilii");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
const Portfolio = (props) => {
  const { data } = props;
  return (
    <div className="mx-auto flex justify-center -mt-32 md:-mt-0  p-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-sm">
        {data.map((item) => (
          <div
            key={item.client}
            className="w-72 md:w-96 h-auto flex flex-col justify-center bg-secondary"
          >
            <Carousel autoPlay infiniteLoop showArrows={false}>
              {item.images.map((image) => (
                <Image
                  key={image}
                  src={image}
                  alt={item.client}
                  width={500}
                  height={500}
                  className=" w-full h-full bg-cover"
                />
              ))}
            </Carousel>
            <a
              href={item.videoLink}
              className="font-bold -mt-10 p-4 text-center text-white"
            >
              {item.client}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
