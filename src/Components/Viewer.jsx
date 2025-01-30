import React from "react";

const Viewer = () => {
  const videos = [
    {
      img: "/Images/viewers-disney.png",
      video: "/videos/1564674844-disney.mp4",
      alt: "Disney",
    },
    {
      img: "/Images/viewers-marvel.png",
      video: "/videos/1564676115-marvel.mp4",
      alt: "Marvel",
    },
    {
      img: "/Images/viewers-national.png",
      video: "/videos/1564676296-national-geographic.mp4",
      alt: "National Geographic",
    },
    {
      img: "/Images/viewers-pixar.png",
      video: "/videos/1564676714-pixar.mp4",
      alt: "Pixar",
    },
    {
      img: "/Images/viewers-starwars.png",
      video: "/videos/1608229455-star-wars.mp4",
      alt: "Star Wars",
    },
  ];

  return (
    <div className="mt-8 grid gap-5 md:grid-cols-5 grid-cols-1">
      {videos.map((item, index) => (
        <div className="videoBox" key={index}>
          <img className="imgBox" src={item.img} alt={item.alt} />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
            className="onlyVideo"
          >
            <source src={item.video} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
};

export default Viewer;
