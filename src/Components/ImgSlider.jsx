import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "/Images/slider-badag.jpg", alt: "Slider Badag", link: "/fi" },
  { src: "/Images/slider-scale.jpg", alt: "Slider Scale", link: "/fi" },
  { src: "/Images/slider-badging.jpg", alt: "Slider Badging", link: "/fi" },
];

const ImgSlider = () => {
  let settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Slider
      className="mt-5 h-full w-full my-slider pointer-events-none z-30 "
      {...settings}
    >
      {images.map((image, index) => (
        <div className="wrap" key={index}>
          <a href={image.link} className="Slider">
            <img src={image.src} alt={image.alt} className="w-full h-full" />
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
