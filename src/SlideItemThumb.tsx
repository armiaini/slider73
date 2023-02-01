import React, { FC } from "react";
import { Box, Heading, Image, theme } from "@react-yuki/ui";
import { SlideProps } from "./types";

const SlideThumb: FC<SlideProps> = ({ content, ...styles }) => {
  return (
    <Box justifyContent="center" alignItems="center" height="20rem">
      <img src={content} />
    </Box>
  );
};

SlideThumb.defaultProps = {
  fill: theme.colors.gray[2]
};

SlideThumb.displayName = "SlideThumb";

export default SlideThumb;
