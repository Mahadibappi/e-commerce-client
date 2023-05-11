import { Box, useMediaQuery } from "@mui/material";
import { getIn } from "formik";
import React from "react";

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const formattedName = (field) => `${type}.${field}`;
  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );
  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4,(minMax(0,1fr)"
      sx={{ "&> duv": { gridColumn: isNonMobile ? undefined : "span 4" } }}
    ></Box>
  );
};

export default AddressForm;
