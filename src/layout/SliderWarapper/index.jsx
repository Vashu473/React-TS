import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Card, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const SliderWrapper = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 3 : prevIndex - 3
    );
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex >= children.length - 3 ? 0 : prevIndex + 3
    );
  };

  return (
    <Box
      sx={{
        margin: "20px auto",
        width: "90%",
        padding: "10px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Title</h2>
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
            className={`slide ${index >= 0 && index < 0 + 3 ? "active" : ""}`}
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
