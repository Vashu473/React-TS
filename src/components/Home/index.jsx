import React from "react";
import Navbar from "../../layout/HomeNavbar";
import SliderWrapper from "../../layout/SliderWarapper";
import { Card, Typography } from "@mui/material";
import "./style.css";
import DownHome from "../DoweHome";
const Home = () => {
  const oneRow = [
    {
      name: "Burger 1",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 2",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 3",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 4",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 5",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 6",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 7",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 8",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 9",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 10",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 11",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 12",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
    {
      name: "Burger 13",
      price: 100,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      brand: "ABC",
      rating: 2.5,
      isVeg: true,
      delivery: "fast",
      isOfferAvaliable: true,
      id: "vskdnjv",
    },
  ];
  return (
    <>
      <Navbar />
      {/* 1 st row */}
      <SliderWrapper title="What's on your mind?" noOfCards={5}>
        {oneRow.map((data) => {
          return (
            <Card key={data.id}>
              <img src={data.img} alt="food" className="c-img" />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  fontWeight: "600",
                  color: "#6d6f71",
                  fontSize: "17px",
                }}
              >
                Rating: {data.rating}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#6d6f71",
                  fontSize: "20px",
                }}
              >
                {data.name}
              </Typography>
            </Card>
          );
        })}
      </SliderWrapper>
      {/* 2 nd row */}
      <SliderWrapper title="Top restaurant chains in Lucknow" noOfCards={4}>
        {oneRow.map((data) => {
          return (
            <Card key={data.id}>
              <img src={data.img} alt="food" className="c-img" />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  fontWeight: "600",
                  color: "#6d6f71",
                  fontSize: "17px",
                }}
              >
                Rating: {data.rating}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#6d6f71",
                  fontSize: "20px",
                }}
              >
                {data.name}
              </Typography>
            </Card>
          );
        })}
      </SliderWrapper>
      <DownHome />
    </>
  );
};

export default Home;
