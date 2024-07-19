import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.darkz",
        color: "white",
        p: 2,
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2">
        &copy {new Date().getFullYear()} Weather App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
