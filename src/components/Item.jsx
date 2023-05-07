import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const distpatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [isHover, setIsHover] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();
  const { category, price, name, image } = item.attributes;

  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box>
      <Typography>Hello</Typography>
    </Box>
  );
};

export default Item;
