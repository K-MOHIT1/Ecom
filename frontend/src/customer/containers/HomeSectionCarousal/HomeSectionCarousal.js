import React, { useRef, useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousal = ({data,sectionName}) => {

  const carouselRef = useRef(null);

  const [activeIndex,setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5.5 },

  };

  const handleSlideChanged = (e) => {
    setActiveIndex(e.item);
  };



  const items = data.slice(0,10).map((item) => (
    <HomeSectionCard product={item}></HomeSectionCard>
  ));

  const isFirstSlide = activeIndex === 0;
  const isLastSlide = activeIndex >= items.length - 5;

  return (
    <div className="border">

      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">

        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          mouseTracking
          animationDuration={500}
          onSlideChanged={handleSlideChanged}
        />

        {/* NEXT BUTTON */}
        {!isLastSlide && (
          <Button
            onClick={() => carouselRef.current?.slideNext()}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
              zIndex: 50,
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {/* PREV BUTTON */}
        {!isFirstSlide && (
          <Button
            onClick={() => carouselRef.current?.slidePrev()}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
              zIndex: 50,
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

      </div>
    </div>
  );
};

export default HomeSectionCarousal;
