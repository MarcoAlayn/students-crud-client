import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";

export default function AlertFeedback() {
  const { isFetchSuccess, fetchMessage } = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");

  const cerrar = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (fetchMessage !== null) {
      setSeverity(isFetchSuccess ? "success" : "error");
      setOpen(true);
    }
  }, [isFetchSuccess, fetchMessage]);

  console.count("render");

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={cerrar}>
      <Alert
        onClose={cerrar}
        severity={severity}
        variant='filled'
        sx={{ width: "100%" }}
      >
        {fetchMessage}
      </Alert>
    </Snackbar>
  );
}
