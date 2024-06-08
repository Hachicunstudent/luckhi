import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  const minHeight = '400px'; // Chiều cao cố định cho carousel
  const minWidth = '300px'; // Chiều rộng cố định cho carousel

  return (
    <Box position="relative" height={minHeight} width={minWidth} overflow="hidden">
      <Carousel infiniteLoop showThumbs={false} showStatus={false} autoPlay interval={3000}>
        {slides.map((slide, index) => (
          <Image key={index} src={slide.image} objectFit="contain" height={minHeight} width={minWidth} />
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;
