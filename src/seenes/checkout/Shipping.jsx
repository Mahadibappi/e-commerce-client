import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      <Box>
        <Typography sx={{ mb: "15px", fontSize: "18px" }}>
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          value={values.billingAddress}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </Box>

      <Box>
        <FormControlLabel
          label="Same for Shipping Address"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )
              }
            />
          }
        />
      </Box>
      {/* shipping form */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography>Shipping Information</Typography>
          <AddressForm
            type="shippingAddress"
            value={values.shippingAddress}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
