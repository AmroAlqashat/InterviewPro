import React, { useState } from "react";
import PropTypes from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function MySnackbar({ open, onClose, message }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={3500}
      onClose={onClose}
    >
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  );
}

MySnackbar.propTypes = {
    open: PropTypes.bool,
    message: PropTypes.string,
    onClose: PropTypes.func,
};

export default MySnackbar;
