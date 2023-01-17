import React from "react";
import { Alert } from "@mui/material";

export const AlertSuccess = ({ message }) => {
  return <Alert severity="success">message</Alert>;
};

export const AlertWarning = ({ message }) => {
  return <Alert severity="warning">message</Alert>;
};

export const AlertInfo = ({ message }) => {
  return <Alert severity="info">message</Alert>;
};

export const AlertError = ({ message }) => {
  return <Alert severity="error">message</Alert>;
};
