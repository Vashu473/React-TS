import React from "react";
import "./style.css";
import { Box, Card, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const SliderWrapper = () => {
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
          <IconButton>
            <ArrowCircleLeftIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </IconButton>
          <IconButton>
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
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
        <Card
          style={{
            width: "250px",
          }}
        >
          <h1>Hi Vashu</h1>
        </Card>
      </Box>
      <div className="ll"></div>
    </Box>
  );
};

export default SliderWrapper;
