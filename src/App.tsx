import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme, globalStyles } from "./stylesConfig";
import { Global } from "@emotion/core";
import { Box, Heading } from "@react-yuki/ui";
import Slider from "./Slider";
import "./style.css";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyles} />
      <Box p={4} className="sliderContainer">
        <Box>
          <Slider
            id="thumbs-gallery-with-two-way-control"
            hasImage
            params={[
              {
                containerClass:
                  "milad swiper-container swiper-container-initialized swiper-container-vertical",
                spaceBetween: 10,
                direction: "vertical",
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                }
              },
              {
                containerClass:
                  "thumb swiper-container swiper-container-initialized swiper-container-vertical",

                direction: "vertical",
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: "auto",
                touchRatio: 0.2,
                slideToClickedSlide: true
              }
            ]}
          />
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

export default App;
