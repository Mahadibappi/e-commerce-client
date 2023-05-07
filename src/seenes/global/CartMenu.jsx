import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import closeIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { Box, IconButton, Typography } from "@mui/material";
import { setIsCartOpen } from "../../state";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function CartMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);
  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0,0,0,0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          <FlexBox mb="15px">
            <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <closeIcon />
            </IconButton>
          </FlexBox>
        </Box>
      </Box>
    </Box>
  );
}

export default CartMenu;
