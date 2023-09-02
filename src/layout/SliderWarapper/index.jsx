import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Card, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const SliderWrapper = ({ children, title, noOfCards = 3 }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? children.length - noOfCards : prevIndex - noOfCards
    );
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex >= children.length - noOfCards ? 0 : prevIndex + noOfCards
    );
  };

  return (
    <Box className="c-c">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>{title}</h2>
        <div>
          <IconButton onClick={prevSlide}>
            <ArrowCircleLeftIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </IconButton>
          <IconButton onClick={nextSlide}>
            <ArrowCircleRightIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </IconButton>
        </div>
      </Box>
      <Box
        className="slider-v"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`slide ${
              index >= slideIndex && index < slideIndex + noOfCards
                ? "active"
                : ""
            }`}
          >
            {child}
          </div>
        ))}
      </Box>
      <div className="ll"></div>
    </Box>
  );
};

export default SliderWrapper;
