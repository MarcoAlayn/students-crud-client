import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";
import { useSelector } from "react-redux";

export default function Loader(open) {
  const { fetchInProcess } = useSelector((state) => state);
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={fetchInProcess}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
}
